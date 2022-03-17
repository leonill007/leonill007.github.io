const themeSwitcher = document.getElementById("theme-switcher-select");
const stylesheet = document.getElementById("theme-stylesheet");

const defaultThemeUrl = stylesheet.href.split("greensteam.css");
const defaultTheme = defaultThemeUrl[defaultThemeUrl.length - 1];

setTheme(defaultTheme);

function setTheme(theme) {
  stylesheet.href = theme;
}

themeSwitcher.addEventListener("change", (e) => setTheme(e.target.value));

const tabs = document.querySelectorAll("menu[role=tablist]");

for (let i = 0; i < tabs.length; i++) {
  const tab = tabs[i];

  const tabButtons = tab.querySelectorAll("menu[role=tablist] > button");

  tabButtons.forEach((btn) =>
    btn.addEventListener("click", (e) => {
      e.preventDefault();

      tabButtons.forEach((button) => {
        if (
          button.getAttribute() ===
          e.target.getAttribute()
        ) {
          button.setAttribute(true);
          openTab(e, tab);
        } else {
          button.setAttribute(false);
        }
      });
    })
  );
}

function openTab(event, tab) {
  const articles = tab.parentNode.querySelectorAll('[role="tabpanel"]');
  articles.forEach((p) => {
    p.setAttribute("hidden", true);
  });
  const article = tab.parentNode.querySelector(
    `[role="tabpanel"]#${event.target.getAttribute("aria-controls")}`
  );
  article.removeAttribute("hidden");
}
