/* ------------------------------ Lenis --------------------------------- */
gsap.registerPlugin(ScrollTrigger);

const lenis = new Lenis({
  wrapper: document.documentElement, // <html> bestuurt de scroll‑positie
  content: document.body,            // <body> is de echte inhoud
  smooth: true,                      // vloeiend scrollen
  lerp: 0.1,                         // “traagheid” (0 – 1)
  wheelMultiplier: 1                 // muiswiel‑snelheid
});

/* animatieloop */
function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}
requestAnimationFrame(raf);

/* Koppel Lenis aan ScrollTrigger (als je GSAP‑animaties toevoegt) */
ScrollTrigger.scrollerProxy(document.documentElement, {
  scrollTop(value) {
    return arguments.length ? lenis.scrollTo(value) : lenis.scroll.instance.scroll;
  },
  getBoundingClientRect() {
    return { top: 0, left: 0, width: window.innerWidth, height: window.innerHeight };
  }
});
ScrollTrigger.addEventListener('refresh', () => lenis.update());
ScrollTrigger.refresh();

/* ---------------- menu + zoeken ---------------- */
const hamburger = document.getElementById('hamburgerBtn');
const navMenu   = document.getElementById('navMenu');
hamburger.addEventListener('click', e => {
  e.preventDefault();
  navMenu.classList.toggle('show');
});

const searchBtn = document.querySelector('.search');
const searchBox = document.getElementById('searchBox');
searchBtn.addEventListener('click', e => {
  e.preventDefault();
  searchBox.style.display = searchBox.style.display === 'none' ? 'block' : 'none';
});
function handleSearch() {
  const q      = document.getElementById('searchInput').value.toLowerCase().trim();
  const panels = document.querySelectorAll('.panel');
  panels.forEach(p => p.style.display = p.textContent.toLowerCase().includes(q) ? 'block' : 'none');
}






