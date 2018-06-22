const fs = require('fs')

fs.open('myfile', 'wx', (err, fd) => {
    if (err) {
        if (err.code === 'EEXIST') {
            console.error('文件已存在');
            return;
        }

        throw err;
    }

    writeMyData(fd);
});