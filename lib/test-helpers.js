/*global require, describe, it, empty */
/*jslint node: true, expr: true */

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
  isDataType: function(obj, type) {
    return expect(obj).to.be.a(type);
  },
  /**
   * checks if object passed in is an Object Literal
   * @param  {Object}  obj object of properties and values
   * @return {Boolean}     assertion
   */
  isObject: function(obj) {
    return expect(obj).to.be.an('object');
  },
  /**
   * [shouldContain description]
   * @param  {[type]}   arr      [description]
   * @param  {[type]}   arrKey   [description]
   * @param  {[type]}   dataType [description]
   * @param  {Function} done     [description]
   * @return {[type]}            [description]
   */
  shouldContain: function(arr, arrKeys, dataType, done) {
    
    expect(arr.map(function(value) {
      return value.toLowerCase();
    })).to.eql(arrKeys);

    return done();
  }
};