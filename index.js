const startBtn = document.getElementById("startBtn");
const intro = document.getElementById("intro");

startBtn.addEventListener("click", () => {
  intro.style.opacity = "0";
  setTimeout(() => {
    intro.style.display = "none";
    document.body.classList.remove("not-loaded");
  }, 600);
});
