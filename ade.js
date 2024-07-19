const express = require('express');
const path = require('path');
const app = express();

// Serve static files (HTML, CSS, JS)
app.use(express.static(path.join(__dirname, 'public')));

// Define a route to serve the main HTML file
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Set the port
const port = process.env.PORT || 3000;

// Start the server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
