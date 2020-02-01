const mocha = require('mocha'); //it doesnt really needed it works without it
const assert = require('assert');
const MarioChar = require('../models/mariochar');
// const WitcherChar = require('../models/witcherchar');
// const TestChar = require('../models/testchar');
// const SukiChar = require('../models/sukichar');
// const Hvuj = require('../models/hvuj');

//describe tests
describe('Saving records:) to your db! enjoy!', function () {

    //create tests ( it block )
    it('saves records to the database', function (done) {
        //created the instance of the mariochar model
        var char = new MarioChar({
            name: 'Mario',

        });
        
        //save to the db itself
        char.save().then(() => {
            assert(char.isNew === false);
            done();
        });

    });

    // //next test
    // it('saves witcher records to db', (done) => {

    //     var char = new WitcherChar({
    //         name: 'geralt'
    //     });

    //     char.save().then(() => {
    //         assert(char.isNew === false);
    //         done();
    //     });
    // });

    // //another test
    // it('saves test data to db', (done) => {

    //     var char = new TestChar({
    //         name: 'testter',
    //         last_name: 'what ever'
    //     });

    //     char.save().then(() => {
    //         assert(char.isNew === false);
    //         done();
    //     });
    // });

    // //suki test
    // it('save suki data to db', (done) => {
    //     var char = new SukiChar({
    //         name: 'suki',
    //         last_name: 'sukasukasuka',
    //     });

    //     char.save().then(() => {
    //         assert(char.isNew === false);
    //         done();
    //     });
    // });

    // //hvuj test
    // it('save hvuj data to db', (done) => {
    //     var char = new Hvuj({
    //         name: 'Hvuj',
    //         type: 'warrior'
    //     });

    //     char.save().then(() => {
    //         assert(char.isNew === false);
    //         done();
    //     })
    // });

});