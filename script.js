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

  const projectName = document.createElement("h2");
  projectName.textContent = project.name;
  projectCard.appendChild(projectName);

  const productDescription = document.createElement("p");
  productDescription.textContent = project.description;
  projectCard.appendChild(productDescription);

  const projectLink = document.createElement("a");
  projectLink.textContent = "Voir le projet";
  projectLink.href = `https://joseph0105.github.io/${project.name}/`;
  projectCard.appendChild(projectLink);

  projectsDisplay.appendChild(projectCard);
}
