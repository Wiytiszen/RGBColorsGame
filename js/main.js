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
    color = `rgb(${red}, ${green}, ${blue})`;
    
    return color;
}

function colorSquares(){
    const square =Array.from(document.querySelectorAll('.square'));
    square.forEach(function(item){
        item.style.background = rgbColor();
    });
}
function selectColor(numb='undefined'){
    let title = document.querySelector('h1');
    const squares =Array.from(document.querySelectorAll('.square'));
    let max;
    if(numb ==='undefined'){
        max = squares.length -1;
    }else{
        max = numb;
    }
        let randomN = parseInt(Math.random() * +max - +0 + +0);
        title.innerText = squares[randomN].style.backgroundColor;
        title.style.textTransform = 'toUpperCase';
}
const hard = document.querySelector('.hard');
hard.addEventListener('click',function(){
let hardSquare =Array.from(document.querySelectorAll('.sr'));
    reset();
    guess();
});

const easy = document.querySelector('.easy');
easy.addEventListener('click',easyGame);
function easyGame(){
    let easySquares = Array.from(document.querySelectorAll('.fr'));
    easySquares.forEach((item)=>item.classList.remove("invisible"));
    let hardSquare =Array.from(document.querySelectorAll('.sr'));
    hardSquare.forEach((item)=>item.classList.add("disappear"));
        removeMsj();
        paintBanner();
        colorSquares();
        selectColor(3)
        guess();
}

function paintBanner(){
    const banner = document.querySelector('.banner');
    banner.style.backgroundColor = "blue";
}

function removeMsj(){
    const msj = document.querySelector('.msj');
    msj.style.visibility="hidden";
}

const newGame = document.querySelector('.newGame');
    newGame.addEventListener('click',reset);

function reset(){
    let Square =Array.from(document.querySelectorAll('.square'));
    Square.forEach((item)=>item.classList.remove("disappear","invisible"));
        removeMsj();
        colorSquares();
        paintBanner();
        selectColor();
        guess();
    };

function won(color){
    const banner = document.querySelector('.banner');
    const msj = document.querySelector('.msj');
    const square =Array.from(document.querySelectorAll('.square'));
    square.forEach(function(item){
        item.style.background = color;
        item.classList.remove("invisible");
        banner.style.backgroundColor = color;
        msj.style.visibility = "visible";
        msj.innerText = "you won!";
    });
}
    

function guess(){
let sqr =Array.from(document.querySelectorAll('.square'));
sqr.forEach((function(item){
    let title =document.querySelector('h1').textContent;
	item.addEventListener('click',function(){
	    if(this.style.backgroundColor == title){
            won(title);
        }else{
            const msj = document.querySelector('.msj');
            item.classList.add("invisible");
            msj.style.visibility = "visible";
            msj.innerText = "Try it again...";
        };
});
})); 
}