// the javascript code was written by genAI


function loadHTML(elementId, filePath) {
    fetch(filePath)
        .then((response) => {
            if (!response.ok) {
                throw new Error("Failed to load " + filePath);
            }
            return response.text();
        })
        .then((html) => {
            document.getElementById(elementId).innerHTML = html;

            // Check if the loaded file is the navbar and then highlight the active page
            if (filePath === "navbar.html") {
                highlightActivePage();
            }
        })
        .catch((error) => {
            console.error(error);
        });
}

document.addEventListener("DOMContentLoaded", () => {
    loadHTML("navbar-placeholder", "navbar.html");
    loadHTML("footer-placeholder", "footer.html");
});

// Highlight the active page in the navbar
function highlightActivePage() {
    const currentPage = window.location.pathname.split("/").pop(); // Get the current page's filename
    const navLinks = document.querySelectorAll(".nav-link");

    navLinks.forEach((link) => {
        if (link.getAttribute("href") === currentPage) {
            link.classList.add("active");
        }
    });
}


