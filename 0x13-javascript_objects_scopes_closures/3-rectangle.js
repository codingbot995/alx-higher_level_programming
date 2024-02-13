#!/usr/bin/node
class Rectangle {
	constructor(w, h){
	if (w > 0 && h > 0){
		this.width = w;
		this.heigth h;
	}
	}
	print(){
		for (let i = 0; i < this.heigth; i++){
			console.log('X'.repeat(this.width));
		}
	}
}
module.exports = Rectangle;
