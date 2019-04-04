const dns = require('dns')

dns.reverse('114, 114, 114, 114', (err, domain) => {
  console.log(domain)
})