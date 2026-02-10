
import fetch from 'node-fetch';

async function validateServer() {
  console.log('🧪 Validating Chat Server...');
  
  try {
    const response = await fetch('http://localhost:3001/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            messages: [{ role: 'user', content: 'Ping' }]
        })
    });

    console.log(`📡 Status: ${response.status}`);
    
    if (response.status !== 200) {
        throw new Error(`Server returned ${response.status}`);
    }

    const text = await response.text();
    console.log('📝 Response length:', text.length);
    console.log('📝 Raw Response Body:', text);
    if (text.length > 0) {
        console.log('✅ Server validation PASSED');
    } else {
        console.error('❌ Server returned empty response');
    }

  } catch (err) {
    console.error('❌ Validation FAILED:', err);
    process.exit(1);
  }
}

validateServer();
