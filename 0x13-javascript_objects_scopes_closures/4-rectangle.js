#!/usr/bin/node

class Rectangle {
    constructor (w, h){
        if (w > 0 && h > 0){
            this.width = w;
            this.heigth = h;
        }
    }
    print(){
        for (let i =0; i < this.height; i++){
            console.log('x'.repeat(this.width));
        }
    }
    rotate() {
        [this.width, this.height] = [this.heigth, this.width];
    }
    double(){
        this.width = this.width * 2;
        this.height = this.height * 2;
    }
}
module.exports = Rectangle;
