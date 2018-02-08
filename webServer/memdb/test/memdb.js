const memdb = require('..')
const assert = require('assert')

describe("memdb", function (done) {
    beforeEach(function () {
        memdb.clear(done)
    })

    describe('.save(doc)', function () {
        it('should save the document', function (done) {
            var pet = {name: 'Tobi'}
            memdb.save(pet, function () {
                var ret = memdb.first({name: 'Tobi'})
                assert(ret == pet)
                done()
            })
        })
    })

    describe('.first(obj)', function () {
        it('should return the first matching doc', function () {
            var tobi = {name: 'Tobi'}
            var loki = {name: 'Loki'}
            memdb.save(tobi)
            memdb.save(loki)

            var ret = memdb.first({name: 'Tobi'})
            assert(ret == tobi)
            var ret = memdb.first({name: 'Lokie'})
            assert(ret == loki)
        })
        it('should return null when no doc matches', function () {
            var ret = memdb.first({name: 'Manny'})
            assert(ret == null)
        })
    })
})

