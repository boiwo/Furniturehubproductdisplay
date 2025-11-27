
async function testBackendConnection() {
  const backendUrl = 'https://furniturehubproductdisplay-1.onrender.com/api';
  
  try {
    console.log('Testing backend connection...');
    console.log('Backend URL:', backendUrl);
    
    const response = await fetch(backendUrl, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Origin': 'http://localhost:3000'
      }
    });
    
    console.log('Response status:', response.status);
    console.log('Response headers:', Object.fromEntries(response.headers.entries()));
    
    if (response.ok) {
      const products = await response.json();
      console.log('✅ Backend connection successful!');
      console.log('✅ Products fetched:', products.length);
      console.log('✅ First product:', products[0]?.name || 'No products found');
      return true;
    } else {
      console.log('❌ Backend connection failed:', response.status);
      return false;
    }
  } catch (error) {
    console.log('❌ Error connecting to backend:', error.message);
    return false;
  }
}

testBackendConnection();