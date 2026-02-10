import { createOpenAI } from '@ai-sdk/openai';
import { generateText } from 'ai';
import dotenv from 'dotenv';

dotenv.config();

async function testGroq() {
  console.log('🔑 Testing Groq API Key...');
  
  if (!process.env.GROQ_API_KEY) {
    console.error('❌ GROQ_API_KEY is missing in .env');
    return;
  }
  
  console.log('Context: ', {
      keyLength: process.env.GROQ_API_KEY.length,
      useGroq: process.env.USE_GROQ,
      model: 'meta-llama/llama-4-maverick-17b-128e-instruct'
  });

  const groq = createOpenAI({
    apiKey: process.env.GROQ_API_KEY,
    baseURL: 'https://api.groq.com/openai/v1',
  });

  try {
    const { text } = await generateText({
      model: groq('meta-llama/llama-4-maverick-17b-128e-instruct'),
      prompt: 'Hello, are you working?',
    });
    
    console.log('✅ Success! Response:', text);
  } catch (error) {
    console.error('❌ API Error:', error);
  }
}

testGroq();
