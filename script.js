const number_of_audio_elements = document.querySelectorAll('audio').length;
const audio_play_button = document.querySelector('#play-button');

audio_play_button.addEventListener('click', () => {
  let element_index = Math.floor(Math.random() * number_of_audio_elements) + 1;
  document.querySelector(`#bell${element_index}`).play();
});
