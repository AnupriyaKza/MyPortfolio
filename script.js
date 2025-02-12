document.addEventListener("DOMContentLoaded", function () {
    const themeToggle = document.getElementById("theme-toggle");
    const body = document.body;

    // Dark mode toggle
    themeToggle.addEventListener("click", function () {
        body.classList.toggle("dark-mode");
        if (body.classList.contains("dark-mode")) {
            themeToggle.textContent = "☀️ Light Mode";
        } else {
            themeToggle.textContent = "🌙 Dark Mode";
        }
    });

    // Typing animation effect
    const text = "Anupriya Gupta | Aspiring Software Engineer | Web Development";
    let index = 0;

    function typeEffect() {
        document.getElementById("typing").textContent = text.substring(0, index);
        index++;
        if (index > text.length) {
            index = 0;
        }
        setTimeout(typeEffect, 200);
    }

    typeEffect();
});
