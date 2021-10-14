var SpeechRecognition= window.webkitSpeechRecognition;
//webkitSpeechRecognition is a Web Speech API 
// it recognizes what we speak and converts it to text 
// var SpeechRecognition holds  this API
var recognition=new SpeechRecognition();

function start(){
    document.getElementById("textbox").innerHTML= "";
    recognition.start();
}
recognition.onresult= function(event){

    console.log(event);

    var content = event.results[0][0].transcript;

    document.getElementById("textbox").innerHTML=content;

    console.log(content);;
    if (content=="take my selfie");
    {
        console.log("taking_selfie");
        speak();
    }
    
}
function speak(){
var synth= window.speechSynthesis;
//speechSynthesis is the API to convert txt to speech. 
//it is a controller interface for speech services. 
//it holds info about the synthesis voices available on the device, start and pause speech
//synth is a var that holds this API
// speak_data=document.getElementById("textbox").value;
speak_data="taking your selfie in 5 seconds";
// speak_data hold the text from the website
var utterThis= new SpeechSynthesisUtterance(speak_data);
//SpeechSynthesisUtterance is an interface of Web Speech API. 
//It represents a speech request - to convert txt to speech 
//It contains the content the speech service should read 
//utterThis is going to hold the converted speech from the text.
synth.speak(utterThis);
//speak() is a predefined method of speechSynthesis 
//it adds an utterance to utterance queue. 
//next utterance will be spoken when previous utterance in the queue has been spoken.
Webcam.attach(camera)
//pass the camera variable (which has the HTML div) inside Webcam.attach()
//it is put inside speak() because we want it to get active the moment the system speech is over.
setTimeout(function()
{
    take_selfie();
    save();
},5000
);
}

Webcam.set({
    width: 320,
    height: 240,
    image_format: 'jpeg',
    jpeg_quality: 90
 });
 camera=document.getElementById("camera");
//camera var has HTML div where we want to show the live cam view

// function take_selfie(){
//     Webcam.snap(function(data_uri){
//         console.log("take_selfie")
// document.getElementById("result").innerHTML='<img id="selfie_image" src="'+data_uri+'"/>';

//     });
// }
function take_selfie() 
{ Webcam.snap(function(data_uri) 
    { document.getElementById("result").innerHTML = '<img id="selfie_image" src="'+data_uri+'"/>'; }); }


// function save(){
//     link=document.getElementById("link");
//     image=document.getElementById("selfie_image").src;
//     link.href=image;
//     link.click();

// }
function save() { link = document.getElementById("link"); //anchor tag 
image = document.getElementById("selfie_image").src ; //image source 
link.href = image; 
link.click(); }