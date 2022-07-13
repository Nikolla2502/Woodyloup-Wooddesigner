// Darkmode
let darkMode = false;

function changeDarkMode() {
  if (darkMode) {
    darkMode = false;
    document.documentElement.style.setProperty("--dark", "#000");
    document.documentElement.style.setProperty("--light", "#FFF");
    document.documentElement.style.setProperty("--light_10", "#EEE");
    document.documentElement.style.setProperty("--dark_10", "#333");
    document.getElementById("toggle").innerHTML = "Dark";
  } else {
    darkMode = true;
    document.documentElement.style.setProperty("--dark", "#FFF");
    document.documentElement.style.setProperty("--light", "#000");
    document.documentElement.style.setProperty("--light_10", "#333");
    document.documentElement.style.setProperty("--dark_10", "#EEE");
    document.getElementById("toggle").innerHTML = "Light";
  }
}

// Affichage nav mobile
function menuMobile() {
  const btn = document.querySelector(".burger");
  const header = document.querySelector("header");
  const links = document.querySelectorAll(".navbar a");

  btn.addEventListener("click", () => {
    header.classList.toggle("show-nav");
  });
  links.forEach((link) => {
    link.addEventListener("click", () => {
      header.classList.remove("show-nav");
    });
  });
}
menuMobile();

/* creation filtre projets */

function tabsFilters() {
  const tabs = document.querySelectorAll(".portfolio-filters a");
  const projects = document.querySelectorAll(".portfolio .card");

  const resetActiveLinks = () => {
    tabs.forEach((elem) => {
      elem.classList.remove("active");
    });
  };

  const showProjects = (elem) => {
    // console.log(elem);
    projects.forEach((project) => {
      let filter = project.getAttribute("data-category");
      if (elem === "allProject") {
        project.parentNode.classList.remove("hide");
        return; // le return arrete la fonction
      }

      // methode classique
      if (filter !== elem) {
        project.parentNode.classList.add("hide");
      } else {
        project.parentNode.classList.remove("hide");
      }

      // methode operation ternaire
      // filter !== elem ? project.parentNode.classList.add('hide') : project.parentNode.classList.remove('hide');
    });
  };

  tabs.forEach((elem) => {
    elem.addEventListener("click", (event) => {
      event.preventDefault();
      let filter = elem.getAttribute("data-filter");
      showProjects(filter);
      resetActiveLinks("click");
      elem.classList.add("active");
    });
  });
}

tabsFilters();

// Modale carroussel
const modalContainer = document.querySelector(".modal-container");
const modalTriggers = document.querySelectorAll(".modal-trigger");

modalTriggers.forEach((trigger) =>
  trigger.addEventListener("click", toggleModal)
);

function toggleModal() {
  modalContainer.classList.toggle("active");
}
