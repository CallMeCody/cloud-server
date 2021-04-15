'use strict';

const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

let data = {};

app.get('/', (req, res) => {
    res.status(200).send(data)
});

app.post('/data', (req, res) => {
    data = req.body;
    res.status(201).send('Created.')
});

app.listen(PORT, () => console.log(`Listening on port ${PORT}`));