const toggle = document.querySelector("#toggle");
const flexy = document.querySelector("#flexy");

toggle.addEventListener("click", (e) => {
  flexy.classList.toggle("show-monthly");
});
