document.addEventListener('DOMContentLoaded', () => {
  const buttons = document.querySelectorAll('.btn');
  const stopButton = document.querySelector('.stop');
  const audios = document.querySelectorAll('audio');

  buttons.forEach(button => {
    button.addEventListener('click', () => {
      const soundId = button.dataset.sound;
      const audio = document.getElementById(soundId);
      if (audio) {
        audio.currentTime = 0;
        audio.play();
      }
    });
  });

  stopButton.addEventListener('click', () => {
    audios.forEach(audio => {
      audio.pause();
      audio.currentTime = 0;
    });
  });
});

