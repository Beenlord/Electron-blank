const { ipcRenderer } = require('electron');

let interval = null;

window.addEventListener('DOMContentLoaded', () => {
  console.log('Blnk app by Beenlord.');

  const cat = new mewFunction();

  cat.sayMur();
  
  document
    .querySelector('.mew-button')
    .addEventListener('click', () => {
      
      if (interval !== null) {
        cat.sayAngryMew();
      } else {
        cat.sayMew();
        interval = setTimeout(() => {
          interval = null;
          interval = setTimeout(() => {
            interval = null;
            cat.sayMur();
          }, 700);
        }, 500);
      }
    });
});

function mewFunction() {
  const track = new Audio();

  function setSrc(file) {
    track.src = `common/sounds/${file}.mp3`;
  }

  function play(cb) {
    if (!track.paused) {
      track.pause();
      track.currentTime = 0;
    }
    cb();
    track.play();
  }

  return {
    sayMur() {
      play(() => setSrc('mur'));
    },
    sayMew() {
      play(() => setSrc('mew'));
    },
    sayAngryMew() {
      play(() => setSrc('angry-mew'));
    },
  };
}
