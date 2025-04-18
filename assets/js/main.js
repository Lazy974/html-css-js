// Variables, conditions, boucles, des appels réseaux, fonctions/méthodes, opérateurs conditionnels (&&, ||)
console.log("Salut Antoine !");
const body = document.querySelector("body");
const buttonDarkMode = document.getElementById("btn-dark-mode");
const buttonOffice = document.getElementById("btn-section-office");

const sectionBiography = document.querySelector("div.main__section__biography");
const sectionOffice = document.querySelector("div.main__section__office");

// console.log(body.classList.value);
console.log(sectionBiography.className);

const darkMode = () => {
  if (body.classList.value === "body theme-dark") {
    body.classList.remove("theme-dark");
    body.classList.add("theme-white");
  } else if (body.classList.value === "body theme-white") {
    body.classList.remove("theme-white");
    body.classList.add("theme-dark");
  }
};

const showOffice = () => {
  if (sectionBiography.className.includes("hidden")) {
    // Créer la section Office en JavaScript puis l'afficher
    // createElement();
    // innerHTML = "";
    // appendChild();
  } else {
    sectionBiography.classList.add("hidden");
    sectionOffice.classList.remove("hidden");
  }
};

buttonDarkMode.addEventListener("click", () => darkMode());
buttonOffice.addEventListener("click", () => showOffice());
