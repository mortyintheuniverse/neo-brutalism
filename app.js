const http = require('http');

const server = http.createServer((req, res) => {
  // Set the response header to return JSON
  res.writeHead(200, { 'Content-Type': 'application/json' });

  // Create a sample JSON object
  const response = {
    message: 'Random site created by morty wu!',
    success: true
  };

  // Send JSON response
  res.end(JSON.stringify(response));
});

// Start server on port 80
server.listen(80, () => {
  console.log('Server is running on port 80');
});
