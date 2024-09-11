// SERVER

const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', (req,res) => {
    res.send('Hello Kahoun!');
});

app.listen(PORT, () => {
    console.log('Running on http://localhost:${PORT}')
});