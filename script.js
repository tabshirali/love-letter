
function openLetter(el) {
  el.classList.toggle('open')

  const heart = document.createElement('img')
  heart.className = 'heart-pop'
  heart.src = 'in-love.png' // path to your png
  heart.alt = 'heart'

  document.body.appendChild(heart)
  setTimeout(() => heart.remove(), 1000)
}


  function createMiniHeart() {
  const heart = document.createElement("div");
  heart.className = "petal";
  heart.textContent = "♡";
  document.body.appendChild(heart);

  // random horizontal position
  heart.style.left = Math.random() * window.innerWidth + "px";

  // optional: random size
  const size = 12 + Math.random() * 12;
  heart.style.fontSize = size + "px";

  // remove after animation ends
  setTimeout(() => heart.remove(), 6000);
}

// spawn hearts continuously
setInterval(createMiniHeart, 300);

 