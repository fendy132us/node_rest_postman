'use strict';

var response = require('./res');
var connection = require('./koneksi');

exports.index = function(req, resp) 
{
    response.ok("Aplikasi REST API ku berjalan !", resp);
};

exports.select_all = function(req,resp)
{
   connection.query('select * from mahasiswa', function(error,rows,fields)
   {
       if(error)
       {
           connection.log(error);
       }
       else {
          response.ok(rows,resp)
       }
   });
};