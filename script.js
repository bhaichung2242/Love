const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");
const message = document.getElementById("message");

let noClickCount = 0;

// When YES is clicked
yesBtn.addEventListener("click", () => {
  message.innerHTML =
    "YAYYYY 🎉💖 You just made me the happiest person alive! 🥰💍";
});

// When NO is clicked
noBtn.addEventListener("click", () => {
  noClickCount++;

  if (noClickCount === 1) {
    message.innerHTML = "😢 Are you sure? Think one more time...";
  } else if (noClickCount === 2) {
    message.innerHTML =
      "😆 Oops! NO button disappeared... Only YES is allowed 💖";
    noBtn.style.display = "none"; // Hide NO button
    yesBtn.innerHTML = "YES 💖😍"; // Make YES more attractive
    yesBtn.style.transform = "scale(1.2)";
  }
});
