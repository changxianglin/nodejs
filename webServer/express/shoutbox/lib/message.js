const express = require('express')
var res = express.response

res.message = function (msg, type) {
    type = type || 'info'
    var sess = this.req.session
    sess.messages = sess.messages || []
    sess.messages.push({type: type, string: msg})
}

res.error = function (mes) {
    return this.message(msg, 'error')
}

module.exports = function (req, res, next) {
    res.locals.messages = req.session.message || []
    res.locals.removeMessages = function () {
        req.session.messages = []
    }
    next()
}