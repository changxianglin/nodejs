const mongodb = require('mongodb')
const server = new mongodb.Server('127.0.0.1', 27017, {})
const client = new mongodb.Db('mydatabase', server, {w: 1})

client.open(function(err) {
    if (err) throw err
    client.collection('test_insert', function(err, collection) {
        if (err) throw err
        console.log('We are now able to perform quires.')
    })
})