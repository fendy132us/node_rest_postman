var mysql = require('mysql')

var conn = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'root',
    database: 'db_rest_api'
});

conn.connect((err) =>
{
   if(err)
      throw err
   else
      console.log('Mysql terkoneksi')
}) 

module.exports = conn


