var Startbtn = document.getElementById('a');
Startbtn.onclick = () => {
    location.href = "index.html";
}
var Instructionbtn = document.getElementById('b');
Instructionbtn.onclick = () => {
    location.href = "instruction.html";
}
document.addEventListener("DOMContentLoaded", function() {
    const audio = document.getElementById("background-audio");
    audio.play();
});



