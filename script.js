let currentPage = 0;
const pages = document.querySelectorAll('.page');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const langBtn = document.getElementById('langBtn');

// Functions to change pages
function showPage(index) {
    pages.forEach((page, i) => {
        if (i === index) {
            page.classList.add('active');
        } else {
            page.classList.remove('active');
        }
    });

    // Update button opacity based on page
    prevBtn.classList.toggle('inactive', index === 0);
    nextBtn.classList.toggle('inactive', index === pages.length - 1);
}

// Next and Previous page buttons
nextBtn.addEventListener('click', () => {
    if (currentPage < pages.length - 1) {
        currentPage++;
        showPage(currentPage);
    }
});

prevBtn.addEventListener('click', () => {
    if (currentPage > 0) {
        currentPage--;
        showPage(currentPage);
    }
});

// Language button functionality
langBtn.addEventListener('click', () => {
    const pageTitles = document.querySelectorAll('h1, h2');
    const descriptions = document.querySelectorAll('p');
    
    if (langBtn.textContent === 'Español') {
        pageTitles.forEach(title => {
            if (title.textContent === 'Yoiber Smith') {
                title.textContent = 'Yoiber Smith';
            } else if (title.textContent === 'Habilidades') {
                title.textContent = 'Skills';
            } else if (title.textContent === 'Contacto') {
                title.textContent = 'Contact';
            } else if (title.textContent === 'Mis Proyectos') {
                title.textContent = 'My Projects';
            } else if (title.textContent === 'Portafolios') {
                title.textContent = 'Portfolio';
            } else if (title.textContent === 'Páginas Web Sencillas') {
                title.textContent = 'Simple Websites';
            } else if (title.textContent === 'Aplicaciones en Python') {
                title.textContent = 'Python Apps';
            } else if (title.textContent === 'Teléfono') {
                title.textContent = 'Phone';
            } else if (title.textContent === 'Universo en Python') {
                title.textContent = 'Universe in Python';
            } else if (title.textContent === 'Echo Stream') {
                title.textContent = 'Echo Stream';
            } else if (title.textContent === 'Teclados con diferentes idiomas') {
                title.textContent = 'Keyboards with Different Languages';
            }
        });

        descriptions.forEach(description => {
            if (description.textContent.includes('Desarrollador Web y de Aplicaciones')) {
                description.textContent = 'Web and App Developer';
            }
            if (description.textContent.includes('Puedo crear:')) {
                description.textContent = 'I can create:';
            }
            if (description.textContent.includes('Lenguajes de programación:')) {
                description.textContent = 'Programming languages:';
            }
        });

        langBtn.textContent = 'English';
    } else {
        pageTitles.forEach(title => {
            if (title.textContent === 'Yoiber Smith') {
                title.textContent = 'Yoiber Smith';
            } else if (title.textContent === 'Skills') {
                title.textContent = 'Habilidades';
            } else if (title.textContent === 'Contact') {
                title.textContent = 'Contacto';
            } else if (title.textContent === 'My Projects') {
                title.textContent = 'Mis Proyectos';
            } else if (title.textContent === 'Portfolio') {
                title.textContent = 'Portafolios';
            } else if (title.textContent === 'Simple Websites') {
                title.textContent = 'Páginas Web Sencillas';
            } else if (title.textContent === 'Python Apps') {
                title.textContent = 'Aplicaciones en Python';
            } else if (title.textContent === 'Phone') {
                title.textContent = 'Teléfono';
            } else if (title.textContent === 'Universe in Python') {
                title.textContent = 'Universo en Python';
            } else if (title.textContent === 'Echo Stream') {
                title.textContent = 'Echo Stream';
            } else if (title.textContent === 'Keyboards with Different Languages') {
                title.textContent = 'Teclados con diferentes idiomas';
            }
        });

        descriptions.forEach(description => {
            if (description.textContent.includes('Web and App Developer')) {
                description.textContent = 'Desarrollador Web y de Aplicaciones';
            }
            if (description.textContent.includes('I can create:')) {
                description.textContent = 'Puedo crear:';
            }
            if (description.textContent.includes('Programming languages:')) {
                description.textContent = 'Lenguajes de programación:';
            }
        });

        langBtn.textContent = 'Español';
    }
});

// Initialize first page
showPage(currentPage);
