const loader = document.querySelector(".loader");

const loaderToggle = (info) => {
  if (info) {
    loader.classList.remove("hidden");
  } else {
    loader.classList.add("hidden");
  }
};
export default loaderToggle;
