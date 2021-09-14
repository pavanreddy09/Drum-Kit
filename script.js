
const btn = document.querySelectorAll("button");

// songs
const tom1 = new Audio("sounds/tom-1.mp3");
const tom2 = new Audio("sounds/tom-2.mp3");
const tom3 = new Audio('sounds/tom-3.mp3');
const tom4 = new Audio('sounds/tom-4.mp3');
const snare = new Audio('sounds/snare.mp3');
const crash = new Audio('sounds/crash.mp3');
const kick = new Audio('sounds/kick-bass.mp3');


btn.forEach(btn => {
    btn.addEventListener("click", () => {
        if (btn.classList.contains("btn1")) {

            tom1.play();

        } else if (btn.classList.contains("btn2")) {

            tom2.play();

        } else if (btn.classList.contains("btn3")) {

            tom3.play();

        } else if (btn.classList.contains("btn4")) {

            tom4.play();

        } else if (btn.classList.contains("btn5")) {

            snare.play();

        } else if (btn.classList.contains("btn6")) {

            crash.play();

        } else if (btn.classList.contains("btn7")) {

            kick.play();

        }
    });
});