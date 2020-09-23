var connection = require('../koneksi');
var mysql = require('mysql');
var md5 = require('MD5');
var response = require('../res');
var config = require('../config.secret');
var ip  = require('ip');

exports.registrasi = function(req,resp)
{
    var post = {
        username: req.body.username,
        email : req.body.email,
        password: md5(req.body.password),
        role : req.body.role,
        tgl_daftar : new Date()
    }

    var query = 'select email from ?? where ??';
    var table = ['user','email',post.email];

    query = mysql.format(query,table);

    connection.query(query,function(err,rows)
    {
       if(err) { 
          console.log(err)
       }
       else {
           if(rows.length==0) 
           {
               var query = 'insert into ?? set ?';
               var table = ['user'];
               query = mysql.format(query,table);
               connection.query(query,post, function(err,rows)
               {
                  if(err)
                  {
                      console.log(err);
                  }
                  else {
                     response.ok('Berhasil menambahkan data user baru',resp);
                  }
               });
           }
           else
           {
               response.ok('Email sudah terdaftar');
           }

       }
    });    

};