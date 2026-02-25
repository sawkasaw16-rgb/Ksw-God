const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware to parse JSON bodies
app.use(express.json());

// Serve static files from the 'public' directory
app.use(express.static(path.join(__dirname, 'public')));

// Endpoint for template management
app.get('/api/templates', (req, res) => {
    // Logic to get templates
    res.json({ message: 'List of templates' });
});

app.post('/api/templates', (req, res) => {
    // Logic to create a new template
    const newTemplate = req.body;
    res.status(201).json({ message: 'Template created', template: newTemplate });
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});