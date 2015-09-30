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
	
	if (window.module){
		module.exports.MainClass = fn;
	}else{
		window.MainClass = fn;	
	}
})()