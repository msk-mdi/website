let header = document.querySelector(".header");
let togglebtn = document.querySelector(".toggle-btn");

togglebtn.addEventListener("click", () => {
  header.classList.toggle("active");
});
