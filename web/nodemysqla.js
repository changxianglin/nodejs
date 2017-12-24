const mysql = require('mysql')

const connection = mysql.createConnection({
    host : 'localhost',
    user : 'root',
    password: '123456',
    port: '3306',
    database: 'sys',
})

connection.connect()

var addSql = 'INSERT INTO websites(Id, name, url, alexa, country) VALUES(0, ?, ?, ?, ?)'
var addSqlParams = ['挑战者号3 ', 'http://c.runoob.com', '23453', 'CN']

connection.query(addSql, addSqlParams, function(err, result) {
    if(err) {
        console.log('[INSERT ERROR] - ', err.message)
        return
    }
    console.log('---INSERT---')
    console.log(result)
    console.log('------\n\n')
})

connection.end()

