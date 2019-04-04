const dns = require('dns')

let domain = 'baidu.com'

dns.lookup(domain, (err, address) => {
  if(err) {
    console.log(err)
    return 
  }
  console.log(address)
})