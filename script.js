const msgEl = document.getElementById('msg');

// Generate a random number
function generateRandomNumber() {
    return Math.floor(Math.random() * 100 + 1);
}

const randomNum = generateRandomNumber();
//console.log(randomNum);

window.SpeechRecognition = window.SpeedRecognition || window.webkitSpeechRecognition

let recognition = new window.SpeechRecognition();

// Start recognition and game
recognition.start();

// Capture user speech
function onSpeak(event) {
    const msg = event.results[0][0].transcript;

    console.log(msg);
}

// Listen to and handle the speech event
recogniton.addEventListener('result', onSpeak);