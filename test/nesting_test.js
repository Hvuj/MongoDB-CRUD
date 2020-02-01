const assert = require('assert');
const mongoose = require('mongoose');
const Author = require('../models/author');

//describe tests
describe('nesting records', () => {

    beforeEach((done) => {
        mongoose.connection.collections.authors.drop(() => {
            done();
        });
    });

    //create test
    it('create an author with sub documents', (done) => {

        var h = new Author({
            name: 'Hvuj',
            books: [{
                    title: 'hvujes chapter 1',
                    pages: 10
                },
                {
                    title: 'hvujes chapter 2',
                    pages: 20
                },
                {
                    title: 'hvujes chapter 3',
                    pages: 30
                },
            ],
        });

        h.save().then(() => {
            Author.findOne({
                name: 'Hvuj'
            }).then((r) => {
                assert(r.books.length === 3);
                done();
            }).catch((e) => {
                console.log('error', e);
            });
        });
    });

    ///////////////////////////////
    it('adds new book to the author', (done) => {
        var h = new Author({
            name: 'Hvuj',
            books: [{
                    title: 'hvujes chapter 1',
                    pages: 10
                },
                {
                    title: 'hvujes chapter 2',
                    pages: 20
                },
                {
                    title: 'hvujes chapter 3',
                    pages: 30
                },
            ],
        });

        h.save().then(() => {
            Author.findOne({
                name: 'Hvuj'
            }).then((r) => {
                //add books to books array
                r.books.push({
                    title: 'Hvujes 2nd book chapter 1',
                    pages: 10
                }, {
                    title: 'Hvujes 2nd book chapter 2',
                    pages: 20
                }, {
                    title: 'Hvujes 2nd book chapter 3',
                    pages: 30
                }, );
                r.save().then(() => {
                    Author.findOne({
                        name: 'Hvuj'
                    }).then((r) => {
                        assert(r.books.length === 6);
                        done();
                    }).catch((e) => {
                        console.log('error', e);
                    });
                });
            });
        });
    });

});