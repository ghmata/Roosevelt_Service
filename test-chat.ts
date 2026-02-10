
import fetch from 'node-fetch';

async function testChat() {
  console.log('🧪 Testing Chat Endpoint...');
  
  try {
    const response = await fetch('http://localhost:3001/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            messages: [{ role: 'user', content: 'Ping' }]
        })
    });

    console.log(`📡 Status: ${response.status}`);
    console.log(`📡 Headers:`, Object.fromEntries(response.headers.entries()));

    const text = await response.text();
    console.log('📝 Response Body:', text);

    if (response.status !== 200) {
        console.error('❌ Server returned error');
        process.exit(1);
    }

    // Since we already consumed the body with text(), we cannot get a reader from it in standard fetch.
    // But this is node-fetch... wait. response.body is a stream. calling text() consumes it.
    // For smoke test, checking text content is enough if it's a stream it will be empty or we need to buffer.
    // If it was 200, we expect a stream. 
    // Let's just exit if not 200. If 200, we successfully read text, so the stream worked (it finished).
    
    console.log(`✅ Received ${text.length} bytes`);
    
    if (text.length > 0) {
        console.log('✅ Chat Smoke Test PASSED');
    } else {
        console.error('❌ Chat Smoke Test FAILED (No data received)');
        process.exit(1);
    }

  } catch (err) {
    console.error('❌ Test FAILED:', err);
    process.exit(1);
  }
}

testChat();
