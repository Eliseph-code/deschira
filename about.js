gsap.registerPlugin(ScrollTrigger);

// Voor elke panel de achtergrond instellen en tekst laten verschijnen
document.querySelectorAll(".panel").forEach((panel) => {
  const bg = panel.getAttribute("data-bg");
  panel.style.backgroundImage = `url(${bg})`;

  ScrollTrigger.create({
    trigger: panel,
    start: "top 20%",
    end: "bottom center",
    toggleClass: { targets: panel, className: "active" },
    once: false,
    markers: false
  });
});
