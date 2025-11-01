document.getElementById("form").addEventListener("submit", function (e) {
  e.preventDefault();
  document.getElementById("customAlert").style.display = "flex";
  this.reset();
});

function closeAlert() {
  document.getElementById("customAlert").style.display = "none";
}
