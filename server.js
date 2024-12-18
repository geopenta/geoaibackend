// Import Express
const express = require('express');
const app = express();
const PORT = 3000;

// Middleware to parse JSON data
app.use(express.json());

// Define sendEmail function
const sendEmail = async ({ name, email, subject, message, type }) => {
  // Simulate email sending logic
  console.log('Email details:', { name, email, subject, message, type });
  return Promise.resolve('Email sent successfully'); // Simulate success
};

// Handle POST requests to /api/onboard
app.post('/api/onboard', async (req, res) => {
  try {
    await sendEmail({
      name: req.body.fullName,
      email: req.body.companyName,
      subject: req.body.service,
      message: req.body.requirements,
      type: 'onboard'
    });
    res.json({ success: true });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
