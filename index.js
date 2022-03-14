var n=document.querySelectorAll(".drum").length
for(var i =0;i<n;i++){
document.querySelectorAll(".drum")[i].addEventListener("click",function (){
   if(this.innerHTML=="w"){
    var audio=new Audio("sounds/tom-1.mp3");
    audio.play();}

if(this.innerHTML=="a"){
    var audio=new Audio("sounds/tom-2.mp3");
    audio.play();}


if(this.innerHTML=="s"){
    var audio=new Audio("sounds/tom-3.mp3");
    audio.play();}

    if(this.innerHTML=="d"){
    var audio=new Audio("sounds/tom-4.mp3");
    audio.play();}

    if(this.innerHTML=="j"){
    var audio=new Audio("sounds/crash.mp3");
    audio.play();}

if(this.innerHTML=="k"){
    var audio=new Audio("sounds/kick-bass.mp3");
    audio.play();}

if(this.innerHTML=="l"){
    var audio=new Audio("sounds/snare.mp3");
    audio.play();}


})

}