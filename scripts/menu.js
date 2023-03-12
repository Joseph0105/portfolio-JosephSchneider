const clickMenu = document.querySelector(".bar-icon");
const clickArrow = document.querySelector(".fa-arrow-up");
const menu = document.querySelector(".menu");

clickMenu.addEventListener("click", function (e) {
  e.preventDefault();
  menu.classList.add("open");
});

document.addEventListener("click", function (e) {
  const clickOutsideMenu =
    !menu.contains(e.target) && !clickMenu.contains(e.target);
  if (clickOutsideMenu) {
    menu.classList.remove("open");
  }
});

clickArrow.addEventListener("click", function (e) {
  menu.classList.remove("open");
});
