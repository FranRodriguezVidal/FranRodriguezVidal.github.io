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
        [Click "Cambiar idioma" to switch to English].
        <img src="img/frv.png" alt="logo">`,
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
        [Pulsa "Change Language" para cambiar al Español].
        <img src="img/frv.png" alt="logo">`,
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
            sobreMi: `Como ya mencioné, soy Fran, un estudiante de DAW (Desarrollo de Aplicaciones Web),
            donde estaré desarrollando y compartiendo mi aprendizaje sobre el mundo de la programación.
            Aquí compartiré algunos de los proyectos en los que estoy trabajando o que ya he terminado,
            como aplicaciones web, páginas dinámicas o pequeñas herramientas útiles.
            Además, me estoy especializando en tecnologías como HTML, CSS, JavaScript y
            algunos lenguajes más que estoy aprendiendo. También estoy estudiando frameworks como Laravel
            con PHP, y más adelante profundizaré en otros frameworks. Mis objetivos como programador son
            desarrollar aplicaciones útiles y seguir aprendiendo nuevas tecnologías, lenguajes y
            herramientas para mejorar constantemente.<img src="img/frv.png" alt="logo">`,
            redesSociales:  ` <h2 style="text-align: center;">¡Sígueme en mis redes sociales!</h2>
            <ul style="list-style: none; display: flex; justify-content: center; align-items: center; gap: 30px; padding: 10px; margin: 10px;">
                <li>
                    <a href="https://www.instagram.com/franrodriguezvidal/" target="_blank">
                        <img src="https://cdn-icons-png.flaticon.com/512/2111/2111463.png" alt="Instagram" style="width: 50px; height: 50px;">
                    </a>
                </li>
                <li>
                    <a href="https://www.linkedin.com/in/francisco-rodr%C3%ADguez-vidal-96455925a/" target="_blank">
                        <img src="https://cdn-icons-png.flaticon.com/512/174/174857.png" alt="LinkedIn" style="width: 50px; height: 50px;">
                    </a>
                </li>
                <li>
                    <a href="https://x.com/franrodrividal" target="_blank">
                        <img src="https://cdn-icons-png.flaticon.com/512/733/733579.png" alt="Twitter" style="width: 50px; height: 50px;">
                    </a>
                </li>
                <li>
                    <a href="https://github.com/FranRodriguezVidal" target="_blank">
                        <img src="https://cdn-icons-png.flaticon.com/512/733/733553.png" alt="GitHub" style="width: 50px; height: 50px;">
                    </a>
                </li>
            </ul>
            `,
            github: `Visita mi GitHub para ver mis trabajos, como proyectos, herramientas, aplicaciones web, páginas dinámicas y mucho más.
            Allí podrás copiarlos o mejorarlos, como prefieras. En mis proyectos siempre hay comentarios para que entiendas cómo funciona
            el contenido y, en el futuro, puedas editarlos fácilmente.
            <div style="text-align: center; margin-top: 20px;">
                <a href="https://github.com/FranRodriguezVidal" target="_blank">
                    <img src="https://cdn-icons-png.flaticon.com/512/733/733553.png" alt="GitHub" style="width: 150px; height: 150px;">
                </a>
                <p style="font-size: 18px; font-family: Arial, sans-serif; margin-top: 10px;">Visita mi GitHub</p>
            </div> <img class="github" src="img/github.png" alt="github">`
        };
    } else {
        contenido = {
            sobreMi: `As I mentioned before, I’m Fran, a DAW (Web Application Development) student,
            where I will be developing and sharing my learning journey in the world of programming.
            Here, I’ll share some of the projects I’m working on or have already completed,
            such as web applications, dynamic pages, or small useful tools.Additionally, I’m specializing
            in technologies like HTML, CSS, JavaScript, and other languages I’m currently learning.
            I’m also studying frameworks like Laravel with PHP, and later I’ll explore more frameworks.
            My goals as a programmer are to develop useful applications and to continue learning
            new technologies, languages, and tools to improve constantly.<img src="img/frv.png" alt="logo">`,
            redesSociales: ` <h2 style="text-align: center;">Follow me on my social media!</h2>
            <ul style="list-style: none; display: flex; justify-content: center; align-items: center; gap: 30px; padding: 10px; margin: 10px;">
                <li>
                    <a href="https://www.instagram.com/franrodriguezvidal/" target="_blank">
                        <img src="https://cdn-icons-png.flaticon.com/512/2111/2111463.png" alt="Instagram" style="width: 50px; height: 50px;">
                    </a>
                </li>
                <li>
                    <a href="https://www.linkedin.com/in/francisco-rodr%C3%ADguez-vidal-96455925a/" target="_blank">
                        <img src="https://cdn-icons-png.flaticon.com/512/174/174857.png" alt="LinkedIn" style="width: 50px; height: 50px;">
                    </a>
                </li>
                <li>
                    <a href="https://x.com/franrodrividal" target="_blank">
                        <img src="https://cdn-icons-png.flaticon.com/512/733/733579.png" alt="Twitter" style="width: 50px; height: 50px;">
                    </a>
                </li>
                <li>
                    <a href="https://github.com/FranRodriguezVidal" target="_blank">
                        <img src="https://cdn-icons-png.flaticon.com/512/733/733553.png" alt="GitHub" style="width: 50px; height: 50px;">
                    </a>
                </li>
            </ul>
            `,
            github: `Visit my GitHub to see my work, such as projects, tools, web applications, dynamic pages, and much more. There,
            you can copy or improve them as you wish. My projects always include comments to help you understand how the content works
            and make it easier for you to edit them in the future.
            <div style="text-align: center; margin-top: 20px;">
                <a href="https://github.com/FranRodriguezVidal" target="_blank">
                    <img src="https://cdn-icons-png.flaticon.com/512/733/733553.png" alt="GitHub" style="width: 150px; height: 150px;">
                </a>
                <p style="font-size: 18px; font-family: Arial, sans-serif; margin-top: 10px;">Visit my GitHub</p>
            </div> <img class="github" src="img/github.png" alt="github">`
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
