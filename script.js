
document.querySelectorAll('a').forEach(anchor => {
  anchor.addEventListener('click', (e) => {
    e.preventDefault(); 
    const href = anchor.getAttribute('href');
    document.body.classList.add('fade-out');
    setTimeout(() => {
      window.location.href = href; 
    }, 300); 
  });
});

const navLinks = document.querySelectorAll('.nav-link');
const currentPage = window.location.pathname.split('/').pop().toLowerCase();
navLinks.forEach((link) => {
  const linkPage = link.getAttribute('href').split('/').pop().toLowerCase();

  if (linkPage === currentPage) {
    link.classList.add('active');
  } else {
    link.classList.remove('active');
  }
});

const moonElement = document.querySelector(".moon");
const marsElement = document.querySelector(".mars");
const europaElement = document.querySelector(".europa");
const titanElement = document.querySelector(".titan");
const moonLink = document.querySelector(".moon-link");
const marsLink = document.querySelector(".mars-link");
const europaLink = document.querySelector(".europa-link");
const titanLink = document.querySelector(".titan-link");
const destinationImage = document.querySelector(".destination-image");

if (moonElement && marsElement && europaElement && titanElement) {
  moonElement.classList.add("add-fade-in");


  function showStep(step) {
    moonElement.style.display = "none";
    marsElement.style.display = "none";
    europaElement.style.display = "none";
    titanElement.style.display = "none";

    moonLink.classList.remove("active");
    marsLink.classList.remove("active");
    europaLink.classList.remove("active");
    titanLink.classList.remove("active");

    if (step === 1) {
      moonElement.style.display = "flex";
      destinationImage.innerHTML = `<img src="./assets/destination/image-moon.png" class="destination-image-url">`;
      moonLink.classList.add("active");
      moonElement.classList.add("add-fade-in");
    } else if (step === 2) {
      marsElement.style.display = "flex";
      destinationImage.innerHTML = `<img src="./assets/destination/image-mars.png" class="destination-image-url">`;
      marsLink.classList.add("active");
      marsElement.classList.add("add-fade-in");
    } else if (step === 3) {
      europaElement.style.display = "flex";
      destinationImage.innerHTML = `<img src="./assets/destination/image-europa.png" class="destination-image-url">`;
      europaLink.classList.add("active");
      europaElement.classList.add("add-fade-in");
    } else if (step === 4) {
      titanElement.style.display = "flex";
      destinationImage.innerHTML = `<img src="./assets/destination/image-titan.png" class="destination-image-url">`;
      titanLink.classList.add("active");
      titanElement.classList.add("add-fade-in");
    }
  }

  moonLink?.addEventListener("click", () => showStep(1));
  marsLink?.addEventListener("click", () => showStep(2));
  europaLink?.addEventListener("click", () => showStep(3));
  titanLink?.addEventListener("click", () => showStep(4));
}

const commanderElement = document.querySelector(".commander");
const pilotElement = document.querySelector(".pilot");
const engineerElement = document.querySelector(".engineer");
const specialistElement = document.querySelector(".specialist");
const commanderLink = document.querySelector(".commander-link");
const pilotLink = document.querySelector(".pilot-link");
const engineerLink = document.querySelector(".engineer-link");
const specialistLink = document.querySelector(".specialist-link");
const memberImage = document.querySelector(".member-image");

if (commanderElement && pilotElement && engineerElement && specialistElement) {
  commanderElement.classList.add("add-slide-up");

  function showStep2(step) {
    commanderElement.style.display = "none";
    pilotElement.style.display = "none";
    specialistElement.style.display = "none";
    engineerElement.style.display = "none";

    commanderLink.classList.remove("selected");
    pilotLink.classList.remove("selected");
    specialistLink.classList.remove("selected");
    engineerLink.classList.remove("selected");

    memberImage.innerHTML = ''; 

    const img = document.createElement('img');
    img.classList.add('crew-image-url');

    if (step === 1) {
      commanderElement.style.display = "flex";
      img.src = "./assets/crew/image-douglas-hurley.png";
      commanderLink.classList.add("selected");
      commanderElement.classList.add("add-slide-up");
    } else if (step === 2) {
      pilotElement.style.display = "flex";
      img.src = "./assets/crew/image-victor-glover.png";
      pilotLink.classList.add("selected");
      pilotElement.classList.add("add-slide-up");
    } else if (step === 3) {
      specialistElement.style.display = "flex";
      img.src = "./assets/crew/image-mark-shuttleworth.png";
      specialistLink.classList.add("selected");
      specialistElement.classList.add("add-slide-up");
    } else if (step === 4) {
      engineerElement.style.display = "flex";
      img.src = "./assets/crew/image-anousheh-ansari.png";
      engineerLink.classList.add("selected");
      engineerElement.classList.add("add-slide-up");
    }

    memberImage.appendChild(img);
    setTimeout(() => img.classList.add('visible'), 50); 
  }


  commanderLink?.addEventListener("click", () => showStep2(1));
  pilotLink?.addEventListener("click", () => showStep2(2));
  specialistLink?.addEventListener("click", () => showStep2(3));
  engineerLink?.addEventListener("click", () => showStep2(4));
}

document.addEventListener("DOMContentLoaded", () => {
  const defaultImage = document.querySelector('.crew-image-url');
  if (defaultImage) {
    defaultImage.classList.add('visible');
  }
});

const vehicleElement = document.querySelector(".vehicle");
const capsuleElement = document.querySelector(".capsule");
const spaceportElement = document.querySelector(".spaceport");
const vehicleLink = document.querySelector(".vehicle-link");
const capsuleLink = document.querySelector(".capsule-link");
const spaceportLink = document.querySelector(".spaceport-link");
const technologyImage = document.querySelector(".technology-image");

function getImageSource(basePath, smallImage, largeImage) {
  return window.innerWidth <= 1000 ? `${basePath}${smallImage}` : `${basePath}${largeImage}`;
}

if (vehicleElement && capsuleElement && spaceportElement) {
  vehicleElement.classList.add("add-fade-in-out");

  if(window.innerWidth <= 1000){
    technologyImage.innerHTML=`<img src="./assets/technology/image-launch-vehicle-landscape.jpg" class="technology-image-url">`
  }
  function showStep3(step) {
    vehicleElement.style.display = "none";
    capsuleElement.style.display = "none";
    spaceportElement.style.display = "none";

    vehicleLink.classList.remove("using");
    capsuleLink.classList.remove("using");
    spaceportLink.classList.remove("using");

    technologyImage.innerHTML = '';

    const img = document.createElement("img");
    img.classList.add("technology-image-url");

    const basePath = "./assets/technology/";

    if (step === 1) {
      vehicleElement.style.display = "flex";
      img.src = getImageSource(basePath, "image-launch-vehicle-landscape.jpg", "image-launch-vehicle-portrait.jpg");
      vehicleLink.classList.add("using");
      vehicleElement.classList.add("add-fade-in-out");
    } else if (step === 2) {
      capsuleElement.style.display = "flex";
      img.src = getImageSource(basePath, "image-space-capsule-landscape.jpg", "image-space-capsule-portrait.jpg");
      capsuleLink.classList.add("using");
      capsuleElement.classList.add("add-fade-in-out");
    } else if (step === 3) {
      spaceportElement.style.display = "flex";
      img.src = getImageSource(basePath, "image-spaceport-landscape.jpg", "image-spaceport-portrait.jpg");
      spaceportLink.classList.add("using");
      spaceportElement.classList.add("add-fade-in-out");
    }

    technologyImage.appendChild(img);
    setTimeout(() => img.classList.add("shown"), 50); 
  }

  vehicleLink?.addEventListener("click", () => showStep3(1));
  capsuleLink?.addEventListener("click", () => showStep3(2));
  spaceportLink?.addEventListener("click", () => showStep3(3));
}

document.addEventListener("DOMContentLoaded", () => {
  const defaultImage2 = document.querySelector(".technology-image-url");
  if (defaultImage2) {
    defaultImage2.classList.add("shown");
  }
});

const closeButton = document.querySelector(".close-button");
const navChangeIcon = document.querySelector(".nav-change");
const navItems = document.querySelector(".nav-items");
const greyFilter = document.querySelector(".grey");

navChangeIcon.addEventListener("click", () => {
  if (navItems.classList.contains("slide-in")) {
    navItems.classList.remove("slide-in");
    navItems.classList.add("slide-out");
    greyFilter.style.display = "none";
  } else {
    navItems.style.display = "flex";
    greyFilter.style.display = "flex";
    navItems.classList.remove("slide-out");
    navItems.classList.add("slide-in");
  }
});

closeButton.addEventListener("click", () => {
  navItems.classList.remove("slide-in");
  navItems.classList.add("slide-out");
  greyFilter.style.display = "none";
});

document.addEventListener("click", (e) => {
  if (
    e.target !== closeButton &&
    e.target !== navItems &&
    e.target !== navChangeIcon &&
    navItems.classList.contains("slide-in")
  ) {
    navItems.classList.remove("slide-in");
    navItems.classList.add("slide-out");
    greyFilter.style.display = "none";
  }
});

navItems.addEventListener("animationend", (e) => {
  if (e.animationName === "slideOut") {
    navItems.style.display = "none";
  }
});

