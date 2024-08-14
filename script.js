// script.js


// Load the theme from local storage on page load
window.addEventListener('load', function () {
    const theme = localStorage.getItem('theme') || 'light';
    if (theme === 'dark') {
        document.body.classList.add('dark-mode');
    }
});

document.getElementById('toggle-mode').addEventListener('change', function() {
    document.body.classList.toggle('light-mode', this.checked);
});
