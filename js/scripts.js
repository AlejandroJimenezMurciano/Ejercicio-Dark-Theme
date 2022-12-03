const body = document.body;
const switchElement = document.getElementById('switch-theme')
const logoElement = document.getElementById('logo')
const switchThemeIcon = document.getElementById('switch-theme-icon')
const switchThemeText = document.getElementById('switch-theme-text')

const rootStyles = document.documentElement.style
const changeColorElement = document.getElementById('change-color')


// Evento para cambiar tema
switchElement.addEventListener('click', () => {
    body.classList.toggle('dark');
    if (body.classList.contains('dark')) {
        logoElement.src = 'assets/images/logo-dark.svg';
        switchThemeIcon.src = 'assets/images/icon-moon.svg';
        switchThemeText.textContent = 'Dark mode';
    } else {
        logoElement.src = 'assets/images/logo-light.svg';
        switchThemeIcon.src = 'assets/images/icon-sun.svg';
        switchThemeText.textContent = 'Light mode';
    }
})

// Evento para cambiar color primario
changeColorElement.addEventListener('click', (event) => {
    if (event.target.classList.contains('color')) {
        rootStyles.setProperty('--primary-color', event.target.dataset.color)
    }
})

