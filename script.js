// !!!!!! FONCTIONS POUR LE PORTFOLIO !!!!!!!!!!!!!

window.onload = function () {
  // Supprimer le loader
  document.querySelector(".section-loader").style.display = "none";
};

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
      Authorization: "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",
    },
  })
    .then((response) => response.json())
    .then((data) => {
      for (let i = 0; i < data.length; i++) {
        if (data[i].id === 610891439) {
          data.splice(i, 1);
        }
      }
      data.sort(function (a, b) {
        var dateA = new Date(a.created_at);
        var dateB = new Date(b.created_at);
        return dateB - dateA;
      });

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
