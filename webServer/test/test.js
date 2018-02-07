const assert = require('assert')
var Todo = require('./todo')
var todo = new Todo()
var testsComplted = 0

function deleteTest() {
    todo.add('Delete Me')
    assert.equal(todo.getCount(), 1, '1 item should exist')
    todo.deleteAll()
    assert.equal(todo.getCount(), 0, 'No items should exist')
    testsComplted++
}

function addTest() {
    todo.deleteAll()
    todo.add('Added')
    assert.notEqual(todo.getCount(), 0, '1 item should exist ')
    testsComplted++
}

function doAsyncTest(cb) {
    todo.doAsyns(function (value) {
        assert.ok(value, 'Callback should be passed true')
        testsComplted++
        cb()
    })
}

function throwsTest(cb) {
    assert.throws(todo.add, /requires/)
    testsComplted++
}

deleteTest()
addTest()
throwsTest()
doAsyncTest(function () {
    console.log('Completed ' + testsComplted + ' tests')
})