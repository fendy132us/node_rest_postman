'use strict';

var response = require('./res');
var connection = require('./koneksi');

exports.index = function(req, resp) 
{
    response.ok("Aplikasi REST API ku berjalan !", resp);
};

exports.select_all = function(req,resp)
{
   connection.query('select * from mahasiswa', function(error,rows)
   {
       if(error)
       {
           console.log(error);
       }
       else {
          response.ok(rows,resp)
       }
   });
};

exports.select_id = function(req,resp)
{

    connection.query('select * from mahasiswa where id_mahasiswa = "'+ req.params.id +'"', function(error,rows)
    {
        if(error)
        {
            console.log(error);
        }
        else {
           response.ok(rows,resp)
        }      
    });
};

exports.insert = function(req,resp)
{
    var nim = req.body.nim;
    var nama = req.body.nama;
    var jurusan = req.body.jurusan;

    connection.query('insert into mahasiswa(nim,nama,jurusan) values(?,?,?)',[nim,nama,jurusan],(err,rows,) => 
                      {
                         if(err)
                         {
                             console.log(err);
                         }
                         else
                         {
                            response.ok('Berhasil insert data', resp);
                         }
                      });    
};