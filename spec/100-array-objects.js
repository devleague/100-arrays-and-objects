
/*global require, describe, it */
/*jslint node: true */

'use strict';

var chai = require('chai');
var should = chai.should();
var expect = chai.expect;
var mainFile = require('../main.js');
var keys = require('lib/keys');
var _ = require('lib/test-helpers');


describe('Create Arrays', function () {
  describe('Hawaiian Islands Array', function () {
    
    var hawaiianIslandsArr = mainFile.hawaiianIslands;
    
    it("should be an array", function (){
      _.isArray(hawaiianIslandsArr);
    });

    it('should have a length of eight', function () {
      hawaiianIslandsArr.should.have.length(8);
    });

    it('should only contain strings of each major island', function () {
      var islandsKey = keys.islands;
      hawaiianIslandsArr.forEach(function (current){
        current.should.be.a('string');
        islandsKey.should.contain(current.toLowerCase());
      });
    });
  });
}); // end desc('Create Arrays')