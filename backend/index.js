const express = require('express');
const cors = require('cors');
const app = express();

// ...existing code...

app.use(cors({
  origin: 'http://localhost:3000', // Update this to match your frontend URL
  credentials: true
}));

// ...existing code...

app.post('/api/your-endpoint', (req, res) => {
  // Handle your POST request here
  res.send('POST request received');
});

// ...existing code...

app.listen(3000, () => {
  console.log('Server running on http://localhost:3000');
});
