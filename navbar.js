document.addEventListener("DOMContentLoaded", () => {
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
});
