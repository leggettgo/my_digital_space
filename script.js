document.addEventListener("DOMContentLoaded", () => {
    const toggleButton = document.getElementById("dark-mode-toggle");
    const body = document.body;

    if (!toggleButton) return; // Prevents errors if button is missing

    // Load dark mode preference from localStorage
    if (localStorage.getItem("darkMode") === "enabled") {
        body.classList.add("dark-mode");
        toggleButton.textContent = "Light Mode ☀️";
    }

    toggleButton.addEventListener("click", () => {
        body.classList.toggle("dark-mode");

        if (body.classList.contains("dark-mode")) {
            localStorage.setItem("darkMode", "enabled");
            toggleButton.textContent = "Light Mode ☀️";
        } else {
            localStorage.setItem("darkMode", "disabled");
            toggleButton.textContent = "Dark Mode 🌙";
        }
    });
});
