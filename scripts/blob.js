// Récupérer l'élément .blob
const blob = document.querySelector(".blob");

// Ajouter un écouteur d'événement 'mousemove' sur le body
document.body.addEventListener("mousemove", (e) => {
  // Mettre à jour la position de l'élément .blob
  blob.style.left = e.clientX + "px";
  blob.style.top = e.clientY + "px";
});

const sectionHome = document.querySelector(".section-home");
sectionHome.addEventListener("mouseleave", function (e) {
  blob.style.display = "none";
});
sectionHome.addEventListener("mouseenter", function (e) {
  blob.style.display = "block";
});

const clickMenu = document.querySelector(".bar-icon");

clickMenu.addEventListener("click", function (e) {
  e.preventDefault();
  blob.style.display = "none";
});
