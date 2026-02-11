export const config = {
    runtime: 'edge',
};

import { generateReply } from '../src/lib/llm.js';

export default async function handler(req: Request) {
    if (req.method !== 'POST') {
        return new Response('Method Not Allowed', { status: 405 });
    }

    try {
        console.log('[DEBUG] Starting handler');
        console.log('[DEBUG] Environment check:', { 
            hasGroqKey: !!process.env.GROQ_API_KEY,
            hasOpenAIKey: !!process.env.OPENAI_API_KEY,
            useGroq: process.env.USE_GROQ,
            llmProvider: process.env.LLM_PROVIDER
        });

        const body = await req.json();
        console.log('[DEBUG] Body parsed successfully');
        
        const { messages } = body;

        if (!messages || !Array.isArray(messages)) {
            console.log('[DEBUG] Invalid messages format');
            return new Response(JSON.stringify({ error: 'Invalid payload: messages array required' }), {
                status: 400,
                headers: { 'Content-Type': 'application/json' }
            });
        }

        console.log('[DEBUG] Messages valid, count:', messages.length);
        console.log('[DEBUG] Calling generateReply...');
        
        const reply = await generateReply({ messages });
        
        console.log('[DEBUG] Reply generated successfully');

        return new Response(JSON.stringify({ reply }), {
            status: 200,
            headers: { 'Content-Type': 'application/json' }
        });

    } catch (error: any) {
        console.error('[ERROR] Vercel Function Error:', error);
        console.error('[ERROR] Error stack:', error.stack);
        console.error('[ERROR] Error name:', error.name);
        console.error('[ERROR] Error message:', error.message);
        
        return new Response(JSON.stringify({ 
            error: 'Internal Server Error', 
            details: error.message || String(error),
            stack: error.stack || 'No stack trace',
            name: error.name || 'Unknown error'
        }), {
            status: 500,
            headers: { 'Content-Type': 'application/json' }
        });
    }
}
