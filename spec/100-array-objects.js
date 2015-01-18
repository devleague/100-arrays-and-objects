
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

    it('should only contain strings representing each major island', function (done) {
      _.shouldContain(hawaiianIslandsArr, keys.islands, 'string', done);
    });

  }); //
  describe('Calendar Months', function () {

    var monthsArr = mainFile.calendarMonths;

    it('should be an array', function () {
      _.isArray(monthsArr);
    });

    it('should have a length of twelve', function () {
      monthsArr.should.have.length(12);
    });

    it('should only contain strings representing each month', function (done) {
      _.shouldContain(monthsArr, keys.months, 'string', done);
    });


    
  });

}); // end desc('Create Arrays')