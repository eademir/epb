const mysql = require('mysql');
let connectdb = mysql.createConnection({
    host : 'localhost',
    user : 'root',
    password : '',
    database : 'blog-db'
    });

connection.connect(function(err) {
  if (err) {
    console.error('Veri tabanına bağlanırken hata : ' + err.stack);
    return;
  }
