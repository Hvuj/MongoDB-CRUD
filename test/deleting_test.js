const mocha = require('mocha'); //it doesnt really needed it works without it
const assert = require('assert');
const MarioChar = require('../models/mariochar');

//describe tests
describe('Deleting records', function () {

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
    });

    //create tests ( it block )
    it('deletes one record from the database', function (done) {
        MarioChar.findOneAndRemove({
            name: 'Mario'
        }).then(() => {
            MarioChar.findOne({
                name: 'Mario'
            }).then((result) => {
                assert(result === null);
                done();
            });
        });
    });
});