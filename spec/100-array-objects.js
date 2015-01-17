/*global require, describe, it */
/*jslint node: true */

'use strict';

var chai = require('chai');
var should = chai.should();
var expect = chai.expect;
var mainFile = require('../main.js');

describe('Create Arrays', function () {
  describe('Hawaiian Islands Array', function () {
    
    var hawaiianIslandsArray = mainFile.hawaiianIslands;
    
    it("should be an array", function (){
      expect(hawaiianIslandsArray).to.be.an('array');
    });

    it('should have a length of eight', function () {
      hawaiianIslandsArray.should.have.length(8);
    });
    it('should only contain strings of each major island', function () {
      var islandsKey = ['Hawaii', 'Maui', 'Oahu', 'Kauai', 'Molokai', 'Lanai', 'Niihau', 'Kahoolawe'];
      hawaiianIslandsArray.forEach(function (current){
        current.should.be.a('string');
        islandsKey.should.contain(current);
      });
    });
  });
}); // end desc('Create Arrays')