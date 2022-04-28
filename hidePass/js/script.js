const pressed = [];
const secretCode = ['doctored','vdv','admin'];
const abc = ['d','v','a'];
let bColor;
let code = 'doctored';

let body = document.querySelector('body');
let block = document.querySelector('.center')
let user = document.querySelector('.user')
let check = true;

 

document.addEventListener('keyup', (e) => {
  console.log(e.key);
  pressed.push();

 for ( i = 0 ; i<4; i++ ){
  if (e.key == abc[i] && check === true ) {
    console.log('✅')
    code = secretCode[i];
    check = !check;
  
  }

}
pressed.push(e.key);



  if (pressed.join('').includes(code)) {
    console.log('? жесть, hacker!?');
    block.classList.remove('hide')
    user.classList.add('hide')

    setInterval(admin,500);
    
    
  }

  console.log(pressed);
});

function admin(){
  bColor = "rgb("+Math.round(Math.random()*256)+","+Math.round(Math.random()*256)+","+Math.round(Math.random()*256)+")";
  document.body.style.backgroundColor = bColor;
}




  
  
