//Remove the 'playing' tag from the class list to return the object to it's pre transition state
function removeTransition(e) {
  if (e.propertyName !== 'transform') return;
  e.target.classList.remove('playing');
}

//Plays the sound assigned to the key that is pressed
function playSound(e) {
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`)
  const drum = document.querySelector(`img[data-key="${e.keyCode}"]`)
  //if audio doesn't exist then quit
  if (!audio) return;
  //add 'playing' tag to the class list so that the playing animation can happen
  drum.classList.add('playing');
  //Reset audio time to 0 so that if it is pressed while it is still playing then it doesn't have to wait until the audio has finished playing
  audio.currentTime = 0;
  audio.play();
}

const drums = Array.from(document.querySelectorAll('.drum'));
//listen for transitions and then remove them once finished
drums.forEach(drum => drum.addEventListener('transitionend', removeTransition));
//Listens for a key press and then calls the play sound subroutine with each key
window.addEventListener('keydown', playSound);