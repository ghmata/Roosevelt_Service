
import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { createOpenAI } from '@ai-sdk/openai';
import { streamText, pipeDataStreamToResponse } from 'ai';
import { AI_CONFIG } from './src/lib/ai/config.ts';

dotenv.config();

const app = express();
const port = 3001;

process.on('uncaughtException', (err) => {
  console.error('🔥 CRITICAL: Uncaught Exception:', err);
});

process.on('unhandledRejection', (reason, promise) => {
  console.error('🔥 CRITICAL: Unhandled Rejection at:', promise, 'reason:', reason);
});

app.use(cors());
app.use(express.json());

function getLocalAIProvider() {
  const useGroq = process.env.USE_GROQ === 'true';
  const apiKey = useGroq ? process.env.GROQ_API_KEY : process.env.OPENAI_API_KEY;
  const baseURL = useGroq ? 'https://api.groq.com/openai/v1' : undefined;

  const openai = createOpenAI({
    apiKey: apiKey,
    baseURL: baseURL,
  });

  return openai(useGroq ? 'meta-llama/llama-4-maverick-17b-128e-instruct' : 'gpt-4o-mini');
}

app.post('/api/chat', async (req, res) => {
  console.log('📨 Recebida requisição em /api/chat');
  try {
    const { messages } = req.body;
    
    if (!messages) {
      return res.status(400).json({ error: 'Missing messages in request body' });
    }

    console.log('🔄 Processando com streamText (AI SDK v6)...');

    const model = getLocalAIProvider();
    
    const result = await streamText({
        model: model,
        messages: messages.map((m: any) => ({
          role: m.role,
          content: m.content
        })),
        system: AI_CONFIG.system,
        temperature: AI_CONFIG.temperature,
        maxTokens: AI_CONFIG.maxTokens,
    });

    // pipeDataStreamToResponse is a helper function in AI SDK v3.4+ / v6
    // It handles headers and piping automatically
    pipeDataStreamToResponse(res, {
        execute: async (writer) => {
            // mergeIntoDataStream merges the result stream into the writer
            result.mergeIntoDataStream(writer);
        },
        onError: (error) => {
            console.error('Server Stream Error:', error);
            // We cannot send a status code here if headers are already sent
        }
    });

  } catch (error: any) {
    console.error('🔥 Erro no servidor local:', error);
    if (!res.headersSent) {
      res.status(500).json({ 
        error: error.message || 'Erro interno no servidor de IA',
        details: error.toString()
      });
    }
  }
});

app.get('/', (req, res) => {
  res.send('🤖 Roosevelt IA Server is running!');
});

app.listen(port, () => {
  console.log(`🤖 Servidor de IA rodando localmente em http://localhost:${port}`);
  console.log(`🧠 Modelo: ${process.env.USE_GROQ === 'true' ? 'Groq (Llama)' : 'OpenAI'}`);
});
