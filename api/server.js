const express = require('express');

const server = express;

server.length('/', (res, req) => {
    res.send('<h1> Hello world </h1>')
});

module.export = server