const btn = document.getElementById("menu-btn");
const nav = document.getElementById("menu");
const downloadIcon = document.getElementById("download-icon");

btn.addEventListener("click", () => {
  console.log("button clicked");
  btn.classList.toggle("open");
  nav.classList.toggle("flex");
  nav.classList.toggle("hidden");
});

mediumZoom(".zoom", {
  margin: 50,
  background: "#000",
});
