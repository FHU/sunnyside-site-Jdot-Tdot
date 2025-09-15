// step 1 - get the things (buttons)

const hamburgerButton = document.getElementById("hamburger-button");
const mobileMenu = document.getElementById("mobile-menu");

// use the event listener

hamburgerButton.addEventListener("click", (event) => {
    event.preventDefault();
    console.log("you clicked the button");
    mobileMenu.classList.toggle("hidden");
});