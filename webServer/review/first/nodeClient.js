// const net = require('net');
//
// const client = net.connect({port: 8124}, () => {
//     // 'connect' listener
//     console.log('connected to server!');
// client.write('world!\r\n');
// });
// client.on('data', (data) => {
//     console.log(data.toString());
// client.end();
// });
// client.on('end', () => {
//     console.log('disconnected from server');
// });



const net = require('net');
const host = '61.164.158.2'
const port = 80

const client = net.connect(port, host, () => {
    // 'connect' listener
    console.log('connected to server!');
    var request = 'GET / HTTP/1.1\r\nHost: blog.163.com\r\n\r\n'
    client.write(request);
});

client.on('data', (data) => {
    console.log(data.toString());
    client.destroy()
});
client.on('close', () => {
    console.log('disconnected from server');
});



