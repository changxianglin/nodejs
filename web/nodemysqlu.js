// const mysql = require('mysql')
// const connection = mysql.createConnection({
//     host : 'localhost',
//     user : 'root',
//     password : '123456',
//     prot : '3306',
//     database: 'sys',
// })
//
// connection.connect()
//
// var modSql = 'UPDATE websites SET name = ?, url = ? WHERE Id = ?'
// var modSqlParams = ['挑战者号升级版', 'http://m.runoob.com', 6]
//
// connection.query(modSql, modSqlParams, function(err, result) {
//     if (err) {
//         console.log('[UPDATE ERROR] - ', err.message)
//         return
//     }
//     console.log('-------UPDATE————————')
//     console.log('UPDATE affecteRows ', result.affectedRows)
//     console.log('------------\n\n')
// })
//
// connection.end()

var mysql  = require('mysql');

var connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : '123456',
    port: '3306',
    database: 'sys',
});

connection.connect();

var modSql = 'UPDATE websites SET name = ?,url = ? WHERE Id = ?';
var modSqlParams = ['挑战者号升级版', 'https://m.runoob.com',6];
//改
connection.query(modSql,modSqlParams,function (err, result) {
    if(err){
        console.log('[UPDATE ERROR] - ',err.message);
        return;
    }
    console.log('--------------------------UPDATE----------------------------');
    console.log('UPDATE affectedRows',result.affectedRows);
    console.log('-----------------------------------------------------------------\n\n');
});

connection.end();
