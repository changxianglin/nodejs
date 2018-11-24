const mongoose = require('mongoose')

let db

module.exports = function Connection() {
    if(!db) {
     db = mongoose.connect('mongodb://crudexpress1:crudexpress1@ds041167.mlab.com:41167/crudexpress')   
    }

    return db
}