
let video = document.createElement('video');
video.id = 'videoElement';
video.autoplay = true;

  navigator.mediaDevices.getUserMedia({
    video: true
  })
  .then(stream => {
    window.localStream = stream;
    document.querySelector('video').srcObject = stream;

  })

  document.body.appendChild(video)

chrome.storage.sync.get(['shape'], function(result) {
  let value = result.shape;

  switch(value) {
  case "oval":
  document.querySelector('#videoElement').style.borderRadius = "50%"
  break;

  case "rectangle":
  document.querySelector('#videoElement').style.borderRadius = "0"
  break;

  case "square":
  document.querySelector('#videoElement').classList.add("square");
  break;

 default:
   document.querySelector('#videoElement').classList.add("circle");

 }
});

chrome.storage.sync.get(['position'], function(result) {
  let val = result.position;

  switch(val) {
  case "leftBottom":
    document.querySelector('#videoElement').style.margin = "300px 1000px ";
  break;

  case "rightBottom":
    document.querySelector('#videoElement').style.margin = "300px 0";
  break;

  case "rightTop":
    document.querySelector('#videoElement').style.margin = "0 0"
  break;

 default:
  document.querySelector('#videoElement').style.margin = "0  75% ";

 }
});


chrome.storage.sync.get(['mirrors'], function(result) {
if(result.mirrors === true){
  document.querySelector('#videoElement').style.transform = " scaleX(-1)";
}  

})