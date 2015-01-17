
/*jslint node: true */

'use stricts';

var chai = require('chai'),
    expect = chai.expect,
    should = chai.should();

module.exports = {
  isArray: function(arr) {
    return expect(arr).to.be.an('array');
  }
};