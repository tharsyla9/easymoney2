const { json } = require('express');
const express = require('express');
const { getRepository } = require('typeorm');

require('reflect-metadata');
require('./db/index.js');
app = express();

app.use(express.json());

app.listen(3333, () => {
    console.log("finalmente");
});

