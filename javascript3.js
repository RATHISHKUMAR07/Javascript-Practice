/*
HTML DOM
Finding HTML element by id
While using it we have to place Js file after html code
make sure the JS script tag is loaded
after the DOM elements are declared and
you're using an existing identifier to get the element.

const element = document.getElementById("intro");
document.getElementById("demo").innerHTML =
" Hello" + element.innerHTML;

Finding HTML element by tagname
const element = document.getElementsByTagName("p");
document.getElementById("demo").innerHTML =
    'The text ' + element[1].innerHTML;

Finding HTML element by tagname ang id
const x = document.getElementById("main");
const y = x.getElementsByTagName("p");
document.getElementById("demo").innerHTML =
    'This is 2 p tag ' + y[1].innerHTML;

Finding HTML element by class name
const x = document.getElementsByClassName('class1');
document.getElementById('demo').innerHTML =
    "This is class 2 " + x[1].innerHTML;

To change the value of an HTML attribute, use this syntax:
document.getElementById(id).attribute = new value

To change img in html
document.getElementById("img").src = "gif.gif";


Js Form validation
function validateForm() {
    let x = document.forms["my"]["fname"].value;
    if (x == "") {
        alert("Name must filled");
    }
    else {
        return false;
    }
}


Dom Animate
function myMove() {
    let id = null;
    const element = document.getElementById("animate");
    let pos = 0;
    clearInterval(id);
    id = setInterval(frame, 5);
    function frame() {
        if (pos == 350) {
            clearInterval(id);
        }
        else {
            pos++;
            element.style.top = pos + "px";
            element.style.right = pos + "px";
        }
    }

}

Dom Events
function checkCookies() {
    var text = "";
    if (navigator.cookieEnabled == true) {
        text = "cookies enabled";
    }
    else {
        text = "cookies not";
    }
    document.getElementById("demo").innerHTML = text;
}
Change lower to upper
function toUpperCase() {
    const x = document.getElementById('fname');
    x.value = x.value.toUpperCase();
}

function mOver(obj) {
    obj.innerHTML = "Thank you";
}
function mOut(obj) {
    obj.innerHTML = "Mouse over me";
}

function mDown(obj) {
    obj.style.backgroundColor = "blue";
    obj.innerHTML = "Release Me"
}
function mUp(obj) {
    obj.style.backgroundColor = "green";
    obj.innerHTML = "Thank you";
}

Syntax
element.addEventListener(event, function, useCapture);

document.getElementById("btn").addEventListener("click", displayDate);

function displayDate() {
    document.getElementById('demo').innerHTML = Date();
}


var x = document.getElementById('btn');
x.addEventListener("mouseover", my1);
x.addEventListener("click", my2);
x.addEventListener("mouseout", my3);

function my1() {
    document.getElementById('demo').innerHTML = "Mouse over<br>";
}
function my2() {
    document.getElementById('demo').innerHTML += "Mouse clicked<br>";
}
function my3() {
    document.getElementById('demo').innerHTML = "Mouse out<br>";
}

Dom Navigate
document.getElementById("id2").innerHTML =
    document.getElementById('id1').firstChild.nodeValue;

DOM NODES
const para = document.createElement("p");
const node = document.createTextNode("This is new");
para.appendChild(node);
const element = document.getElementById("div1");
element.appendChild(para);

const para = document.createElement("p");
const node = document.createTextNode("This is new.");
para.appendChild(node);

const element = document.getElementById("div1");
const child = document.getElementById("p1");

Insert Before
element.insertBefore(para, child);

const remove = document.getElementById('p1');
remove.remove();

DOM Collections
const myNodelist = document.getElementsByTagName("p");
for (let i = 0; i < myNodelist.length; i++) {
  myNodelist[i].style.color = "blue";
}

DOM Node List
const myNodelist = document.querySelectorAll("p");
for (let i = 0; i < myNodelist.length; i++) {
  myNodelist[i].style.color = "red";
}

JS Browser BOM Screen
document.write("Width :" + screen.width);
document.write("Height :" +screen.height + "<br>");
document.write("AvailWidth :" +screen.availWidth + "<br>");
document.write("AvailHeight :" +screen.availHeight + "<br>");
document.write("ColorDepth :" +screen.colorDepth + "<br>");
document.write("pixelDepth :" +screen.pixelDepth + "<br>");

JS Location
document.write("Location :" + window.location.href + "<br>");
document.write("Hostname :" + window.location.hostname + "<br>");
document.write("Pathname :" + window.location.pathname + "<br>");
document.write("Protocol :" + window.location.protocol + "<br>");
document.write("Port :" + window.location.port + "<br>");

function newPage() {
    window.location.assign("https://www.w3schools.com/js/js_window_location.asp");
}
JS History
Back
function goBack() {
    window.history.back();
}
Forward
function goForward() {
    window.history.forward();
}

JS Navigator
document.write("Cookie:" + window.navigator.cookieEnabled + "<br>");
document.write("Appname :" + navigator.appName + "<br>");
document.write("AppCodename :" + window.navigator.appCodeName + "<br>");
document.write("Product :" +navigator.product + "<br>");
document.write("App Version :" + navigator.appVersion + "<br>");
document.write("Platform :" + navigator.platform + "<br>");
document.write("Language :" + navigator.language + "<br>");

JS Popup Alert
function alertPop() {
    var txt;
    if (confirm("Press a button")) {
        txt = "You pressed Ok";
    }
    else {
        txt = "You pressed Cancel";
    }
    document.getElementById('demo').innerHTML = txt;
}

function alertPrompt() {
    let txt;
    let person = prompt("Please enter your name:", "Harry Potter");
    if (person == null || person == "") {
        txt = "User cancelled the prompt";
    }
    else {
        txt = "Hello " + person + "! How are you today?";
    }
    document.write(txt);
}
alert("Hello\nHi");

JS WEB API - Application programming interface
JS GeoLocation

function geoLocation() {
    try {
        navigator.geolocation.getCurrentPosition(showPosition);
    }
    catch {
        document.write(err);
    }
}
function showPosition() {
    document.write("Latitude :" + position.coords.latitude)
    document.write("Longitude :"+ position.coords.longitude)

}

JS API Validation

function validation() {
    var obj = document.getElementById('p1');
    if (!obj.checkValidity()) {
        document.write(obj.validationMessage);
    }
    else {
        document.write("Input Ok");
    }
}

JS API History
function my() {
    window.history.go(+3);
}

JS WEB Worker
let w;

function startWorker() {
  if (typeof(w) == "undefined") {
    w = new Worker("javascript3.js");
  }
  w.onmessage = function(event) {
    document.getElementById("result").innerHTML = event.data;
  };
}

function stopWorker() {
  w.terminate();
  w = undefined;
}

JS Fetch API
let file = "";
fetch(file)
.then(x => x.text())
.then(y => document.write(y));
*/
//JS Geolocation API
