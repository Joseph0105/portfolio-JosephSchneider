// Ouvrir le CV
const cvLink = document.querySelector(".CV-link");

const cvModal = document.querySelector(".cv-modal");

cvLink.addEventListener("click", function (e) {
  e.preventDefault();

  cvModal.style.display = "block";
});
// Fermer le cv

const cvContainer = document.querySelector(".cv-container");

cvModal.addEventListener("click", function (e) {
  if (e.target === cvContainer) {
    return;
  } else {
    cvModal.style.display = "none";
  }
});
