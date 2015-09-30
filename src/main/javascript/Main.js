(function(){
	"use strict"

	var fn = function(){

		this.init_();
		
		return {
			destroy: this.dispose_.bind(this)
		}
	}
	fn.prototype.init_ = function(){

	}
	fn.prototype.dispose_ = function(){

	}
	
	module.exports = fn;
})()