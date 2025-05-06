// explore.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  // TODO
  const synth = window.speechSynthesis;
  const voiceSelect = document.getElementById('voice-select');
  const talkButton = document.querySelector('#explore > button'); 
  const textToSpeak = document.getElementById('text-to-speak');
  let selectedVoice = voiceSelect.value;
  let voices = []

  function populateVoiceList() {
    voices = synth.getVoices();

    for (let i = 0; i < voices.length ; i++) {
      const option = document.createElement('option');
      option.textContent = voices[i].name + ' (' + voices[i].lang + ')';

      if (voices[i].default) {
        option.textContent += ' -- DEFAULT';
      }

      option.setAttribute('data-lang', voices[i].lang);
      option.setAttribute('data-name', voices[i].name);
      option.value = voices[i].name; 
      voiceSelect.appendChild(option);
    }
  }

  function handleTalkButton() {
    if (selectedVoice !== 'select') {
        const utterance = new SpeechSynthesisUtterance(textToSpeak.value);
        utterance.voice = voices.find(voice => voice.name === selectedVoice);
        synth.speak(utterance);
    }
  }

  if (speechSynthesis.onvoiceschanged !== undefined) {
    speechSynthesis.onvoiceschanged = populateVoiceList;
  }

  populateVoiceList();

  voiceSelect.addEventListener('change', () => {
    selectedVoice = voiceSelect.value;
  });

  talkButton.addEventListener('click', handleTalkButton);
  
}