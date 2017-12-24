const mysql = require('mysql')

const connection = mysql.createConnection({
    host : 'localhost',
    user : 'root',
    password : '123456',
    port : '3306',
    database : 'sys',
})

connection.connect()

var delSql = 'DELETE FROM websites where id = 5'

connection.query(delSql, function(err, result) {
    if (err) {
        console.log('[DELETE ERROR] - ', err.message)
        return
    }
    console.log('----DELETE----')
    console.log('DELETE affectRows', result.affectedRows)
    console.log('-------')
})

connection.end()