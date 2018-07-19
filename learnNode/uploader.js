const querystring = require('querystring')

function upload(request, response){
  let postData = ''

  request.addListener('data', (chunk) => {
    postData += chunk
  })

  request.addListener('end', () => {
    let data = querystring.parse(postData)
    console.log('postData: ' + postData)
    console.log(data)

    let s = `<p><a href = "/">back</a></p>
            <p>username: ${data.username}</p>
            <p>password: ${data.password}</p>
            <p>age: ${data.age}</p>
            `

    response.writeHead(200, {'content-type': 'text/html'})
    response.write(s)
    response.end()
  })
}

exports.upload = upload
