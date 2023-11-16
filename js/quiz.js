// Generate the numbers for the quiz

function randIN(min, max) {
    return Math.floor(Math.random()*(max-min+1)+min);
}

var m = randIN(300,600);
var n = randIN(100,m);
var k = randIN(1, 10);
console.log(m, n, k);

// Put the random numberinto the HTML
document.getElementById("s1").textContent = m.toString();
document.getElementById("s2").textContent = n.toString();
document.getElementById("s3").textContent = k.toString();

// How to generate correct answer
var t = n + k;
var s = n - k;

document.querySelector("[value='1']").nextSibling.nodeValue = m.toString()+ "-" + n.toString() + "+" + k.toString();
document.querySelector("[value='2']").nextSibling.nodeValue = m.toString()+ "-" + n.toString() + "+" + k.toString();
document.querySelector("[value='3']").nextSibling.nodeValue = m.toString()+ "-" + n.toString() + "+" + k.toString();
document.querySelector("[value='4']").nextSibling.nodeValue = m.toString()+ "-" + n.toString() + "+" + k.toString();

// Action --> click and change style
function changestyle(e){
    e.preventDefault(); // Prevent the default action

    // Get the style of the element
    var classname = this.getAttribute("class");

    // Chenge the style of this element
    if (classname == "answer"){
        this.setAttribute("class", "answer selected");
    }
    else{
        this.setAttribute("class", "answer")

    }
}

// Add the event listener to all the answers
for (let i = 0; i < 4; i++) {
    document.getElementsByClassName("answer")[i].addEventListener("click", changestyle, false);
    
}

