document.body.addEventListener('keyup', (event) => {
    PlaySound(event.code.toLowerCase());
});
document.querySelector('.composer button').addEventListener('click', () => {
    let song = document.querySelector('#input').value;
    if (song !== '') {
        let songArray = song.split('');
        PlayComposition(songArray);

    }
})
function PlaySound(sound) {
    let audioElement = document.querySelector(`#s_${sound}`);
    let keyElement = document.querySelector(`div[data-key="${sound}"]`);

    if (audioElement) {
        audioElement.currentTime = 0;
        audioElement.play();
    }

    if (keyElement) {
        keyElement.classList.add('active');
        setTimeout(() => {
            keyElement.classList.remove('active');
        }, 300);
    }

}
function PlayComposition(songArray) {
    let wait = 0;
    for (let songIten of songArray) {
        setTimeout(() => {
            PlaySound(`key${songIten}`);
            console.log('foi');
        }, wait)
        wait += 250;
    }

}
