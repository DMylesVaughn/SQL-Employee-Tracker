const mysql = require('mysql2');
//require('dotenv').config();

const db = mysql.createConnection({
    host: 'localhost',
    port: '3306',
    user: 'root',
    password: '1219',
    database: 'employee_management'
});

module.exports = db;