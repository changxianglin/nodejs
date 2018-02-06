var express = require('express');
var router = express.Router();
var User = require('../lib/user')

router.post('/login', function (req, res, next) {
    var data = req.body.user
    User.authenticate(data.name, data.pass, function (err, user) {
        if(err) return next(err)
        if(user) {
            req.session.uid = user.id
            res.redirect('/')
        } else {
            res.error("Sorry! invalid credentials.")
            res.redirect("back")
        }
    })
})

router.get('/logout', function (req, res) {
    req.session.destory(function (err) {
        if(err) throw err
        res.redirect('/')
    })
})

/* GET home page. */
router.get('/login', function(req, res, next) {
    res.render('login', { title: 'Login' });
});

module.exports = router;