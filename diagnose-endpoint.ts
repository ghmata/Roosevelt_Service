

async function testEndpoint() {
  console.log('🔍 Testing /api/chat endpoint...');
  
  try {
    const response = await fetch('http://localhost:3001/api/chat', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        messages: [
          { role: 'user', content: 'Hello, are you online?' }
        ]
      })
    });

    console.log(`📡 Status Code: ${response.status}`);
    
    const text = await response.text();
    console.log('📦 Response Body:', text);
    
  } catch (err) {
    console.error('❌ Network Error:', err);
  }
}

testEndpoint();
