// app.js

const express = require('express');
const os = require('os'); // Import os module
const fs = require('fs'); // Import fs module to read from the file system
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

// New endpoint to get pod and node information
app.get('/node', (req, res) => {
  // Get the hostname (pod name)
  const hostname = os.hostname();

  // Read node name from the Kubernetes downward API (we'll set this up later)
  const nodeName = process.env.NODE_NAME || 'Unknown';

  res.json({
    message: 'Hello from Kubernetes!',
    pod: hostname,
    node: nodeName,
  });
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});