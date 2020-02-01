const mongoose = require('mongoose');

//es6 promises
mongoose.Promise = global.Promise;

//connect to the db before test run--before is a hook theres also after
before((done) => {

    // connect to mongodb
    mongoose.connect('mongodb://localhost/testroom',  { useNewUrlParser: true, useFindAndModify: false, useUnifiedTopology: true }); //test room is mondo database its auto created and you can call it whatever u want

    mongoose.connection.once('open', () => {
        console.log('connection has been established yey');
        done();
    }).on('error', function (error) {
        console.log('coonection error. failed :( !', error);
    });
});

//drop the char collection before the test//testing purposes only!!!
beforeEach((done) => {
    //drop the collection
    mongoose.connection.db.dropDatabase(() => {})
    done();
});