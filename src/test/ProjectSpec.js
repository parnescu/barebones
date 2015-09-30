"use strict";

var _item;

describe("Main test ", function(){
	describe("Bogus test", function(){
		it("make sure everything it works", function(){
			expect(true).toEqual(true)
			expect(1+1).toEqual(2)
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