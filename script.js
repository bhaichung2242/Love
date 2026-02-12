const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");
const message = document.getElementById("message");
const yesImage = document.getElementById("yesImage");
const confettiCanvas = document.getElementById("confetti");

let noClickCount = 0;

// YES button click
yesBtn.addEventListener("click", () => {
  message.innerHTML =
    "YAYYYY 🎉💖 You said YES! This is the best day of my life 🥰💍";

  // show image with pop animation
  yesImage.style.display = "none";
  void yesImage.offsetWidth; // force reflow
  yesImage.style.display = "block";

  // trigger confetti
  launchConfetti();
});

// NO button click
noBtn.addEventListener("click", () => {
  noClickCount++;

  if (noClickCount === 1) {
    message.innerHTML = "😢 Are you sure? Think one more time...";
    yesBtn.classList.add("bounce");
    setTimeout(() => yesBtn.classList.remove("bounce"), 500);
  } else if (noClickCount === 2) {
    message.innerHTML = "😆 NO disappeared… Only YES remains 💖";
    noBtn.style.display = "none";
    yesBtn.innerHTML = "YES 💖😍";
    yesBtn.classList.add("bounce");
    setTimeout(() => yesBtn.classList.remove("bounce"), 500);
  }
});

// Simple confetti
function launchConfetti() {
  const confetti = confettiCanvas.getContext("2d");
  confettiCanvas.width = window.innerWidth;
  confettiCanvas.height = window.innerHeight;

  const particles = [];
  const colors = ["#ff4d6d", "#ff758c", "#ffb3c1", "#fff"];

  for (let i = 0; i < 150; i++) {
    particles.push({
      x: Math.random() * confettiCanvas.width,
      y: Math.random() * confettiCanvas.height - 100,
      r: Math.random() * 6 + 2,
      d: Math.random() * 150,
      color: colors[Math.floor(Math.random() * colors.length)],
      tilt: Math.floor(Math.random() * 10) - 10,
      tiltAngleIncrement: Math.random() * 0.07 + 0.05,
      tiltAngle: 0,
    });
  }

  function draw() {
    confetti.clearRect(0, 0, confettiCanvas.width, confettiCanvas.height);
    particles.forEach((p) => {
      confetti.beginPath();
      confetti.lineWidth = p.r / 2;
      confetti.strokeStyle = p.color;
      confetti.moveTo(p.x + p.tilt + p.r / 4, p.y);
      confetti.lineTo(p.x + p.tilt, p.y + p.tilt + p.r / 4);
      confetti.stroke();
    });
    update();
  }

  function update() {
    particles.forEach((p) => {
      p.tiltAngle += p.tiltAngleIncrement;
      p.y += (Math.cos(p.d) + 3 + p.r / 2) / 2;
      p.tilt = Math.sin(p.tiltAngle) * 15;

      if (p.y > confettiCanvas.height) {
        p.y = -10;
        p.x = Math.random() * confettiCanvas.width;
      }
    });
  }

  const interval = setInterval(draw, 20);

  // stop confetti after 5 seconds
  setTimeout(() => {
    clearInterval(interval);
    confetti.clearRect(0, 0, confettiCanvas.width, confettiCanvas.height);
  }, 5000);
}
