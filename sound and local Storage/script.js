const button = document.querySelector('button');

button.addEventListener('click', () =>{
   const audio= new Audio ('https://www.soundjay.com/ambient/sounds/boarding-accouncement-1.mp3');
   audio.play();
//    audio.pause();
})

const essayInput = document.getElementById('essay');

essayInput.addEventListener('change', () =>{
   localStorage.setItem('key_essay', essayInput.value);
})