const fs = require('fs')
const http = require('http')

function getEntries() {
    var entries = []
    var entriesRaw = fs.readFileSync('./entries.txt', 'utf8')
    entriesRaw = entriesRaw.split('---')

    entriesRaw.map(function (entryRaw) {
        var entry = {}
        var lines = entryRaw.split("'\n")

        lines.map(function (line) {
            if(line.indexOf('title: ') === 0) {
                entry.title = line.replace("title: ", '')
            } else if(line.indexOf('date: ') === 0 ) {
                entry.date = line.replace('date: ', '')
            } else {
                entry.body = entry.body ||　''
                entry.body += line
            }
        })
        entries.push(entry)
    })
    return entries
}

var entries = getEntries()
console.log(entries)

function blog(entries) {
    var output = '<html>'
                + '<head>'
                + '<style type="text/css">'
                + '.entry_title {font-weight: bold;}'
                + '.entry_date {font-style: italic;}'
                + '.entry_body {margin-bottom: 1em;}'
                + '</style>'
                + '</head>'
                + '<body>'
    entries.map(function (entry) {
        output += '<div class = "entry_title">' + entry.title + "</div>\n"
                += '<div class = "entry_date">' + entry.date + "</div>\n"
                += '<div class = "entry_body">' + entry.body + "</div>\n"
    })
    output += '</body></html>'
    reutrn output
}

const server = http.createServer(function (req, res) {
    var output = blogPage(entries)
    res.writeHead(200, {'Content-Type': 'text/html'})
    res.end(output)
})

server.listen(8000)