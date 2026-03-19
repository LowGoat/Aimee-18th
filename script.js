// Envelope Click
const envelope = document.getElementById("envelopeBtn");
const music = document.getElementById("bgMusic");

envelope.addEventListener("click", function () {
  envelope.classList.add("open");
  createConfetti();
  music.play();

  document.querySelectorAll(".reveal").forEach(section => {
    section.classList.add("ready");
  });

  setTimeout(() => {
    document.body.classList.remove("locked");

    const firstReveal = document.querySelector(".reveal");
    firstReveal.classList.add("active");
    firstReveal.scrollIntoView({
      behavior: "smooth"
    });

    revealOnScroll();
  }, 600);
});

// Scroll Reveal
function revealOnScroll() {
  const reveals = document.querySelectorAll(".reveal.ready");

  reveals.forEach(section => {
    const windowHeight = window.innerHeight;
    const elementTop = section.getBoundingClientRect().top;

    if (elementTop < windowHeight - 100) {
      section.classList.add("active");
    }
  });
}

window.addEventListener("scroll", revealOnScroll);
revealOnScroll();

// COUNTDOWN TIMER
const daysEl = document.getElementById("days");
const hoursEl = document.getElementById("hours");
const minutesEl = document.getElementById("minutes");
const secondsEl = document.getElementById("seconds");

// April 5, 2026
const targetDate = new Date("April 5, 2026 00:00:00").getTime();

function updateCountdown() {

  const now = new Date().getTime();
  const distance = targetDate - now;

  if (distance <= 0) {
    launchFireworks();
    createConfetti();
    daysEl.textContent = "00";
    hoursEl.textContent = "00";
    minutesEl.textContent = "00";
    secondsEl.textContent = "00";
    return;
  }

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((distance / (1000 * 60)) % 60);
  const seconds = Math.floor((distance / 1000) % 60);

  daysEl.textContent = String(days).padStart(2, "0");
  hoursEl.textContent = String(hours).padStart(2, "0");
  minutesEl.textContent = String(minutes).padStart(2, "0");
  secondsEl.textContent = String(seconds).padStart(2, "0");
}

updateCountdown();
setInterval(updateCountdown, 1000);

// Sparkles generator
const sparkleContainer = document.querySelector(".sparkle-container");

for (let i = 0; i < 30; i++) {
  const sparkle = document.createElement("div");
  sparkle.classList.add("sparkle");

  sparkle.style.left = Math.random() * 100 + "vw";
  sparkle.style.animationDuration = 5 + Math.random() * 10 + "s";
  sparkle.style.opacity = Math.random();

  sparkleContainer.appendChild(sparkle);
}

// Confetti
function createConfetti() {

  const colors = [
    "#ffd700",
    "#f5d6a1",
    "#ff9eb5",
    "#ffffff",
    "#ffe066"
  ];

  for (let i = 0; i < 180; i++) {

    const confetti = document.createElement("div");
    confetti.classList.add("confetti");

    const color = colors[Math.floor(Math.random() * colors.length)];
    confetti.style.background = color;

    // start from left or right cannon
    const startLeft = Math.random() > 0.5;

    confetti.style.left = startLeft ? "0px" : "100vw";
    confetti.style.top = "40vh";

    const x = (Math.random() * 800) * (startLeft ? 1 : -1);
    const y = Math.random() * 500;

    confetti.style.setProperty("--x", x + "px");
    confetti.style.setProperty("--y", y + "px");

    confetti.style.animationDuration = 3 + Math.random() * 2 + "s";

    document.body.appendChild(confetti);

    setTimeout(() => confetti.remove(), 5000);

  }

}

// PARALLAX SCROLL EFFECT

window.addEventListener("scroll", () => {

  const sections = document.querySelectorAll(".section");

  sections.forEach(section => {

    const speed = 0.3;
    const offset = window.scrollY * speed;

    section.style.backgroundPositionY = offset + "px";

  });

});

// Falling petals generator

function createPetal() {

  const petal = document.createElement("div");
  petal.classList.add("petal");

  petal.style.left = Math.random() * 100 + "vw";
  petal.style.animationDuration = 6 + Math.random() * 5 + "s";
  petal.style.opacity = Math.random() * 0.8 + 0.2;

  document.body.appendChild(petal);

  setTimeout(() => {
    petal.remove();
  }, 11000);

}

// spawn petals continuously
setInterval(createPetal, 700);

function createFirefly(){

  const firefly = document.createElement("div");
  firefly.classList.add("firefly");

  firefly.style.left = Math.random()*100+"vw";
  firefly.style.top = Math.random()*100+"vh";

  firefly.style.animationDuration = 4 + Math.random()*4+"s";

  document.body.appendChild(firefly);

  setTimeout(()=> firefly.remove(),8000);

}

setInterval(createFirefly,1200);

function createDust(){

 const dust=document.createElement("div");
 dust.classList.add("magic-dust");

 dust.style.left=Math.random()*100+"vw";
 dust.style.top=Math.random()*100+"vh";

 document.body.appendChild(dust);

 setTimeout(()=>dust.remove(),15000);

}

setInterval(createDust,900);

function createOrb(){

 const orb=document.createElement("div");
 orb.classList.add("light-orb");

 orb.style.left=Math.random()*100+"vw";
 orb.style.top="110vh";

 orb.style.animationDuration=12+Math.random()*8+"s";

 document.body.appendChild(orb);

 setTimeout(()=>orb.remove(),20000);

}

setInterval(createOrb,2000);

function launchFireworks(){

for(let i=0;i<30;i++){

const firework=document.createElement("div");
firework.classList.add("firework");

firework.style.left=Math.random()*100+"vw";
firework.style.top=Math.random()*60+"vh";

document.body.appendChild(firework);

setTimeout(()=>{
firework.remove();
},2000);

}

}

