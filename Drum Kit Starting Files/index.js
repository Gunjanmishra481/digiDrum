for (var i = 0; i < document.querySelectorAll(".drum").length; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click", function () {
        var buttonInnerHTML = this.innerHTML;
        makesound(buttonInnerHTML);
        buttonAnimation(buttonInnerHTML);

    });
    document.addEventListener("keydown", function (event) {
        makesound(event.key);
        buttonAnimation(event.Currentkey);
    });
    function makesound(key) {
                switch (key) {
            case "w":
                var tom1 = new Audio(src = "/Drum Kit Starting Files/sounds/tom-1.mp3");
                tom1.play();
                break;
            case "a":
                var tom2 = new Audio(src = "/Drum Kit Starting Files/sounds/tom-2.mp3");
                tom2.play();
                break;
            case "s":
                var tom3 = new Audio(src = "/Drum Kit Starting Files/sounds/tom-3.mp3");
                tom3.play();
                break;
            case "d":
                var tom4 = new Audio(src = "/Drum Kit Starting Files/sounds/tom-4.mp3");
                tom4.play();
                break;
            case "j":
                var snare = new Audio(src = "/Drum Kit Starting Files/sounds/snare.mp3");
                snare.play();
                break;
            case "k":
                var crash = new Audio(src = "/Drum Kit Starting Files/sounds/crash.mp3");
                crash.play();
                break;
            case "l":
                var kick = new Audio(src = "/Drum Kit Starting Files/sounds/kick.mp3");
                kick.play();
                break;
                
            

            default:
                break;    
                
    
         
        }
        
    }
        function buttonAnimation(Currentkey) {
        var activeButton = document.querySelector("." + Currentkey);
        activeButton.classList.add(".pressed");

    }
    setTimeout(function () {
        activeButton.classList.remove(".pressed");
    },100);
}
