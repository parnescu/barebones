"use strict";

var MainClass = require('../main/javascript/Main.js');
var _item;

describe("Main test ", function(){
	describe("Bogus test", function(){
		it("make sure it works", function(){
			expect(true).toEqual(true)
		})
	})

	describe("Main class tester", function(){
		beforeEach(function(){ _item = new MainClass(); });

		it("should be available", function(){
			expect(_item).not.toBe(null)
		})
		it("should have a destroy() method", function(){
			expect(_item.destroy).toBeDefined();
		})
	})
})