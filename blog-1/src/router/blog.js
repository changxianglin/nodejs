const handleBlogRouter = (req, res) => {
  const method = req.method
  const url = req.url
  const path = url.split('?')[0]

  if(method === 'GET' && path === '/api/blog/list') {
    return {
      msg: 'this is a get blog list api.'
    }
  }

  if(method === 'GET' && path === '/api/blog/detail') {
    return {
      msg: 'this is a get a blog detail.'
    }
  }

  if(method === 'POST' && path === '/api/blog/update') {
    return {
      msg: 'this is a update a blog api.'
    }
  }

  if(method === 'POST' && path === '/api/blog/del') {
    return {
      msg: 'this is a delete a blog api.'
    }
  }
}

module.exports = handleBlogRouter