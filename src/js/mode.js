const modeBtn = document.querySelector(".header__dark-mode");
const body = document.querySelector("body");
const modeFormLocal = localStorage.getItem("mode")
  ? localStorage.getItem("mode")
  : null;

if (modeFormLocal) {
  body.classList.add("dark-mode");
}

modeBtn.addEventListener("click", () => {
  body.classList.toggle("dark-mode");
  modeFormLocal
    ? localStorage.setItem("mode", "")
    : localStorage.setItem("mode", "dark");
});
