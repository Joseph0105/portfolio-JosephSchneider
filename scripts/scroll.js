const sections = document.querySelectorAll("section");

// Tableau pour stocker l'état de défilement de chaque section
const sectionScrolled = new Array(sections.length).fill(false);

window.addEventListener("wheel", (event) => {
  const delta = event.deltaY;
  let sectionIndex = -1;

  // Trouver l'index de la section actuellement visible
  sections.forEach((section, index) => {
    if (section.getBoundingClientRect().top <= 0) {
      sectionIndex = index;
    }
  });

  if (delta > 0 && sectionIndex < sections.length - 1) {
    // Vérifier si l'utilisateur a déjà commencé à scroller dans la section
    if (sectionScrolled[sectionIndex]) {
      // Activer le scroll automatique si l'utilisateur atteint la fin de la section
      if (
        sections[sectionIndex].getBoundingClientRect().bottom <=
        window.innerHeight
      ) {
        sectionScrolled[sectionIndex] = false;
        sections[sectionIndex + 1].scrollIntoView({ behavior: "smooth" });
      }
    } else {
      // Activer le scroll automatique si l'utilisateur n'a pas encore commencé à scroller dans la section
      sections[sectionIndex + 1].scrollIntoView({ behavior: "smooth" });
    }
  } else if (delta < 0 && sectionIndex > 0) {
    // Vérifier si l'utilisateur a déjà commencé à scroller dans la section
    if (sectionScrolled[sectionIndex]) {
      // Activer le scroll automatique si l'utilisateur atteint le début de la section
      if (sections[sectionIndex].getBoundingClientRect().top >= 0) {
        sectionScrolled[sectionIndex] = false;
        sections[sectionIndex - 1].scrollIntoView({ behavior: "smooth" });
      }
    } else {
      // Activer le scroll automatique si l'utilisateur n'a pas encore commencé à scroller dans la section
      sections[sectionIndex - 1].scrollIntoView({ behavior: "smooth" });
    }
  }
});

// Ajouter des écouteurs d'événements pour suivre l'état de défilement de chaque section
sections.forEach((section, index) => {
  section.addEventListener("scroll", () => {
    if (section.scrollTop === section.scrollHeight - section.clientHeight) {
      sectionScrolled[index] = true;
    } else {
      sectionScrolled[index] = false;
    }
  });
});
