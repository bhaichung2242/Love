const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");
const message = document.getElementById("message");

let noClickCount = 0;

yesBtn.addEventListener("click", () => {
  message.innerHTML =
    "YAYYYY 🎉💖 Best decision ever! You just made me so happy 🥰";
});

noBtn.addEventListener("click", () => {
  noClickCount++;

  if (noClickCount === 1) {
    message.innerHTML = "😢 Are you sure? Think once more...";
  } else if (noClickCount === 2) {
    message.innerHTML = "🥺 My heart says YES already...";
  } else if (noClickCount === 3) {
    message.innerHTML = "😆 Okay okay, this NO is broken now!";
    noBtn.innerText = "Yes 💖";
    noBtn.style.backgroundColor = "#ff4d6d";
  } else {
    message.innerHTML = "💍 Destiny accepted YES for you 😍";
  }
});
