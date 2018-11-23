var myImage = document.querySelector('img');

myImage.onclick = function() {
    var mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/mouse.jpeg'){
        myImage.setAttribute('src','images/p6CSn6GZj6OX.jpg');
    }else {
         myImage.setAttribute('src','images/mouse.jpeg');
    }
       
    
    
}

var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');

function setUserName(){
    var myName = prompt('please enter your name');
    localStorage.setItem('name',myName);
    myHeading.innerHTML = 'this is my html,' + myName;
}

if(!localStorage.getItem('name')){
    setUserName();
} else {
    var storedName = localStorage.getItem('name');
    myHeading.innerHTML = 'this is my html,' + storedName;
}

myButton.onclick = function(){
    setUserName();
}