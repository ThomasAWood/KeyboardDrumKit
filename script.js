function removeTransition(e) {
  if (e.propertyName !== 'transform') return;
  e.target.classList.remove('playing');
}

function playSound(e) {
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`)
  const drum = document.querySelector(`img[data-key="${e.keyCode}"]`)
  if (!audio) return;
  
  drum.classList.add('playing');
  audio.currentTime = 0;
  audio.play();
}

const drums = Array.from(document.querySelectorAll('.drum'));
drums.forEach(drum => drum.addEventListener('transitionend', removeTransition));
window.addEventListener('keydown', playSound);