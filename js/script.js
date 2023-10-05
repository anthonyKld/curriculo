document.addEventListener('DOMContentLoaded', function() {
    const themeToggle = document.getElementById('chk');
    const themeStyle = document.getElementById('theme-style');

    themeToggle.addEventListener('change', function() {
        if (themeToggle.checked) {
            themeStyle.href = 'css/tema-dia.css';
        } else {
            themeStyle.href = 'css/style.css';
        }
    });
});