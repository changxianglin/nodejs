// var net = require('net')
//
// const server = net.createServer((socket) => {
//     socket.
//     socket.write('HTTP/1.1 200 OK\r\nContent-length: 6\r\ngoodbye\n');
// }).on('error', (err) => {
//     // handle errors here
//     throw err;
// });
//
// // grab a random port.
// server.listen(8124, () => {
//     console.log('opened server on', server.address());
// });


const net = require('net');
const server = net.createServer((c) => {
    // 'connection' listener
    console.log('client connected');
c.on('data', (data) => {
    console.log(data.toString())
    c.write('HTTP/1.1 200 OK\r\nContent-length:11\r\n\r\nhello zhangsan\r\n');
    c.pipe(c);
    console.log('client disconnected');
});
});
server.on('error', (err) => {
    throw err;
});
server.listen(8124, () => {
    console.log('server bound');
});