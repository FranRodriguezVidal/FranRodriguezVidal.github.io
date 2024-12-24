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
        contenido: `Hola, soy Fran. Bienvenidos a mi página,
        donde compartiré cosas sobre mí. También podrás encontrar mis redes sociales
        y mis proyectos en GitHub para explorar, recopilar, copiar, mejorar y muchas
        cosas más. En la navegación podrás descubrir más contenido en cada apartado.
        Además, puedes cambiar el idioma entre inglés o español pulsando en el botón
        [Click "Cambiar idioma" to switch to English].`,
        pie: "&copy; 2024 Fran. Todos los derechos reservados."
    },
    en: {
        sobreMi: "About me",
        redesSociales: "Social media",
        github: "GitHub",
        cambiarIdioma: "Change language",
        contenido: `Hi, I'm Fran. Welcome to my page,
        where I will share things about myself.
        You can also find my social media links and my GitHub projects to explore,
        collect, copy, improve, and much more. In the navigation, you'll discover more
        content in each section. Additionally, you can switch the language between
        English or Spanish by clicking the button ",
        [Pulsa "Change Language" para cambiar al Español].`,
        pie: "&copy; 2024 Fran. All rights reserved."
    }
};

// Idioma actual
let idiomaActual = 'es';

// Crear menú de selección de idioma
const crearMenuIdiomas = () => {
    const menuIdiomas = document.createElement('div');
    menuIdiomas.id = 'menu-idiomas';
    menuIdiomas.style.position = 'absolute';
    menuIdiomas.style.backgroundColor = '#f0f0f0';
    menuIdiomas.style.border = '1px solid #ccc';
    menuIdiomas.style.padding = '10px';
    menuIdiomas.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.2)';

    const opcionEspanol = document.createElement('div');
    opcionEspanol.textContent = 'Español';
    opcionEspanol.style.cursor = 'pointer';
    opcionEspanol.onclick = () => cambiarIdioma('es');

    const opcionIngles = document.createElement('div');
    opcionIngles.textContent = 'English';
    opcionIngles.style.cursor = 'pointer';
    opcionIngles.onclick = () => cambiarIdioma('en');

    menuIdiomas.appendChild(opcionEspanol);
    menuIdiomas.appendChild(opcionIngles);
    document.body.appendChild(menuIdiomas);

    const rect = botonCambiarIdioma.getBoundingClientRect();
    menuIdiomas.style.top = `${rect.bottom + window.scrollY}px`;
    menuIdiomas.style.left = `${rect.left + window.scrollX}px`;

    document.addEventListener('click', (event) => {
        if (!menuIdiomas.contains(event.target) && event.target !== botonCambiarIdioma) {
            menuIdiomas.remove();
        }
    }, { once: true });
};

// Cambiar el idioma de la web
const cambiarIdioma = (idioma) => {
    idiomaActual = idioma;

    // Cambiar el texto de los botones del menú
    document.getElementById('boton-sobre-mi').textContent = idiomas[idioma].sobreMi;
    document.getElementById('boton-redes-sociales').textContent = idiomas[idioma].redesSociales;
    document.getElementById('boton-github').textContent = idiomas[idioma].github;

    // Cambiar el texto del botón de cambiar idioma y el icono
    botonCambiarIdioma.innerHTML = '';
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
    actualizarContenido(idioma);

    // Cambiar el texto del pie de página
    pie.innerHTML = idiomas[idioma].pie;

    // Eliminar el menú de selección de idioma
    const menuIdiomas = document.getElementById('menu-idiomas');
    if (menuIdiomas) {
        menuIdiomas.remove();
    }
};

// Actualizar el contenido del contenedor
const actualizarContenido = (idioma) => {
    contenedor.innerHTML = `<p>${idiomas[idioma].contenido}</p>`;
};

// Función para manejar los clicks en los botones de "Sobre de mí", "Redes sociales" y "GitHub"
const actualizarSeccion = (seccion) => {
    let contenido;
    if (idiomaActual === 'es') {
        contenido = {
            sobreMi: "Hola, soy Fran. Bienvenidos a mi página.",
            redesSociales: "Sígueme en mis redes sociales.",
            github: "Visita mi GitHub para ver mis proyectos."
        };
    } else {
        contenido = {
            sobreMi: "Hello, I'm Fran. Welcome to my page.",
            redesSociales: "Follow me on my social media.",
            github: "Visit my GitHub to see my projects."
        };
    }
    contenedor.innerHTML = `<p>${contenido[seccion]}</p>`;
};

// Añadir eventos a los botones
document.getElementById('boton-sobre-mi').addEventListener('click', () => actualizarSeccion('sobreMi'));
document.getElementById('boton-redes-sociales').addEventListener('click', () => actualizarSeccion('redesSociales'));
document.getElementById('boton-github').addEventListener('click', () => actualizarSeccion('github'));

// Evento para mostrar el menú de selección de idioma
botonCambiarIdioma.addEventListener('click', crearMenuIdiomas);

// Inicializar contenido por defecto
actualizarContenido(idiomaActual);
