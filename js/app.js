window.onscroll = function () {
  var currentScrollPos = window.pageYOffset;
  if (currentScrollPos > 650) {
    document.querySelector(".index").style.display = "inline-block";
  } else {
    document.querySelector(".index").style.display = "none";
  }
  document.querySelector(".index").style.opacity = `${Math.min(
    1,
    Math.max(0, opacity)
  )}`;
};
