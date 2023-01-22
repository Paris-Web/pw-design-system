const THEME_STORAGE_KEY = 'dark_mode_enabled'

const toggleTheme = (calledAtInit = false) => {
  document.body.classList.toggle('dark-theme');

  const newValue = document.body.classList.contains('dark-theme');

  if (newValue) {
    document.querySelector("#hub-logo").src = "/images/logo-pw2021-dark.svg"
  } else {
    document.querySelector("#hub-logo").src = "/images/logo-pw2021.svg"
  }

  localStorage.setItem(THEME_STORAGE_KEY, newValue);

  const labelElement = document.querySelector('#dark-mode-switch + label span.text span');
  labelElement.innerText = newValue ? 'activé' : 'désactivé';

  if (calledAtInit) {
    const toggleElement = document.querySelector('#dark-mode-switch');
    toggleElement.checked = newValue;
  }
}

export const darkModeSwitchHandler = () => {
  const storageValue = localStorage.getItem(THEME_STORAGE_KEY);
  const toggleElement = document.querySelector('#dark-mode-switch');

  toggleElement.addEventListener('change', toggleTheme);

  // if the site preference has already been set as true
  if (storageValue === "true") {
    toggleTheme(true);
  }
  // if there's no site preference set
  else if (storageValue === null) {
    // if the browser preference has been set
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      toggleTheme(true);
    }
  }
}
