const { getList, getDetail, newBlog, updateBlog } = require('../controller/blog')
const { SuccessModel, ErrorModel } = require('../model/resModel')



const handleBlogRouter = (req, res) => {
  const method = req.method
  const id = req.query.id

  if(method === 'GET' && req.path === '/api/blog/list') {
    const author = req.query.author || ''
    const keyword = req.query.keyword || ''
    const listData = getList(author, keyword)

    return new SuccessModel(listData)
  }

  if(method === 'GET' && req.path === '/api/blog/detail') {
    const data = getDetail(id)
    return new SuccessModel(data)
  }

  if(method === 'POST' && req.path === '/api/blog/new') {
    const blogData = req.body 
    const data = newBlog(blogData)
    return new SuccessModel(data)
  }

  if(method === 'POST' && req.path === '/api/blog/update') {
    const result = updateBlog(id, req.body)
    if(result) {
      return new SuccessModel()
    } else {
      return new ErrorModel('update blog fail')
    }
  }

  if(method === 'POST' && req.path === '/api/blog/del') {
    return {
      msg: 'this is a delete a blog api.'
    }
  }
}

module.exports = handleBlogRouter