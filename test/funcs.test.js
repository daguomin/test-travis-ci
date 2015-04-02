/**
 * Created by zengjie on 15-4-2.
 */

var funcs = require('../funcs');
var should = require('should');

describe('test/funcs.test.js',function(){
    it('should equals 55 when n === 10',function(){
        funcs.fibonacci(10).should.equal(55);
    });

    it('should equals 0 when n === 0',function(){
        funcs.fibonacci(0).should.equal(0);
    });

    it('should equals 1 when n === 1',function(){
        funcs.fibonacci(1).should.equal(1);
    });

    it('should equals 55 when n === 10',function(){
        funcs.fibonacci(10).should.equal(55);
    });

    it('should throw when n > 10',function(){
        (function(){
            funcs.fibonacci(11);
        }).should.throw('n should <= 10');
    });

    it('should throw when n < 0',function(){
        (function(){
            funcs.fibonacci(-1);
        }).should.throw('n should >= 0');
    });

    it('should throw when n is not Number',function(){
        (function(){
            funcs.fibonacci('sdfs');
        }).should.throw('n should be a Number');
    });
});