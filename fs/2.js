const fs = require('fs');

fs.open('./fswrite.txt', 'r', (err, fd) => {
    if (err) throw err;
    fs.close(fd, (err) => {
        if (err) throw err;
    });
});