// Main application script - handles navbar, footer, and dark mode

document.addEventListener("DOMContentLoaded", () => {
    // ===== NAVBAR INJECTION =====
    const navbar = `
        <div class="container nav-container">
            <div class="nav-links">
                <a href="/isinthelivingroom">Living Room</a>
                <a href="/isaboutme">About</a>
                <a href="/posts">Posts</a>
            </div>
            <button id="dark-mode-toggle">Dark Mode 🌙</button>
        </div>
    `;
    document.body.insertAdjacentHTML("afterbegin", navbar);

    // ===== FOOTER INJECTION =====
    const footer = `
        <footer class="footer">
            Built by Alex in 2025 ☕
        </footer>
    `;
    document.body.insertAdjacentHTML("beforeend", footer);

    // ===== DARK MODE INITIALIZATION =====
    initializeDarkMode();

    // ===== DARK MODE TOGGLE EVENT =====
    const toggleButton = document.getElementById("dark-mode-toggle");
    if (toggleButton) {
        toggleButton.addEventListener("click", toggleDarkMode);
    }
});

// ===== DARK MODE FUNCTIONS =====

// Toggle dark mode and update localStorage
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

// Initialize dark mode based on saved preference
function initializeDarkMode() {
    if (localStorage.getItem("darkMode") === "enabled") {
        document.body.classList.add("dark-mode");
        document.getElementById("dark-mode-toggle").textContent = "Light Mode ☀️";
    }
}
