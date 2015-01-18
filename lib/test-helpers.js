
/*jslint node: true */

'use stricts';

var chai = require('chai'),
    expect = chai.expect,
    should = chai.should();

module.exports = {
  /**
   * checks if object passed in is an Array
   * @param  {Array}  arr collection of data
   * @return {Boolean}     assertion
   */
  isArray: function(arr) {
    return expect(arr).to.be.an('array');
  },
  /**
   * checks if object passed in is an Object Literal
   * @param  {Object}  obj object of properties and values
   * @return {Boolean}     assertion
   */
  isObject: function(obj) {
    return expect(obj).to.be.an('object');
  },
  
  shouldContain: function(arr, arrKey, dataType, done) {

    arr.forEach(function (value){
      value.should.be.a('string');
      arrKey.should.contain(value.toLowerCase());
    });

    return done();
  }
};