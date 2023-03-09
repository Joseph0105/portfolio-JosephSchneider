// !!!!!! FONCTIONS POUR LE PORTFOLIO !!!!!!!!!!!!!

(async function () {
  const projects = await getProjects();
  console.log(projects);
  for (project of projects) {
    displayProjects(project);
  }
})();

function getProjects() {
  return fetch(`https://api.github.com/users/Joseph0105/repos?per_page=100`)
    .then((response) => response.json())
    .then((data) => {
      for (let i = 0; i < data.length; i++) {
        if (data[i].id === 610891439) {
          data.splice(i, 1);
        }
      }

      const repositories = data;
      const repositoriesDisplay = document.querySelector(".projects-display");

      return repositories;
    })
    .catch((error) => {
      console.error(error);
    });
}

function displayProjects(project) {
  const projectsDisplay = document.querySelector(".projects-display");

  const projectCard = document.createElement("div");
  projectCard.classList.add("projectCard");

  const projectLink = document.createElement("a");
  projectLink.classList.add("projectCard-link");

  const clickHere = document.createElement("div");
  clickHere.classList.add("click-here");
  clickHere.textContent = "Voir le projet";

  const projectImage = document.createElement("img");
  projectImage.classList.add("project-img");
  projectImage.src = `https://raw.githubusercontent.com/Joseph0105/${project.name}/main/img/miniature.png`;
  projectLink.appendChild(projectImage);

  projectCard.appendChild(clickHere);
  projectCard.appendChild(projectLink);
  projectCard.appendChild(projectLink);
  projectsDisplay.appendChild(projectCard);

  projectCard.addEventListener("click", function (e) {
    e.preventDefault();
    overlay.style.display = "block";
    displayOverlay(project);
  });
}

// !!!!!!! CV !!!!!!!

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

// !!!!!!!!!!! OVERLAY !!!!!!!!!!!!!

const clickOverlay = document.querySelector(".projectCard");
const overlay = document.querySelector(".overlay");
const contentOverlay = document.querySelector(".overlay-content");

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
    overlay.style.display = "none";
  }
});

closeOverlay.addEventListener("click", function (e) {
  e.preventDefault();
  overlay.style.display = "none";
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
        overlayProjectItems.appendChild(overlayItemsImg);
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
