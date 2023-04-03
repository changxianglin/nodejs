const { getList, getDetail } = require('../controller/blog')
const { SuccessModel, ErrorModel } = require('../model/resModel')



const handleBlogRouter = (req, res) => {
  const method = req.method

  if(method === 'GET' && req.path === '/api/blog/list') {
    const author = req.query.author || ''
    const keyword = req.query.keyword || ''
    const listData = getList(author, keyword)

    return new SuccessModel(listData)
  }

  if(method === 'GET' && req.path === '/api/blog/detail') {
    const id = req.query.id
    const data = getDetail(id)
    return new SuccessModel(data)
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