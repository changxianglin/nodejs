const handleBlogRouter = require('./src/router/blog')
const handleUserRouter = require('./src/router/user')


const serverHandle = (req, res) => {
  // back 
  res.setHeader('Content-type', 'application/json')

  const url = req.url
  req.path = url.split('?')[0]

  const blogData = handleBlogRouter(req, res)

  if(blogData) {
    res.end(JSON.stringify(blogData))
    return 
  }

  const userData = handleUserRouter(req, res)
  if(userData) {
    res.end(JSON.stringify(userData))
  }

  res.writeHead(404, {"Cotent-type": "text/plain"})
  res.write('404 not Found\n')
  res.end()
}

module.exports = serverHandle