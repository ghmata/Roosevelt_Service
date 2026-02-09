import { streamText, convertToModelMessages } from 'ai';
import { getAIProvider, AI_CONFIG } from '../src/lib/ai/config';

export const config = {
  runtime: 'edge',
};

export default async function handler(req: Request) {
  if (req.method !== 'POST') {
    return new Response('Method not allowed', { status: 405 });
  }

  try {
    const { messages } = await req.json();

    const result = await streamText({
      model: getAIProvider(),
      system: AI_CONFIG.system,
      messages: convertToModelMessages(messages),
      temperature: AI_CONFIG.temperature,
      maxTokens: AI_CONFIG.maxTokens,
    });

    return result.toTextStreamResponse();

  } catch (error) {
    console.error('Error in chat API:', error);
    return new Response(JSON.stringify({ error: 'Internal Server Error' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}
