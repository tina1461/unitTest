
const assert = require('chai').assert;
const should = require('chai').should;
const expect = require('chai').expect;

const getTotal = require('../src/index.js');

describe('金額限制', function(){
    it('帶入正常數字', function () {

        var total = getTotal(123,' ');
        expect(total).to.be.a('number');
        
    });

    it('帶入一個空值', function () {
        // assert.equal((22-1), '21');
        // assert.strictEqual(127 - 7, 120);
        
    });
});
