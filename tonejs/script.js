const playButton = document.querySelector('#playButton');
const synth = new Tone.Synth().toDestination();
const now = Tone.now();

function sayHi() {
  console.log('Hi!');
  // trigger the attack immediately
  synth.triggerAttackRelease('C4', '8n', now);
}

playButton.addEventListener('click', sayHi);
