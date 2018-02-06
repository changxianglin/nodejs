var express = require('express');
var router = express.Router();
var Photo = require('../models/Photo')
var path = require('path')
var fs = require('fs')
var join = path.join

var photos = []
photos.push({
    name: 'Node.js Logo',
    path: 'https://img1.doubanio.com/view/photo/l/public/p2042680287.webp'
})
photos.push({
    name: 'Ryan Speaking',
    path: 'https://img3.doubanio.com/view/photo/l/public/p2512346216.webp'
})

/* GET users listing. */
router.get('/', function(req, res, next) {
    console.log('___in')
    res.render('photos', {
        title: 'Photos',
        photos: photos
    });
})

router.get('/upload', function (req, res, next) {
    console.log('get upload')
    res.render('upload', {title: 'Upload'})
})

router.post('/upload',  function(dir) {
    return function (req, res, next) {
        var img = req.files.photo.image
        var name = req.body.photo.name || img.name
        var path = join(dir, img.name)
        fs.rename(img.path, path, function(err) {
            if(err) return next(err)
            Photo.create({
                name: name,
                path: img.name
            }, function(err) {
                if(err) return next(err)
                res.redirect('/')
            })
        })
    }
})

module.exports = router;