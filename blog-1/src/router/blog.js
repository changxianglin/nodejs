const handleBlogRouter = (req, res) => {
  const method = req.method

  if(method === 'GET' && req.path === '/api/blog/list') {
    return {
      msg: 'this is a get blog list api.'
    }
  }

  if(method === 'GET' && req.path === '/api/blog/detail') {
    return {
      msg: 'this is a get a blog detail.'
    }
  }

  if(method === 'POST' && req.path === '/api/blog/update') {
    return {
      msg: 'this is a update a blog api.'
    }
  }

  if(method === 'POST' && req.path === '/api/blog/del') {
    return {
      msg: 'this is a delete a blog api.'
    }
  }
}

module.exports = handleBlogRouter