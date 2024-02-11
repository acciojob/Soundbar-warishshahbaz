function playSound(soundName) {
    var audio = new Audio(`sounds/${soundName}.mp3`);
    audio.play();
}

function stopAllSounds() {
    var sounds = document.querySelectorAll('audio');
    sounds.forEach(sound => sound.pause());
}
