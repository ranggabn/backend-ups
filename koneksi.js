var mysql = require('mysql');

const conn = mysql.createConnection({
    host: 'remotemysql.com',
    port: '3306',
    user: 'mwoK6cXco9',
    password: 'mPRdaz4fBF',
    database: 'mwoK6cXco9'
});

conn.connect((err) => {
    if(err) throw err;
    console.log('Mysql terkoneksi');
});

module.exports = conn;
