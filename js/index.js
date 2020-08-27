// PreloaderJS
var preloader = document.getElementById("preloader");

function preload() {
  preloader.style.display = "none";
}

// GSAP Animations

// Content

// gsap.from(".showcase-content", { opacity: 0, duration: 1, y: -50 });
// gsap.from(".stagger", { opacity: 0, duration: 1, y: -50, stagger: 0.6 });
// gsap.from(".background", { opacity: 0, duration: 1 });
// gsap.from(".down", { opacity: 0, duration: 1, y: 100, delay: 1.2 });
// gsap.from(".up", { opacity: 0, duration: 1, y: -100, delay: 1.2 });
// gsap.from(".right", {
//   opacity: 0,
//   duration: 1,
//   x: 100,
//   delay: 1.2,
// });
// gsap.from(".left", {
//   opacity: 0,
//   duration: 1,
//   x: -100,
//   delay: 1.2,
// });
// gsap.from(".down-scroll", { opacity: 0, duration: 1, y: 100, delay: 2 });

// Using Timeline

var tl1 = gsap.timeline({ defaults: { duration: 1, opacity: 0 } });
tl1
  .from(".stagger", { y: -50, stagger: 0.6 })
  .from(".up", { y: -100 }, "-=0.25")
  .from(".right", { x: 100 }, "-=1")
  .from(".left", { x: -100 }, "-=1")
  .from(".down", { y: 100 }, "-=1");

var tl2 = gsap.timeline({ defaults: { duration: 1, opacity: 0 } });

// my work
tl2.from(".projects", { y: -50 });

// latest projects
var tl3 = gsap.timeline({
  scrollTrigger: {
    trigger: ".recent",
    toggleActions: "play none none none",
    start: "top 90%",
  },
});
tl3.from(".recent", { x: 70, opacity: 0, duration: 1 });

var tl4 = gsap.timeline({
  scrollTrigger: {
    trigger: ".project-1",
    toggleActions: "play none none none",
    start: "top 80%",
  },
});

tl4.from(".project-1", { x: -200, opacity: 0, duration: 0.7 });

var tl5 = gsap.timeline({
  scrollTrigger: {
    trigger: ".project-2",
    toggleActions: "play none none none",
    start: "top 80%",
  },
});

tl5.from(".project-2", { x: 200, opacity: 0, duration: 0.7 });

var tl6 = gsap.timeline({
  scrollTrigger: {
    trigger: ".project-3",
    toggleActions: "play none none none",
    start: "top 80%",
  },
});

tl6.from(".project-3", { x: -200, opacity: 0, duration: 0.7 });

var tl7 = gsap.timeline({
  scrollTrigger: {
    trigger: ".scroll-btn",
    toggleActions: "play none none none",
    start: "top 80%",
  },
});

tl7.from(".scroll-btn", { y: -50, opacity: 0, duration: 1.2 });

// about me

var tl8 = gsap.timeline({
  scrollTrigger: {
    trigger: "#about-me",
    toggleActions: "play none none none",
    start: "top 80%",
  },
});

tl8
  .from(".tagline", { y: -50, opacity: 0, duration: 0.7, stagger: 0.6 })
  .from(".about", { x: 100, opacity: 0, duration: 1 }, "-=1.2");

// contact section
var tl9 = gsap.timeline({
  scrollTrigger: {
    trigger: "#contact",
    toggleActions: "play none none none",
    start: "top 80%",
  },
});

tl9
  .from(".contact", { x: -100, opacity: 0, duration: 0.7 })
  .from(".email-svg", { x: -100, opacity: 0, duration: 0.7 }, "-=0.6")
  .from(".email-content", { x: 100, opacity: 0, duration: 0.7 }, "-=0.6");

//Navbar Social Media icons

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

// Fancy Name text

const text = document.querySelector(".fancy");
const strText = text.textContent;
const splitText = strText.split("");

text.textContent = "";

for (let i = 0; i < splitText.length; i++) {
  text.innerHTML += "<span>" + splitText[i] + "</span>";
}

let char = 0;
let timer = setInterval(onTick, 50);

function onTick() {
  const span = text.querySelectorAll("span")[char];
  span.classList.add("fade");
  char++;
  if (char === splitText.length) {
    complete();
    return;
  }
}

function complete() {
  clearInterval(timer);
  timer = null;
}
