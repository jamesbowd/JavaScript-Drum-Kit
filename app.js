const keys = document.querySelectorAll(".key");

for (const key of keys) {
  key.addEventListener("transitionend", (e) => {
    e.target.classList.remove("playing");
  });
}

document.addEventListener("keydown", (e) => {
  const key = document.querySelector(`div[data-key="${e.keyCode}"]`);
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);

  if (!audio) return;
  audio.currentTime = 0;
  audio.play();

  key.classList.add("playing");
});
