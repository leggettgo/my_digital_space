// Function to toggle dark mode and update localStorage
function toggleDarkMode() {
    document.body.classList.toggle("dark-mode");

    if (document.body.classList.contains("dark-mode")) {
        localStorage.setItem("darkMode", "enabled");
        document.getElementById("dark-mode-toggle").textContent = "Light Mode ☀️";
    } else {
        localStorage.setItem("darkMode", "disabled");
        document.getElementById("dark-mode-toggle").textContent = "Dark Mode 🌙";
    }
}

// Function to initialize dark mode based on saved preference
function initializeDarkMode() {
    if (localStorage.getItem("darkMode") === "enabled") {
        document.body.classList.add("dark-mode");
        document.getElementById("dark-mode-toggle").textContent = "Light Mode ☀️";
    }
}

// Attach event listener only if the button exists
document.addEventListener("DOMContentLoaded", () => {
    initializeDarkMode();

    const toggleButton = document.getElementById("dark-mode-toggle");
    if (toggleButton) {
        toggleButton.addEventListener("click", toggleDarkMode);
    }
});
