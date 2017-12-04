// start from the lowest comment block

// generates a random number between a min and a max, it does not care what is lower or higher and
// convert the result into hexadecimal
function random(min, max){
    var x = Math.floor(Math.random()*(max-min+1)+min).toString(16);
    while (x.length !== 2){
        if(x.length < 2){
            x = 0 + x;
        }else if(x.length > 2){
            x = x.substr(1);
        }
    }
    return x;
}

// takes the random number between two values and puts a hash sighn in front
function randomcolourhex(red1, red2, green1, green2, blue1, blue2){
    var red   = random(red1,   red2);
    var green = random(green1, green2);
    var blue  = random(blue1,  blue2);
    return "#" + red + green + blue;
}

// it looks for the given class and passes on the other varibles.
function setColors(red1, red2, green1, green2, blue1, blue2, clas){
    var x = document.getElementsByClassName(clas);
    for (var i=0;i<x.length;i+=1) {
        x[i].style.backgroundColor = randomcolourhex(red1, red2, green1, green2, blue1, blue2);
    }
}

// the script works from bottom to top
// 
// all you need to do is set a class and call the function
// here's a example:

setColors(
	0,          // min red
	255,        // max red
	0,          // min green
	255,        // max green
	0,          // min blue
	255,        // max blue
	'a_class'); // what class