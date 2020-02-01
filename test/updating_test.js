const mocha = require('mocha'); //it doesnt really needed it works without it
const assert = require('assert');
const MarioChar = require('../models/mariochar');

//describe tests
describe('Updating records', function () {

    var char;

    beforeEach((done) => {
        //created the instance of the mariochar model
        char = new MarioChar({
            name: 'Mario',
            weight:50
        });

        //save in the db itself
        char.save().then(() => {
            done();
        });
    });

    //create tests ( it block )
    it('Updates records', (done) => {
        MarioChar.findOneAndUpdate({
            name:'Mario'
        }, {
            name:'lolster'
        }).then(() => {
            MarioChar.findOne({
                _id:char._id
            }).then((result) => {
                assert(result.name === 'lolster');
                done();
            });
        });
    });

    it('increments the weight by 1', (done) => {
        MarioChar.updateMany({}, {$inc:{weight:1}}).then(() => {
            MarioChar.findOne({name:'Mario'}).then((r) => {
                assert(r.weight === 51);
                done();
            });
        });
    });

});