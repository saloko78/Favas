// script.js

// Smooth scroll from Hero button → About section
function scrollToAbout() {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  }
  
  // Dark mode toggle
  const toggleBtn = document.getElementById("darkToggle");
  toggleBtn?.addEventListener("click", () => {
    document.documentElement.classList.toggle("dark");
    if (document.documentElement.classList.contains("dark")) {
      toggleBtn.textContent = "☀️ Dark Mode";
      localStorage.setItem("theme", "dark");
    } else {
      toggleBtn.textContent = "🌙 Dark Mode";
      localStorage.setItem("theme", "light");
    }
  });
  
  // Load theme from localStorage
  (function setThemeOnLoad() {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
      document.documentElement.classList.add("dark");
      if (toggleBtn) toggleBtn.textContent = "☀️ Light Mode";
    } else {
      document.documentElement.classList.remove("dark");
      if (toggleBtn) toggleBtn.textContent = "🌙 Dark Mode";
    }

    // Dark Mode Switch Animation
const toggleBtn = document.getElementById("darkToggle");
const switchCircle = document.getElementById("switchCircle");

toggleBtn?.addEventListener("click", () => {
  document.documentElement.classList.toggle("dark");

  if (document.documentElement.classList.contains("dark")) {
    // Move circle right + change bg
    toggleBtn.classList.remove("bg-gray-300");
    toggleBtn.classList.add("bg-indigo-600");
    switchCircle.classList.add("translate-x-6");
    localStorage.setItem("theme", "dark");
  } else {
    // Move circle left + reset bg
    toggleBtn.classList.remove("bg-indigo-600");
    toggleBtn.classList.add("bg-gray-300");
    switchCircle.classList.remove("translate-x-6");
    localStorage.setItem("theme", "light");
  }
});

// Load theme on refresh
(function setThemeOnLoad() {
  const savedTheme = localStorage.getItem("theme");
  if (savedTheme === "dark") {
    document.documentElement.classList.add("dark");
    toggleBtn.classList.remove("bg-gray-300");
    toggleBtn.classList.add("bg-indigo-600");
    switchCircle.classList.add("translate-x-6");
  }
})();

  })();
  