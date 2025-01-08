// app.js

const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

// Root route
app.get('/', (req, res) => {
  res.send('Hello from Node.js API on EKS!');
});

// Sample API endpoint
app.get('/api', (req, res) => {
  res.json({ message: 'Welcome to the API!' });
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});