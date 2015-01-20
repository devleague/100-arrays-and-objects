
/*global require, describe, it */
/*jslint node: true, expr: true */

'use strict';

var chai = require('chai');
var should = chai.should();
var expect = chai.expect;
var mainFile = require('../main.js');
var answers = mainFile.answers;
var keys = require('lib/keys');
var _ = require('lib/test-helpers');


describe('Accessing Data inside of the answers object', function() {
 describe('Hawaiian Islands', function () {
  it('each major island should exist as a property', function () {
    keys.islands.forEach(function(curr, val) {
      expect(answers).to.have.property(curr);
    });
  });
 });

}); // end desc('Create Arrays')