// !!!!!! FONCTIONS POUR LE PORTFOLIO !!!!!!!!!!!!!

(async function () {
  const projects = await getProjects();
  console.log(projects);
  for (project of projects) {
    displayProjects(project);
  }
})();

function getProjects() {
  return fetch(`https://api.github.com/users/Joseph0105/repos?per_page=100`, {
    headers: {
      Authorization: "Bearer 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",
    },
  })
    .then((response) => response.json())
    .then((data) => {
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
  projectLink.href = `https://joseph0105.github.io/${project.name}/`;

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
