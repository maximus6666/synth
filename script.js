const keys = Array.from(document.querySelectorAll('.key'));
const notes = document.querySelectorAll('audio');
const wrapper = document.querySelector('.wrapper');

//Усуваємо мініпаузу на початку аудіо
notes.forEach((note) => {
  note.currentTime = 1;
});

function playNote(event) {
  keys.find((key) => {
    if (key.dataset.audio === event.code) {
      const note = document.getElementById(event.code);
      note.play();
      key.classList.add('active');
    }
  });
}

function stopNote(event) {
  keys.find((key) => {
    if (key.dataset.audio === event.code) {
      const note = document.getElementById(event.code);
      // console.log(e.code);
      note.currentTime = 1;
      note.pause();
      key.classList.remove('active');
    }
  });
}

function playNoteOnTab(event) {
  console.log(event.target);
  if (event.target.classList.contains('key')){
    const note = document.getElementById(event.target.dataset.audio);
    note.play();
    event.target.classList.add('active');
  }
}

function stopNoteOnTab(event) {
  if (event.target.classList.contains('key')){
    const note = document.getElementById(event.target.dataset.audio);
    note.currentTime = 1;
    note.pause();
    event.target.classList.remove('active');
  }
}

document.addEventListener('keydown', playNote);
document.addEventListener('keyup', stopNote);

keys.forEach((key) => {
  key.addEventListener('touchstart', playNoteOnTab);
  key.addEventListener('touchend', stopNoteOnTab);
});
