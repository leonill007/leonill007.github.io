window.onload = function() {
  // Set to default theme on load
  let currentTheme = "default";

  const themeSelector = document.getElementById("theme-selector");

  // Add change event listener
  themeSelector.addEventListener("change", function(e) {
    // Get the user's choice from the event object `e`.
    const newTheme = e.currentTarget.value;

    // Set the theme
    setTheme(currentTheme, newTheme);
  });

  function setTheme(oldTheme, newTheme) {
    const body = document.getElementsByTagName("body")[0];

    // Remove old theme scope from body's class list
    body.classList.remove(oldTheme);

    // Add new theme scope to body's class list
    body.classList.add(newTheme);

    // Set it as current theme
    currentTheme = newTheme;
  }
};