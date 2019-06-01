const body = document.querySelector('body').addEventListener('onLoad',colorSquares(),selectColor(),guess());
// generator of numbers from 0 to 255;
function randomNumb(){
let random = Math.random() * +255 - +0 + +0;
 return parseInt(random);
}
function rgbColor(){
    let color;
    let red = randomNumb();
    let green = randomNumb();
    let blue = randomNumb();
    color = "rgb("+red+", "+green+", "+blue+")";
    // it doesn't work this way 
    //color = "rgb(${red}, ${green}, ${blue})";
    return color;
}
function colorSquares(){
    const square =Array.from(document.querySelectorAll('.square'));
    square.forEach(function(item){
        item.style.background = rgbColor();
    });
}
function selectColor(){
    let title = document.querySelector('h1');
    const squares =Array.from(document.querySelectorAll('.square'));
    let max = squares.length -1;
    let randomN = parseInt(Math.random() * +max - +0 + +0);
    title.innerText = squares[randomN].style.backgroundColor;
    title.style.textTransform = 'toUpperCase';
}
const hard = document.querySelector('.hard');
hard.addEventListener('click',function(){
let hardsquare =Array.from(document.querySelectorAll('.sf'));
    hardsquare.forEach((item)=>item.classList.remove("disappear"));
    colorSquares();
    selectColor();
    guess();
});

const easy = document.querySelector('.easy');
easy.addEventListener('click',function(){
let easySquare =Array.from(document.querySelectorAll('.sf'));
    easySquare.forEach((item)=>item.classList.add("disappear"));
    colorSquares();
    selectColor()
    guess();
});

const newGame = document.querySelector('.newGame');
newGame.addEventListener('click',function(){
        colorSquares();
        selectColor();
        guess();
    });

function guess(){
let sqr =Array.from(document.querySelectorAll('.square'));
sqr.forEach((function(item){
    let title =document.querySelector('h1').textContent;
	item.addEventListener('click',function(){
	if(this.style.backgroundColor == title){
        console.log("correcto");
    }else{
        console.log("incorrecto");
    };
});
})); 
}