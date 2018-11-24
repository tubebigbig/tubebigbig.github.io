var myImage = document.querySelector('img');

myImage.onclick = function() {
    var mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/mouse.jpeg'){
        myImage.setAttribute('src','images/p6CSn6GZj6OX.jpg');
    }else {
         myImage.setAttribute('src','images/mouse.jpeg');
    }
       
    
    
}

