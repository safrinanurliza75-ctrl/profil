// Neon Progress Bar Animation + Fade-in section
document.addEventListener("DOMContentLoaded", () => {
  animateProgressBars();
  revealSections();
  setupNavGlow();
});

// Neon progress bars animate
function animateProgressBars() {
  document.querySelectorAll(".bar").forEach(bar => {
    const value = bar.dataset.value;
    bar.style.width = "0";
    bar.style.boxShadow = "0 0 25px #000a";
    setTimeout(() => {
      bar.style.transition = "width 0.7s cubic-bezier(.2,1.2,.6,.98), box-shadow 0.5s";
      bar.style.width = value + "%";
      bar.style.boxShadow = "0 0 30px #fffaaa, 0 0 32px #05f9ff, 0 0 16px #b967ff";
    }, 250 + Math.random()*500);
  });
}

// Fade-in on scroll for sections
function revealSections() {
  const sections = document.querySelectorAll('.neon-section, .about-section');
  function checkFade() {
    sections.forEach(sec => {
      if(sec.classList.contains('visible')) return;
      const rect = sec.getBoundingClientRect();
      if (rect.top <= window.innerHeight-60) {
        sec.style.opacity = 1;
        sec.style.transform = "scale(1.02) translateY(0)";
        sec.classList.add('visible');
      }
    });
  }
  sections.forEach(sec => {
    sec.style.opacity = 0;
    sec.style.transform = "scale(0.97) translateY(40px)";
  });
  window.addEventListener('scroll', checkFade);
  setTimeout(checkFade, 350);
}

// Neon Glow Navigation hover/active effect
function setupNavGlow() {
  document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('mouseover', () => {
      link.classList.add('neon-active');
    });
    link.addEventListener('mouseleave', () => {
      link.classList.remove('neon-active');
    });
    link.addEventListener('click', function(e){
      if(link.hash) {
        e.preventDefault();
        let target = document.querySelector(link.hash);
        if(target){
          window.scrollTo({top:target.offsetTop-55, behavior:"smooth"});
        }
      }
    });
  });
}