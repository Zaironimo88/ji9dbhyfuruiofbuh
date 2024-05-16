x = 0;
y = 0;

draw_manz="99552-MANZANA-ROJA.jpg";


var SpeechRecognition = window.webkitSpeechRecognition;
var recognition = new SpeechRecognition();

function start(){
document.getElementById("status").innerHTML="El sistema te esta escuchando, por favor habla";
recognition.start()
}

recognition.onresult = function(event){
console.log(event) 
var content = event.results[0][0].transcript;
document.getElementById("status").innerHTML="Se reconocio :"+content;
if(content =="99552-MANZANA-ROJA.jpg")
{
x = Math.floor(Math.random() * 900);
y = Math.floor(Math.random() * 600);
document.getElementById("status").innerHTML="Se a empezado a dibujar un manzana";
draw_manz="set";
}

}

function setup(){
    canvas = createCanvas(900, 600);
}

function draw(){
if(draw_manz == "set")
{
draw_manz(x, y, radium);
document.getElementById("status").innerHTML="Se dibujo un manzana";
draw_manz="";
}

}




