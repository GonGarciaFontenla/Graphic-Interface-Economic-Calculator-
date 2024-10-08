// Manejar los clics en otros enlaces del menú
document.querySelectorAll('nav ul li a').forEach(link => {
    // Evitar agregar el manejador de la alerta al enlace de Fisher
    if (link.id !== 'menu-fisher') {
        link.addEventListener('click', function(event) {
            event.preventDefault();
            alert('Esta funcionalidad se implementará próximamente.');
        });
    }
});

// Mostrar el formulario de Fisher cuando se hace clic en el enlace
document.getElementById('menu-fisher').addEventListener('click', function(event) {
    event.preventDefault();
    // Ocultar todas las secciones primero
    document.querySelectorAll('section').forEach(section => section.classList.add('hidden'));
    // Mostrar la sección de Fisher
    document.getElementById('fisher-section').classList.remove('hidden');
    // Ocultar el menú de navegación
    document.querySelector('nav').classList.add('hidden');
    // Opcional: Puedes enfocarte en el primer input si deseas
    document.getElementById('nominal-rate').focus();
});

// Calcular la tasa de interés real con la ecuación de Fisher
document.getElementById('fisher-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const nominalRate = parseFloat(document.getElementById('nominal-rate').value);
    const inflationRate = parseFloat(document.getElementById('inflation-rate').value);

    // Fórmula de Fisher: (1 + r) = (1 + i) / (1 + π)
    const realRate = ((1 + nominalRate / 100) / (1 + inflationRate / 100) - 1) * 100;

    document.getElementById('real-rate').value = realRate.toFixed(2);
});
