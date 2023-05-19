document.addEventListener("DOMContentLoaded", function () {
  var animateButton = document.getElementById("animateButton");

  animateButton.addEventListener("click", function () {
    var smiley = document.querySelector(".smiley");
    smiley.style.animationPlayState = "running";
  });
});
