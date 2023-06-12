var darkMode = false;

function toggleDarkMode() {
  darkMode = !darkMode;
  
  if (darkMode) {
    document.body.classList.add('dark-mode');
  } else {
    document.body.classList.remove('dark-mode');
  }
}

var darkModeBtn = document.getElementById('dark-mode-btn');
darkModeBtn.addEventListener('click', toggleDarkMode);
