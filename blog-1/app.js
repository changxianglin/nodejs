const serverHandle = (req, res) => {
  // back 
  res.setHeader('Content-type', 'application/json')

  const resData = {
    name: 'jack-100',
    site: 'git'
  }

  res.end(JSON.stringify(resData))
}

module.exports = serverHandle