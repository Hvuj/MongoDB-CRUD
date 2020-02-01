const mocha = require('mocha'); //it doesnt really needed it works without it
const assert = require('assert');
const MarioChar = require('../models/mariochar');

//describe tests
describe('Dinding records', function () {

    var char;

    beforeEach((done) => {
        //created the instance of the mariochar model
        char = new MarioChar({
            name: 'Mario',
        });

        //save in the db itself
        char.save().then(() => {
            done();
        });
    })

    //create tests ( it block )
    // it('finds one record in the database', function (done) {
    //     MarioChar.findOne({
    //         name: 'Mario',
    //     }).then((result) => {
    //         assert(result.name === 'Mario');
    //         done();
    //     });
    // });

    //create tests ( it block )
    it('finds one record by id in the database', function (done) {
        MarioChar.findOne({
            _id: char._id
        }).then((result) => {
            assert(result._id.toString() === char._id.toString());
            done();
        });
    });
});