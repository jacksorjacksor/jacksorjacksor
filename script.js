const number_of_audio_elements = document.querySelectorAll('audio').length;
const audio_play_button = document.querySelector('#play-button');
let previous_sample_index = 0;

function random_number_gen() {
  return Math.floor(Math.random() * number_of_audio_elements) + 1;
}

audio_play_button.addEventListener('click', () => {
  let sample_index = random_number_gen();
  while (sample_index === previous_sample_index) {
    sample_index = random_number_gen();
  }
  let audio_element_to_play = document.querySelector(`#bell${sample_index}`);
  if (audio_element_to_play.currentTime > 0) {
    audio_element_to_play.currentTime = 0;
  }
  audio_element_to_play.play();
  previous_sample_index === sample_index;
});
