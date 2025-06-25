gsap.registerPlugin(ScrollTrigger);


const boxes = gsap.utils.toArray(".scrolltrigger");

boxes.forEach((box, i) => {
  gsap.to(box, {
    scrollTrigger: {
      trigger: box,
      start: 'top 100%',
      scrub: true,
      markers: false
    },
    x: 1000,
    opacity: 0 // Vervaagt de tekst naar 0 opacity
  });
});

const hamburger = document.getElementById('hamburgerBtn');
const navMenu = document.getElementById('navMenu');


document.getElementById('hamburgerBtn').addEventListener('click', function(e) {
  e.preventDefault();
  document.getElementById('navMenu').classList.toggle('show');
});

 const triggers = document.querySelectorAll('.scrolltrigger');
  triggers.forEach((el, index) => {
    el.style.setProperty('--delay', `${index * 0.3}s`);
  });

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.animationPlayState = 'running';
      } else {
        entry.target.style.opacity = 0;
        entry.target.style.transform = 'translateX(-100%)';
        entry.target.style.animation = 'none'; // reset
        void entry.target.offsetWidth; // force reflow
        entry.target.style.animation = 'flyin 1s forwards';
      }
    });
  }, {
    threshold: 0.1
  });

  triggers.forEach(el => observer.observe(el));


function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}

requestAnimationFrame(raf);

const searchButton = document.querySelector(".search");
  const searchBox = document.getElementById("searchBox");

  searchButton.addEventListener("click", function (e) {
    e.preventDefault(); // voorkomt dat "#" naar boven springt
    searchBox.style.display = searchBox.style.display === "none" ? "block" : "none";
  });

 function handleSearch() {
  const query = document.getElementById("searchInput").value.toLowerCase().trim();
  const panels = document.querySelectorAll('.panel');

  panels.forEach(panel => {
    const text = panel.textContent.toLowerCase();
    if (text.includes(query)) {
      panel.style.display = "block";
    } else {
      panel.style.display = "none";
    }
  });
}