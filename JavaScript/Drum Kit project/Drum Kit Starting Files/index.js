var buttonList = document.querySelectorAll(".drum").length;

//event listiner for mouse click
function mouseclick(){
    var onclickz = this.innerHTML;
    MakeSound(onclickz);
    animateButton(onclickz);
    
}
for(a = 0; a < buttonList; a++){
    document.querySelectorAll(".drum")[a].addEventListener("click",mouseclick);
}

//event listner for key press
function KeyPress(event){
    MakeSound(event.key);  
    animateButton(event.key);
}
    document.addEventListener("keydown", KeyPress);

//animation button
function animateButton(thiskey){
    var buttonAnimation = document.querySelector("." + thiskey);
    buttonAnimation.classList.add("pressed");
    setTimeout(() => {
      buttonAnimation.classList.remove("pressed")  
    }, 100);
}   

//sound function
function MakeSound(key){
    switch (key) {
        case "w":
            var kick = new Audio("sounds/kick-bass.mp3");
            kick.play();
            break;
        case "a":
            var snare = new Audio("sounds/snare.mp3");
            snare.play();
            break;
        case "s":
            var crash = new Audio("sounds/crash.mp3");
            crash.play();
            break;
        case "d":
            var tom1 = new Audio("sounds/tom-1.mp3");
            tom1.play();
            break;
        case "j":
            var tom2 = new Audio("sounds/tom-2.mp3");
            tom2.play();
            break;
        case "k":
            var tom3 = new Audio("sounds/tom-3.mp3");
            tom3.play();
            break;
        case "l":
            var tom4 = new Audio("sounds/tom-4.mp3");
            tom4.play();
            break;
        default:
            console.log(key + " is not valid drum key 🥁")
            break;
    }
}