
/*global require, describe, it */
/*jslint node: true */

'use strict';

var chai = require('chai');
var should = chai.should();
var expect = chai.expect;
var mainFile = require('../main.js');
var _ = require('../lib/test-helpers.js');

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
      var islandsKey = ['hawaii', 'maui', 'oahu', 'kauai', 'molokai', 'lanai', 'niihau', 'kahoolawe'];
      hawaiianIslandsArr.forEach(function (current){
        current.should.be.a('string');
        islandsKey.should.contain(current.toLowerCase());
      });
    });
  });
}); // end desc('Create Arrays')