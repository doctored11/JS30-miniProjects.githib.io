const checkboxes = document.querySelectorAll('.inbox input[type="checkbox"]');

let lastChecked;

function handleCheck(e) {

  let inBetween = false;
  if (e.shiftKey) {
    
    checkboxes.forEach(checkbox => {
      console.log(checkbox);
      if (checkbox == this || checkbox == lastChecked) {
        inBetween = !inBetween;
      }
      
        if (this.checked == false && inBetween ){
        checkbox.checked = false;}

        if ( this.checked == true && inBetween  ){
        checkbox.checked = true;}

    });
  }

  lastChecked = this;
}

checkboxes.forEach(checkbox => checkbox.addEventListener('click', handleCheck));  