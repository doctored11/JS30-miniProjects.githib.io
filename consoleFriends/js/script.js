const friends = [{ name: 'Artem', age: 19 , character: 'Durak' , ico:'😤'  }, 
    { name: 'Pasha', age: 19, character: 'funny, nice person'  , ico:'👻'  }, 
    { name: 'Alex', age: 22, character: '<---' , ico:'💨'  }, 
    { name: 'Rita', age: 20, character: 'Um, I dont know.... Rita is like Rita, everyone understands everything'  , ico:'🐥'  }, 
    { name: 'RandomMen', age: 33,character: 'I do not know what he is doing here' , ico:'🐔 '   }];

    function makeTransform() {
      const p = document.querySelector('p');
      p.classList.toggle("active");
      consoleinf();
    }
function consoleinf(){
    console.clear();
    //
    console.log('permanent inscription');
    console.log('Interpolated example:  Alex is %s', '💩');
    console.warn('warning exampl 😅');
    console.error('Oh no, it is error 😡');
    console.info('information: it is information ');
    const p = document.querySelector('p');
    console.assert(p.classList.contains('active'), 'Non Active!');
    console.dir(p);

    friends.forEach(friend => {
      console.log(`${friend.ico}`);
      console.groupCollapsed(`${friend.name}`);
      // 
      console.log('😳');
      console.log(`This is  ${friend.name}, --> ${friend.age} --> is ${friend.character}`);
      console.groupEnd(`${friend.name}`);

    })
  }
