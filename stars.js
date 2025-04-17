const MAX_STARS = 10;
const ANIMAL_EMOJIS = ["🐶", "🐱", "🦊", "🐼", "🐧", "🐰", "🦁", "🐸"];
let currentAnimalIndex = parseInt(localStorage.getItem("animalIndex")) || 0;

function getStarCount() {
  return parseInt(localStorage.getItem("stars")) || 0;
}

function setStarCount(count) {
  localStorage.setItem("stars", count);
}

function updateAnimalIndex() {
  currentAnimalIndex = (currentAnimalIndex + 1) % ANIMAL_EMOJIS.length;
  localStorage.setItem("animalIndex", currentAnimalIndex);
}

function renderStars(containerId = "stars-container") {
  const container = document.getElementById(containerId);
  if (!container) return;

  container.innerHTML = ""; // 清空舊內容
  const stars = getStarCount();

  for (let i = 0; i < MAX_STARS; i++) {
    const star = document.createElement("span");
    star.textContent = i < stars ? "⭐" : "⬜";
    container.appendChild(star);
  }

  // 顯示動物 emoji
  const emoji = document.createElement("div");
  emoji.style.fontSize = "2rem";
  emoji.style.marginTop = "0.5rem";
  emoji.textContent = ANIMAL_EMOJIS[currentAnimalIndex];
  container.appendChild(emoji);
}

function addStar(containerId = "stars-container") {
  let stars = getStarCount();
  stars++;
  if (stars >= MAX_STARS) {
    stars = 0;
    updateAnimalIndex(); // 換下一個可愛動物
  }
  setStarCount(stars);
  renderStars(containerId);
}
