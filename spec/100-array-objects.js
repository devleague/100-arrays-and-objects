
/*global require, describe, it */
/*jslint node: true, expr: true */

'use strict';

var chai = require('chai');
var should = chai.should();
var expect = chai.expect;
var mainFile = require('../main.js');
var answers = mainFile.answers;
var keys = require('lib/keys');


describe('Accessing Data inside of the answers object', function() {
 describe('Hawaiian Island Property names', function () {
  it('should have each major island should exist as a property', function () {
    keys.islands.forEach(function(curr, val) {
      expect(answers).to.have.property(curr);
    });
  });
  it('should have each value should have the island name as a String', function () {
    keys.islands.forEach(function(curr, val) {
      expect(answers[curr]).to.be.a('string');
      expect(answers[curr].toLowerCase()).to.equal(curr);
    });
  });
 }); // desc('Hawaiian Island')
 describe('User Data', function () {

   
 }); // desc('User Data')

}); // end desc('Accessing Data...')