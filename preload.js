window.onload = () => {
  // set the theme from localStorage
  const theme = localStorage.getItem("theme");
  if (theme) {
    document.body.classList.add(`${theme}-mode`);
  }
  const themeToggle = document.getElementById("themeToggle");
  const body = document.body;

  themeToggle.addEventListener("click", () => {
    body.classList.toggle("light-mode");
    // toggle localStorage
    if (body.classList.contains("light-mode")) {
      localStorage.setItem("theme", "light");
    } else {
      localStorage.setItem("theme", "dark");
    }
  });
};
