'use strict';
var server = require('server');

var assignment = require('*/cartridge/scripts/middleware/assignment');

server.get('Find',assignment.Car, function (req, res, next) {
    res.render('assinment');
    next();
});

module.exports = server.exports();