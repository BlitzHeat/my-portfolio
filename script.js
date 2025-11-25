// theme toggle
const themeToggle = document.getElementById("themeToggle");
const currentTheme = localStorage.getItem("theme");

// apply saved theme
if (currentTheme === "light") {
    document.body.classList.add("light");
    themeToggle.textContent = "🌙";
} else {
    themeToggle.textContent = "☀️";
}

// toggle theme
themeToggle.addEventListener("click", () => {
    document.body.classList.toggle("light");

    if (document.body.classList.contains("light")) {
        themeToggle.textContent = "🌙";
        localStorage.setItem("theme", "light");
    } else {
        themeToggle.textContent = "☀️";
        localStorage.setItem("theme", "dark");
    }
});
