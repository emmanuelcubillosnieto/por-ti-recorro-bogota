document.addEventListener("DOMContentLoaded", () => {
  const starfield = document.getElementById("starfield");
  const numStars = 600;

  for (let i = 0; i < numStars; i++) {
    const star = document.createElement("div");
    star.classList.add("star");

    const size = Math.random() * 3 + 1;
    star.style.width = `${size}px`;
    star.style.height = `${size}px`;
    star.style.top = `${Math.random() * 100}vh`;
    star.style.left = `${Math.random() * 100}vw`;

    const moveDuration = 20 + Math.random() * 20;
    const blinkDuration = 1 + Math.random() * 2;
    const blinkDelay = Math.random() * 5;

    star.style.animationDuration = `${moveDuration}s, ${blinkDuration}s`;
    star.style.animationDelay = `0s, ${blinkDelay}s`;

    starfield.appendChild(star);
  }
});
