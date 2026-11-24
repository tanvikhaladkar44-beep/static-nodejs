const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Serve static assets from the 'public' directory
app.use(express.static(path.join(__dirname, 'public')));

// Fallback to index.html for root route
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Start the server
app.listen(PORT, () => {
  console.log(`=========================================`);
  console.log(` Static Node.js Server is Running!`);
  console.log(` URL: http://localhost:${PORT}`);
  console.log(` Static Directory: ${path.join(__dirname, 'public')}`);
  console.log(`=========================================`);
});
