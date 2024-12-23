// JavaScript para cambiar el idioma dinámicamente

// Elementos del DOM
const botonCambiarIdioma = document.getElementById('boton-cambiar-idioma');
const contenedor = document.getElementById('contenedor');
const pie = document.getElementById('pie');

// Idiomas disponibles
const idiomas = {
    es: {
        sobreMi: "Sobre de mí",
        redesSociales: "Redes sociales",
        github: "GitHub",
        cambiarIdioma: "Cambiar idioma",
        contenido: "Hola",
        pie: "&copy; 2024 Fran. Todos los derechos reservados."
    },
    en: {
        sobreMi: "About me",
        redesSociales: "Social media",
        github: "GitHub",
        cambiarIdioma: " Change language",
        contenido: "Hello",
        pie: "&copy; 2024 Fran. All rights reserved."
    }
};

// Idioma actual
let idiomaActual = 'es';

// Crear menú de selección de idioma
const crearMenuIdiomas = () => {
    // Crear un contenedor para las opciones de idioma
    const menuIdiomas = document.createElement('div');
    menuIdiomas.id = 'menu-idiomas';
    menuIdiomas.style.position = 'absolute';
    menuIdiomas.style.backgroundColor = '#f0f0f0';
    menuIdiomas.style.border = '1px solid #ccc';
    menuIdiomas.style.padding = '10px';
    menuIdiomas.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.2)';

    // Crear opciones de idioma
    const opcionEspanol = document.createElement('div');
    opcionEspanol.textContent = 'Español';
    opcionEspanol.style.cursor = 'pointer';
    opcionEspanol.onclick = () => cambiarIdioma('es');

    const opcionIngles = document.createElement('div');
    opcionIngles.textContent = 'English';
    opcionIngles.style.cursor = 'pointer';
    opcionIngles.onclick = () => cambiarIdioma('en');

    // Agregar opciones al menú
    menuIdiomas.appendChild(opcionEspanol);
    menuIdiomas.appendChild(opcionIngles);

    // Agregar el menú al DOM
    document.body.appendChild(menuIdiomas);

    // Posicionar el menú cerca del botón
    const rect = botonCambiarIdioma.getBoundingClientRect();
    menuIdiomas.style.top = `${rect.bottom + window.scrollY}px`;
    menuIdiomas.style.left = `${rect.left + window.scrollX}px`;

    // Cerrar el menú si se hace clic fuera de él
    document.addEventListener('click', (event) => {
        if (!menuIdiomas.contains(event.target) && event.target !== botonCambiarIdioma) {
            menuIdiomas.remove();
        }
    }, { once: true });
};

// Cambiar el idioma de la web
// Cambiar el idioma de la web
const cambiarIdioma = (idioma) => {
    idiomaActual = idioma;

    // Cambiar el texto de los botones del menú
    document.getElementById('boton-sobre-mi').textContent = idiomas[idioma].sobreMi;
    document.getElementById('boton-redes-sociales').textContent = idiomas[idioma].redesSociales;
    document.getElementById('boton-github').textContent = idiomas[idioma].github;

    // Cambiar el texto del botón de cambiar idioma y el icono
    botonCambiarIdioma.innerHTML = '';  // Limpiar el contenido anterior del botón
    const icono = document.createElement('i');
    if (idioma === 'es') {
        icono.className = 'fas fa-globe-americas'; // Icono para el idioma español
        botonCambiarIdioma.appendChild(icono);
        botonCambiarIdioma.appendChild(document.createTextNode(' Cambiar idioma'));
    } else {
        icono.className = 'fas fa-globe'; // Icono para el idioma inglés
        botonCambiarIdioma.appendChild(icono);
        botonCambiarIdioma.appendChild(document.createTextNode(' Change language'));
    }

    // Cambiar el contenido dinámico
    contenedor.innerHTML = `<p>${idiomas[idioma].contenido}</p>`;

    // Cambiar el texto del pie de página
    pie.innerHTML = idiomas[idioma].pie;

    // Eliminar el menú de selección de idioma
    const menuIdiomas = document.getElementById('menu-idiomas');
    if (menuIdiomas) {
        menuIdiomas.remove();
    }
};


// Evento para mostrar el menú de selección de idioma
botonCambiarIdioma.addEventListener('click', crearMenuIdiomas);
