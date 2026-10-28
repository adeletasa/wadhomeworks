/* Homework, task 7: Profile dropdown menu */

// Get the profile button and dropdown menu
const profileButton = document.getElementById("profileButton");
const profileMenu = document.getElementById("profileMenu");

// Open or close the dropdown when the profile picture is clicked
profileButton.addEventListener("click", function () {
    profileMenu.classList.toggle("show");

    // Update the button's expanded state
    const isOpen = profileMenu.classList.contains("show");
    profileButton.setAttribute("aria-expanded", isOpen);
});
