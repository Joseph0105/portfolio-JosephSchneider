const clickOverlay = document.querySelector(".projectCard");
const overlay = document.querySelector(".overlay");
const contentOverlay = document.querySelector(".overlay-content");
const overlayLoader = document.querySelector(".overlay-loader");

const overlayImg = document.querySelector(".overlay-img");

// Afficher l'overlay
if (clickOverlay) {
  clickOverlay.addEventListener("click", function (e) {
    e.preventDefault();
    overlay.style.display = "flex";
  });
}

// Fermer l'overlay
const closeOverlay = document.querySelector(".overlay-close");

overlay.addEventListener("click", function (e) {
  e.preventDefault();
  if (contentOverlay.contains(e.target)) {
    return;
  } else {
    overlayLoader.style.display = "flex";
    overlay.style.display = "none";
    overlayProjectName.textContent = "";
    overlayProjectLink.href = "";
    overlayProjectDescription.textContent = "";
    overlayProjectImg.src = "";
    overlayProjectH2.textContent = "";
    overlayProjectItems.innerHTML = "";
  }
});

closeOverlay.addEventListener("click", function (e) {
  e.preventDefault();
  overlayLoader.style.display = "flex";
  overlayProjectName.textContent = "";
  overlayProjectLink.href = "";
  overlayProjectDescription.textContent = "";

  overlayProjectImg.src = "";
  overlayProjectH2.textContent = "";
  overlayProjectItems.innerHTML = "";
});

// Hydrater dynamiquement l'overlay
const overlayProjectName = document.querySelector(".overlay-h1");
const overlayProjectImg = document.querySelector(".overlay-img");
const overlayProjectLink = document.querySelector(".overlay-link");
const overlayProjectDescription = document.querySelector(
  ".overlay-description"
);
const overlayProjectH2 = document.querySelector(".overlay-h2");
const overlayProjectItems = document.querySelector(".overlay-items");

function displayOverlay(project) {
  overlayProjectName.textContent = project.name;
  overlayProjectLink.href = `https://joseph0105.github.io/${project.name}/`;
  overlayProjectDescription.textContent = project.description;

  overlayProjectImg.src = `https://raw.githubusercontent.com/Joseph0105/${project.name}/main/img/preview.svg`;

  // Affichage des langages
  fetch(`https://api.github.com/repos/Joseph0105/${project.name}/languages`)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      overlayProjectItems.innerHTML = "";
      for (const key in data) {
        const overlayItemsImg = document.createElement("img");
        overlayItemsImg.src = `https://raw.githubusercontent.com/Joseph0105/portfolio-JosephSchneider/main/Images/langages/${key}.svg`;
        overlayProjectImg.onload = function () {
          overlayLoader.style.display = "none";
        };
        overlayProjectItems.appendChild(overlayItemsImg);
        contentOverlay.addEventListener("load", function () {
          overlayLoader.style.display = "none";
        });
      }
    })
    .catch((error) => {
      console.error(error);
    });

  overlayProjectLink.addEventListener("click", function (e) {
    e.preventDefault();
    window.open(overlayProjectLink.href, "_blank");
  });
}

if (clickOverlay) {
  clickOverlay.addEventListener("click", function (e) {
    e.preventDefault();
    overlay.style.display = "flex";
    const projectName = e.target.dataset.name;

    fetch(`https://api.github.com/repos/Joseph0105/${projectName}`)
      .then((response) => response.json())
      .then((data) => {
        displayOverlay(data);
      });
  });
}
