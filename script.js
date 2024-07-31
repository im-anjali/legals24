function toggleText(contentId, showBtnId, hideBtnId) {
    var content = document.getElementById(contentId);
    var showBtn = document.getElementById(showBtnId);
    var hideBtn = document.getElementById(hideBtnId);

    if (content.style.display === "none" || content.style.display === "") {
        content.style.display = "block"; // Set to "block" for block-level elements
        showBtn.style.display = "none";
        hideBtn.style.display = "inline";
    } else {
        content.style.display = "none";
        showBtn.style.display = "inline";
        hideBtn.style.display = "none";
    }
}

VANTA.WAVES({
    el: "#vanta-canvas",
    mouseControls: false,
    touchControls: true,
    gyroControls: false,
    minHeight: 200.00,
    minWidth: 200.00,
    scale: 1.00,
    scaleMobile: 1.00,
    color: 0x4092e,
    shininess: 17.00,
    waveHeight: 9.50,
    zoom: 0.65
  })
  let lastUpdate = 0;
  const fpsLimit = 30;
  
  function updateAnimation(timestamp) {
    if (timestamp - lastUpdate > 1000 / fpsLimit) {
      lastUpdate = timestamp;
      vantaEffect.update(); // Trigger update if applicable
    }
    requestAnimationFrame(updateAnimation);
  }
  
  requestAnimationFrame(updateAnimation);
// script.js
document.addEventListener('DOMContentLoaded', () => {
  const navLinks = document.getElementById('navLinks');
  const hamburger = document.getElementById('hamburger');

  hamburger.addEventListener('click', () => {
      navLinks.classList.toggle('open');
  });
});
