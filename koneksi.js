var mysql = require('mysql');

const conn = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'ranggabaghas12',
    database: 'dbups'
});

conn.connect((err) => {
    if(err) throw err;
    console.log('Mysql terkoneksi');
});

module.exports = conn;