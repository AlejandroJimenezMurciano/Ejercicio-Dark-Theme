const body = document.body;
const switchThemeElement = document.getElementById('switch-theme')

switchThemeElement.addEventListener('click', () => {
    body.classList.toggle('dark')
})
