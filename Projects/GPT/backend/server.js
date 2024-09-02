const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const PORT = 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// POST endpoint to receive user queries and respond
app.post('/api/chat', (req, res) => {
    const userQuery = req.body.query;

    // Simulated response - Replace with your actual ChatGPT model integration
    const simulatedResponse = `Simulated response for: ${userQuery}`;

    res.json({ response: simulatedResponse });
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
