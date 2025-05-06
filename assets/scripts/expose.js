// expose.js

window.addEventListener('DOMContentLoaded', init);

function init() {
    const hornSelect = document.getElementById('horn-select');
    const volumeSlider = document.getElementById('volume');
    const playButton = document.querySelector('#expose > button'); 
    const hornImage = document.querySelector('#expose > img'); 
    const volumeIcon = document.querySelector('#volume-controls > img'); 
    const hornAudio = document.querySelector('#expose > audio'); 
    const jsConfetti = new JSConfetti();
    let selectedHorn = hornSelect.value;

    function handleHornChange() {
        selectedHorn = hornSelect.value;
        if (selectedHorn === 'select') {
            hornImage.src = 'assets/images/no-image.png';
        }
        else {
            hornImage.src = `assets/images/${selectedHorn}.svg`;
        }
        const audioPath = `assets/audio/${selectedHorn}.mp3`; 
        const altText = `${selectedHorn.replace('-', ' ')} horn`; 
       
        if (selectedHorn === 'select') {
            hornAudio.src = ''; 
            playButton.disabled = true; 
        } else {

            hornAudio.src = audioPath; 
            playButton.disabled = false; 
        }
    }

    function handleVolumeChange() {
        const volumeValue = parseInt(volumeSlider.value); 
        let iconPath = '';
        let iconAlt = '';

        if (volumeValue === 0) {
            iconPath = 'assets/icons/volume-level-0.svg';
            iconAlt = 'Volume level 0'; // Mute
        } else if (volumeValue < 33) {
            iconPath = 'assets/icons/volume-level-1.svg';
            iconAlt = 'Volume level 1';
        } else if (volumeValue < 67) {
            iconPath = 'assets/icons/volume-level-2.svg';
            iconAlt = 'Volume level 2';
        } else { // volumeValue >= 67 
            iconPath = 'assets/icons/volume-level-3.svg';
            iconAlt = 'Volume level 3';
        }

        volumeIcon.src = iconPath;
        volumeIcon.alt = iconAlt;

        hornAudio.volume = volumeValue / 100;
    }

    function handlePlaySound() {
        if (selectedHorn !== 'select') {
            hornAudio.play()
                .catch(error => {
                    console.error("Audio playback failed:", error);
                });

            if (selectedHorn === 'party-horn') {
                jsConfetti.addConfetti();
            }
        }
    }

    hornSelect.addEventListener('change', handleHornChange);
    volumeSlider.addEventListener('input', handleVolumeChange);
    playButton.addEventListener('click', handlePlaySound);

    handleHornChange(); 
    handleVolumeChange(); 

} 