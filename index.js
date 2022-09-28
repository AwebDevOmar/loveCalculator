var yourName = document.querySelector(".yourName");
var crushName = document.querySelector(".crushName");
var btn = document.querySelector(".btn");
var gif = document.querySelector(".gif");
var gifContainer =document.querySelector(".gifContainer");
var result = document.querySelector(".result");
var resultContainer = document.querySelector(".resultContainer");

var match = Math.floor(Math.random()*100 + 1);

btn.addEventListener("click", function(){
    yourName = yourName.value ;
    crushName = crushName.value ;

    var a = yourName.length ;
    var b = crushName.length ;
     
 if (a>2 && b>2){

    if (match<=30){
        gifContainer.classList.remove("visibility");
        gif.src=("images/10up.gif");
        resultContainer.classList.remove("visibility");
        result.innerHTML="Your Match is "+match+"%" ;
        
    }
    else if(match>30 && match<=50){

        gifContainer.classList.remove("visibility");
        gif.src=("images/30up.gif");
        resultContainer.classList.remove("visibility");
        result.innerHTML="Your Match is "+match+"%" ;

    }
    else if(match>50 && match<=80){
        gifContainer.classList.remove("visibility");
        gif.src=("images/50up.gif");
        resultContainer.classList.remove("visibility");
        result.innerHTML="Your Match is "+match+"%" ;

    }
    else if(match>80 && match<=90){
        gifContainer.classList.remove("visibility");
        gif.src=("images/80up.gif");
        resultContainer.classList.remove("visibility");
        result.innerHTML="Your Match is "+match+"%" ;

    }
    else {
        gifContainer.classList.remove("visibility");
        gif.src=("images/90up.gif");
        resultContainer.classList.remove("visibility");
        result.innerHTML="Your Match is "+match+"%" ;

    }

   
}
else {
    resultContainer.classList.remove("visibility");
        result.innerHTML="Please Enter Correct Name" ;

}
}
);



