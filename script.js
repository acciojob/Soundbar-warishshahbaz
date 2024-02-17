function playSound(soundName) {
    var audio = new Audio(`${soundName}`);
    audio.play();
}

function stopAllSounds() {
    var sounds = document.querySelectorAll('.btn');
    sounds.forEach(sound => sound.pause());
}
