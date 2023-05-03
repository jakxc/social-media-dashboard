const radioButtons = document.querySelectorAll('.toggle__wrapper input');
const darkButton = document.querySelector('#dark');
const lightButton = document.querySelector('#light');
const bodyEl = document.querySelector('body');

const colorModeFromLocalStorage = () => {
    return localStorage.getItem('colorMode');
};
  
const colorModeFromPreferences = () => {
    return window.matchMedia('(prefers-color-scheme: dark)').matches 
                ? 'dark'
                : 'light' // If preference is set or does not match anything (light is default)
};

const setMode = (mode) => {
    localStorage.setItem('colorMode', mode);
    bodyEl.classList = mode;
    
    if (mode === 'dark') {
        darkButton.clicked()
    } else {
        lightButton.clicked();
    }
}

const toggle = (e) => {
    if (darkButton.checked) {
        setMode('dark');
    } else {
        setMode('light');
    }
}

// when the prefers-color-scheme changes, this event will be emitted
// event reflects the media query, if it matches, the new color is dark, else it is light
window.matchMedia('(prefers-color-scheme: dark)')
      .addEventListener('change', (event) => {
        event.matches ? darkButton.click() : lightButton.click();
});

for (let i=0; i < radioButtons.length; i++) {
    radioButtons[i].addEventListener('click', toggle)
}

setMode(colorModeFromLocalStorage() || colorModeFromPreferences());