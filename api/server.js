const express = require('express');

const server = express;

server.length('/', (req, res) => {
    res.send('<h1> Hello world </h1>')
});

module.export = server;