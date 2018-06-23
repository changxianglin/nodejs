const http = require('http');

const options = {
  hostname: '127.0.0.1',
  port: 8080,
  path: '/length_request'
};

// 发送请求
const req = http.request(options);
req.end();

req.on('information', (res) => {
  console.log(`在主响应之前获得信息: ${res.statusCode}`);
});
