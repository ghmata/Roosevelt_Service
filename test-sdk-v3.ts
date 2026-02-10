import { OpenAIStream, StreamingTextResponse } from 'ai';
import dotenv from 'dotenv';
import OpenAI from 'openai';
dotenv.config();

async function testV3() {
  console.log('🧪 Testing V3 SDK Integration...');
  
  const client = new OpenAI({
    apiKey: process.env.GROQ_API_KEY,
    baseURL: 'https://api.groq.com/openai/v1',
  });

  try {
    const response = await client.chat.completions.create({
      model: 'meta-llama/llama-4-maverick-17b-128e-instruct',
      stream: true,
      messages: [{ role: 'user', content: 'Say hello!' }],
    });

    console.log('✅ Stream created successfully');
    
    // Test OpenAIStream wrapper
    const stream = OpenAIStream(response);
    const reader = stream.getReader();
    
    let result = '';
    while(true) {
        const {done, value} = await reader.read();
        if(done) break;
        result += new TextDecoder().decode(value);
        process.stdout.write('.');
    }
    console.log('\n✅ Full response received:', result);

  } catch (err) {
    console.error('❌ V3 Error:', err);
  }
}

testV3();
