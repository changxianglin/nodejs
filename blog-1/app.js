const querystring = require('querystring')
const handleBlogRouter = require('./src/router/blog')
const handleUserRouter = require('./src/router/user')


const getPostData = (req) => {
  const promise = new Promise((resolve, rejects) => {
      if(req.method !== 'POST') {
        resolve({})
        return
      }

      if(req.headers['content-type'] !== 'application/json') {
        resolve({})
        return
      }

      let postData = ''
      req.on('data', chunk => {
        postData += chunk.toString()
      })

      req.on('end', () => {
        if(!postData ) {
          resolve({})
          return
        }
        resolve(JSON.parse(postData))
      })
  })

  return promise
}

const serverHandle = (req, res) => {
  // back 
  res.setHeader('Content-type', 'application/json')

  const url = req.url
  req.path = url.split('?')[0]

  req.query = querystring.parse(url.split('?')[0])

  const blogData = handleBlogRouter(req, res)

  if(blogData) {
    res.end(JSON.stringify(blogData))
    return 
  }

  const userData = handleUserRouter(req, res)
  if(userData) {
    res.end(JSON.stringify(userData))
  } else {
    res.writeHead(404, {"Cotent-type": "text/plain"})
    res.write('404 not Found\n')
    res.end()
  }
}

module.exports = serverHandle