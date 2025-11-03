const express = require('express');
const request = require('request');
const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

app.post('/proxy', (req, res) => {
    const { token } = req.body;
    request.post({
        url: 'https://discord.com/api/v9/auth/login',
        json: true,
        body: { token }
    }, (error, response, body) => {
        if (error) {
            return res.status(500).json({ success: false, error: error.message });
        }
        res.json(body);
    });
});

app.listen(port, () => {
    console.log(`Proxy server listening at http://localhost:${port}`);
});
