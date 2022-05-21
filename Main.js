screen_width = 0;
screen_height = 0;
x = 0;
y = 0;

draw_apple = "";
var apple;
var SpeechRecognition = window.webkitSpeechRecognition;
var speak_data
var to_number;
var recognition = new SpeechRecognition();

function start()
{
  document.getElementById("status").innerHTML = "System is listening please speak";  
  recognition.start();
} 
 
recognition.onresult = function(event) {

 console.log(event); 

 content = event.results[0][0].transcript;

    document.getElementById("status").innerHTML = "The speech has been recognized: " + content; 
    to_number = Number(content);
    if(Number.isInteger(to_number))
    document.getElementById("status").innerHTML = "Started drawing apple ";
    draw_apple = "set";


}

function setup() {
    screen_width = window.innerWidth;
    screen_height = window.innerHeight;
    createCanvas()
    screen_width = "150";
    screen_height = "150";
    canvas.position(0, 150)
 
}

function draw() {
  if(draw_apple == "set")
  
  {
    document.getElementById("status").innerHTML = to_number + " Apples drawn";
    draw_apple = "";
  }
}

function speak(){
    var synth = window.speechSynthesis;

    var utterThis = new SpeechSynthesisUtterance(speak_data);

    synth.speak(utterThis);

    speak_data = "";
}

function preload() {
    loadImage() = "apple.png"
}

