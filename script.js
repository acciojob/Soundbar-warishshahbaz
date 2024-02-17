var playingSounds = []; // Array to store currently playing sounds

function playSound(soundName) {
    var audio = new Audio(soundName);
    audio.play();
    playingSounds.push(audio); // Add the audio element to the array of playing sounds
}

function stopAllSounds() {
    playingSounds.forEach(sound => sound.pause());
    playingSounds = []; // Clear the array of playing sounds
}