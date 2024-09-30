// Seleccionamos el interruptor
const darkModeToggle = document.getElementById('darkModeToggle');

// Verificamos si ya había un tema guardado previamente en localStorage
if (localStorage.getItem('dark-mode') === 'true') {
    document.body.classList.add('dark-mode');
    darkModeToggle.checked = true;
}

// Evento para escuchar cambios en el interruptor
darkModeToggle.addEventListener('change', function() {
    if (this.checked) {
        // Activar el modo oscuro
        document.body.classList.add('dark-mode');
        localStorage.setItem('dark-mode', 'true');
    } else {
        // Desactivar el modo oscuro
        document.body.classList.remove('dark-mode');
        localStorage.setItem('dark-mode', 'false');
    }
});
