var express = require('express');

var controller = require('../controllers/user.controller');
var validate = require('../validate/user.validate');
var authMiddleware = require('../middlewares/auth.middleware');

var app = express();

app.get('/', controller.index);

app.get('/cookie', function(req, res, next) {
    res.cookie('user-id', 12345);
    res.send('Hello');
});

app.get('/search', controller.search);

app.get('/create', controller.create);

app.get('/:id', controller.get);

app.post('/create',validate.postCreate, controller.postCreate);

module.exports = app;