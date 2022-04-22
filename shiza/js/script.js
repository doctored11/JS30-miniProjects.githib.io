let  panels = document.querySelectorAll('.panel');
let button = document.querySelector('.info-ico');
let block = document.querySelector('.information');
let non = document.querySelector('.info-hide');
function startShiz(){
    this.classList.toggle('text-hidden');
    
}

// 
document.addEventListener('keydown', function(event) {
    if (event.code == 'Space') {
       console.log("0")
       panels.forEach(panel => panel.removeEventListener('transitionend', startShiz));
        
    }else{
        panels.forEach(panel => panel.addEventListener('transitionend', startShiz));

    }
  
  })
//   
document.addEventListener('keydown', startShiz);



panels.forEach(panel => panel.addEventListener('click', startShiz)); 
panels.forEach(panel => panel.addEventListener('transitionend', startShiz));

button.addEventListener('click', function(){
    block.classList.toggle('info-hide')}

);



