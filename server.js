const { spawnSync } = require('child_process');
const bodyParser = require('body-parser');
const express = require('express');
const path = require("path");

const app = express();
const PORT = process.env.PORT || 5500;

app.use(bodyParser.json());

// Serve the static html through express. open http://localhost:5500/ to chat
app.use(express.static(path.join(__dirname, "client")));

app.post('/chat', (req, res) => {
    const userInput = req.body.message;
    console.log(userInput);

    // Execute the Python script as a child process
    const response = spawnSync('python', ["server.py", userInput]).stdout.toString();
    console.log(userInput);
    console.log(response);

    res.json({ response });
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
