var express = require('express');

var controller = require('../controllers/auth.controller');

var app = express();

app.get('/login', controller.login);

app.post('/login', controller.postLogin);

module.exports = app;