// Replace 'YOUR_API_ENDPOINT' with the actual endpoint of your FormSubmit API
const apiEndpoint = 'https://your-api-endpoint.com/submit';

// Define the data you want to send to the API in JSON format
const formData = {
  name: 'FreedomCode',
  email: 'freedomcode@gmail.com',
  message: 'Hello, FormSubmit API!'
};

// Create a request object with the appropriate method, headers, and body
const requestOptions = {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json' // Specify the content type as JSON
  },
  body: JSON.stringify(formData) // Convert the data to JSON format
};

// Make the API request
fetch(apiEndpoint, requestOptions)
  .then(response => {
    if (!response.ok) {
      throw new Error(`API request failed with status ${response.status}`);
    }
    return response.json(); // Parse the response JSON
  })
  .then(data => {
    // Handle the API response data here
    console.log('API Response:', data);
  })
  .catch(error => {
    // Handle errors here
    console.error('API Request Error:', error);
  });
