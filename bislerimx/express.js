// Import necessary modules
const express = require('express');

// Create an instance of Express app
const app = express();

// Define routes
app.get('/api/data', (req, res) => {
  res.json({ message: 'This is the route for backend data' });
});

// Start the server
const PORT = process.env.PORT || 5004;
app.listen(PORT, () => {
  console.log(`Server is running on the following port ${PORT}`);
});

