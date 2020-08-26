var myVideo = document.getElementById ("myVideo");
var myVideo = document.getElementById ("myVideo");
var botao = document.getElementById ("botao");

// monitoring if the user changed the position of the video
myVideo.onseeked = function() {
    console.log("The video seek has changed to " + myVideo.currentTime);
};

myVideo.ontimeupdate = function () {
   var currentTime = Math.floor (myVideo.currentTime);
      
 if(myVideo.paused && !myVideo.ended ){
  console.log("The video was paused in " + myVideo.currentTime);
 }
 // here enable the button
  if(myVideo.ended){
   botao.disabled = false;
 }
 
}



