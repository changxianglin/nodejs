const ansi = require('ansi')
const cursor = ansi(process.stdout)
cursor
    .fg.green()
    .write('Hello')
    .fg.reset()
    .write('\n')