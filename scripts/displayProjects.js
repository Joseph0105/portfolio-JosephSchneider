function displayProjects(project) {
  const projectsDisplay = document.querySelector(".projects-display");

  const projectCard = document.createElement("div");
  projectCard.classList.add("projectCard");
  console.log(projectCard);
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
