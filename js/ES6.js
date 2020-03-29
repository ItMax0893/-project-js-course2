'use strict'

class Options{
    constructor(height , width, bg, fontSize, textAling){
        this.height = height,
        this.width = width,
        this.bg = bg,
        this.fontSize = fontSize,
        this.textAling = textAling 
    }
    newDiv() {
        let div = document.createElement('div'); 
        div.textContent = 'Hello!';
        
        div.style.cssText = `width: ${this.width}px; 
                    height: ${this.height}px; 
                    background: ${this.bg}; 
                    font-size: ${this.fontSize}px; 
                    text-align: ${this.textAling}`;
        div.className = 'new';
        document.body.append(div);
    }
}
let arrRed = [100, 100, 'red', 20, 'center']
const divRed = new Options(...arrRed);
divRed.newDiv();


let newElement = document.querySelector('.new');

newElement.addEventListener('click', function(){
    console.log('вы нашли этот элемент');
})