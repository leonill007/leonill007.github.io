  // Get the theme switcher buttons and theme link element
  const greyThemeButton = document.getElementById('greysteam-button');
  const greenThemeButton = document.getElementById('greensteam-button');
  const themeLink = document.getElementById('theme-link');

  // Set up event listeners for the theme switcher buttons
  greyThemeButton.addEventListener('click', () => {
    // Set the href of the theme link to the grey theme CSS file
    themeLink.href = 'assets/styles/greysteam/greysteam.css';

    // Save the selected theme in local storage
    localStorage.setItem('theme', 'grey');
  });
  greenThemeButton.addEventListener('click', () => {
    // Set the href of the theme link to the green theme CSS file
    themeLink.href = 'assets/styles/greensteam/greensteam.css';

    // Save the selected theme in local storage
    localStorage.setItem('theme', 'green');
  });

  // Check local storage for a saved theme and set the theme accordingly
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme === 'grey') {
    greyThemeButton.click();
  } else if (savedTheme === 'green') {
    greenThemeButton.click();
  }