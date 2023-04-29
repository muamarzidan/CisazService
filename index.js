VanillaTilt.init(document.querySelectorAll(".sosial_media ul li"), {
    max: 10,
    speed: 10,
    glare: true,
    "max-glare": 1
});


var animateButton = function (e) {
    e.preventDefault;
    //reset animation
    e.target.classList.remove("animate");
  
    e.target.classList.add("animate");
    setTimeout(function () {
      e.target.classList.remove("animate");
    }, 700);
  };
  
  var bubblyButtons = document.getElementsByClassName("bubbly-button");
  
  for (var i = 0; i < bubblyButtons.length; i++) {
    bubblyButtons[i].addEventListener("click", animateButton, false);
  }