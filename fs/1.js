const fs = require('fs');

fs.unlink('./test.md', (err) => {
    if (err) {
        throw err;
    }
    console.log('成功删除 /tmp/hello');
});