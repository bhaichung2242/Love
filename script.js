const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");
const message = document.getElementById("message");
const yesImage = document.getElementById("yesImage");

let noClickCount = 0;

// YES button click
yesBtn.addEventListener("click", () => {
  message.innerHTML =
    "YAYYYY 🎉💖 You said YES! This is the best day of my life 🥰💍";
  yesImage.style.display = "block"; // show image
});

// NO button click
noBtn.addEventListener("click", () => {
  noClickCount++;

  if (noClickCount === 1) {
    message.innerHTML = "😢 Are you sure? Think one more time...";
  } else if (noClickCount === 2) {
    message.innerHTML = "😆 NO disappeared… Only YES remains 💖";
    noBtn.style.display = "none";
    yesBtn.innerHTML = "YES 💖😍";
    yesBtn.style.transform = "scale(1.2)";
  }
});
