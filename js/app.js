var opacity = 0;
var intervalID = 0;

function fadeOut() {
  intervalID = setInterval(hide, 200);
}

function hide() {
  var socialMedia = document.querySelector(".index");
  opacity = Number(
    window.getComputedStyle(socialMedia).getPropertyValue("opacity")
  );
}

window.onscroll = function () {
  var currentScrollPos = window.pageYOffset;
  if (currentScrollPos > 650) {
    document.querySelector(".index").style.display = "inline-block";
  } else {
    document.querySelector(".index").style.display = "none";
  }
};
