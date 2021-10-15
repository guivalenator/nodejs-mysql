const mysql = require('mysql');

module.exports = () =>{
    return mysql.createConnection({
        host: 'localhost',
        user: 'root',
        database: 'mafecar',
        password: 'Mrdbhk1256I'
    })
}