'use strict';

var response = require('./res');
var connection = require('/koneksi');

exports.index = function(req, resp) 
{
    response.ok("Aplikasi REST API ku berjalan !");
};