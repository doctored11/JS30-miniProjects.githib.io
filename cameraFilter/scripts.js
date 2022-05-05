const video = document.querySelector('.player');
const canvas = document.querySelector('.photo');
const ctx = canvas.getContext('2d');
const strip = document.querySelector('.strip');
const snap = document.querySelector('.snap');
const btn = document.querySelectorAll('.btn');
// btn.forEach(btn => btn.addEventListener('click', jjj));


function getVideo() {
  navigator.mediaDevices.getUserMedia({ video: true, audio: false })
    .then(localMediaStream => {
      console.log(localMediaStream);
    
      
      video.srcObject = localMediaStream;
      video.play();
    })
    .catch(err => {
      console.error(`Camera is off😒`, err);
    });
}

function paintToCanvas() {
  const width = video.videoWidth;
  const height = video.videoHeight;
  canvas.width = width;
  canvas.height = height;
 
  return setInterval(() => {
    ctx.drawImage(video, 0, 0, width, height);
    
    let pixels = ctx.getImageData(0, 0, width, height);
    
    // pixels = redEffect(pixels);//!
     
    
      
      
    
     pixels = rgbSplit(pixels);//!
    

    
    // put them back
    ctx.putImageData(pixels, 0, 0);
  }, 60);
}

function takePhoto() {
  
  snap.currentTime = 0;
  snap.play();

  
  const data = canvas.toDataURL('image/jpeg');
  const link = document.createElement('a');
  link.href = data;
  link.setAttribute('download', 'handsome');
  link.innerHTML = `<img src="${data}" alt="Handsome Man" />`;
  strip.insertBefore(link, strip.firstChild);
}

function redEffect(pixels) {
  for (let i = 0; i < pixels.data.length; i+=4) {
    pixels.data[i + 0] = pixels.data[i + 0] + 200;
    pixels.data[i + 1] = pixels.data[i + 1] - 50; 
    pixels.data[i + 2] = pixels.data[i + 2] * 0.5; 
  }
  return pixels;
}

function rgbSplit(pixels) {
  for (let i = 0; i < pixels.data.length; i+=4) {
    pixels.data[i - 150] = pixels.data[i + 0]; 
    pixels.data[i + 500] = pixels.data[i + 1]; 
    pixels.data[i - 550] = pixels.data[i + 2]; 
  }
  return pixels;
}


let effect1;
getVideo();
function setEffect(){
  const  effect1 = "'"+this.id + "'";
  console.log(effect1);
  paintToCanvas();
}
 
  
 
  


video.addEventListener('canplay', paintToCanvas);


