const getList = (author, keyword) => {
  return [
    {
      id: 1,
      title: '标题1',
      content: '内容1',
      createTime: 123463241234,
      author: 'zhangsan',
    },
    {
      id: 2,
      title: '标题2',
      content: '内容',
      createTime: 1592342141234234,
      author: 'lisi',
    }
  ]
} 

module.exports = {
  getList,
}