//Functionality that allows entering elements into the calculator screen
var screen=document.querySelector('#screen');
var btn=document.querySelectorAll('.btn');

for(item of btn){
    item.addEventListener('click' ,(e)=> {
        btntext=e.target.innerText;
        screen.value+=btntext;
    });
}

//Function for trigonometric operations
function sin(){
    screen.value=Math.sin(screen.value);
}

function asin(){
    screen.value=Math.asin(screen.value);
}


function cos(){
    screen.value=Math.cos(screen.value);
}
function acos(){
    screen.value=Math.acos(screen.value);
}


function tan(){
    screen.value=Math.tan(screen.value);
}
function atan(){
    screen.value=Math.atan(screen.value);
}



//Function for the power of 2
function power(){
    screen.value=Math.pow(screen.value,2);
}
function power3(){
    screen.value=Math.pow(screen.value,3);
}

//Function for the square root
function squart(){
    screen.value=Math.sqrt(screen.value,2);
}

//Function for the logarithm
function log(){
    screen.value=Math.log10(screen.value);
}
function log2(){
    screen.value=Math.log(screen.value);
}


//Function for assigning pi and exponential value
function pi(){
    screen.value=3.14159265359;
}

function exp(){
    screen.value=Math.exp(screen.value);
}



//Function for calculating the factorial of a number
function fact(){
    var i, num, f;
    f=1
    num=screen.value;
    for(i=1; i<=num; i++){
        f=f*i;
    }
    i=i-1;
    screen.value=f;

}



//Function for deleting elements
function space(){
    screen.value=screen.value.substr(0,screen.value.length-1);
}

function spaceall(){
    screen.value='';
}
