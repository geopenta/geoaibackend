const express = require('express');
const cors = require('cors'); // Step 1: Import CORS
const app = express();
const PORT = process.env.PORT || 3000;

// Step 2: Enable CORS
app.use(cors());

// Middleware to parse JSON data
app.use(express.json());

// Simulated email function
const sendEmail = async ({ name, email, subject, message, type }) => {
    console.log('Email details:', { name, email, subject, message, type });
    return Promise.resolve('Email sent successfully');
};

// Handle POST requests to /api/onboard
app.post('/api/onboard', async (req, res) => {
    try {
        // Simulated email function
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
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

