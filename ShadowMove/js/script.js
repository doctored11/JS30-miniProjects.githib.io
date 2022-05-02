
  const hero = document.querySelector('.hero');
  const text = hero.querySelector('h1');
  const doc = hero.querySelector('.doc11')
  const walk = 15; 
  const Bwalk = 600; 

  function shadow(e) {
    const { offsetWidth: width, offsetHeight: height } = hero;
    let { offsetX: x, offsetY: y } = e;

    if (this !== e.target) {
      x = x + e.target.offsetLeft;
      y = y + e.target.offsetTop;
    }

    const xWalk = Math.round((x / width *   walk) - (walk / 2));
    const yWalk = Math.round((y / height * walk) - (walk / 2));
    const xWalkBig = Math.round((x / width * Bwalk) - ( Bwalk / 4));
    const yWalkBig = Math.round(( y / height * Bwalk) -  Bwalk );

    text.style.textShadow = `
      ${xWalk}px ${yWalk * -1}px 0 rgba(255,0,255,0.7),
      ${xWalk * -1}px ${yWalk}px 0 rgba(0,255,255,0.7),
      ${yWalk}px ${xWalk * -1}px 0 rgba(0,255,0,0.7),
      ${yWalk * -1}px ${xWalk}px 0 rgba(0,0,255,0.7),

      ${xWalkBig}px ${yWalkBig * -1}px 210px rgba(255,0,255,0.7),
      ${xWalkBig * -1}px ${yWalkBig}px 210px rgba(0,255,255,0.7),
      ${yWalkBig}px ${xWalkBig * -1}px 210px rgba(0,255,0,0.7),
      ${yWalkBig * -1}px ${xWalkBig}px 210px rgba(0,0,255,0.7)
    `;
    
    doc.style.textShadow = `
      ${xWalk / 2}px ${yWalk / -2}px 0 rgba(255,0,255,0.7),
      ${xWalk / -2}px ${yWalk / 2}px 0 rgba(0,255,255,0.7),
      ${yWalk / 2}px ${xWalk / -2}px 0 rgba(0,255,0,0.7),
      ${yWalk / -2}px ${xWalk / 2}px 0 rgba(0,0,255,0.7)

      
    `;


  }

  hero.addEventListener('mousemove', shadow);