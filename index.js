const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
    res.send('express pages')
})

module.exports = router