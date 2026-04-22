document.addEventListener('DOMContentLoaded', () => { // Espera a que cargue todo el DOM
    
    // Menú móvil
    const hamburger = document.getElementById('hamburger') // Botón hamburguesa
    const mobileNav = document.getElementById('nav-mobile') // Menú móvil
    
    hamburger.addEventListener('click', () => { // Evento al hacer clic en el botón
        mobileNav.classList.toggle('active') // Muestra/oculta el menú
        
        // Cambiar ícono
        const icon = hamburger.querySelector('i') // Selecciona el ícono dentro del botón
        if (mobileNav.classList.contains('active')) { // Si el menú está activo
            icon.classList.remove('fa-bars') // Quita icono de barras
            icon.classList.add('fa-xmark') // Agrega icono de cerrar
        } else { // Si el menú está cerrado
            icon.classList.remove('fa-xmark') // Quita icono de cerrar
            icon.classList.add('fa-bars') // Agrega icono de barras
        }
    })
    
    // Cerrar menú móvil al hacer clic en un enlace
    const mobileLinks = mobileNav.querySelectorAll('a') // Selecciona todos los links del menú móvil
    mobileLinks.forEach(link => { // Recorre cada link
        link.addEventListener('click', () => { // Evento al hacer clic
            mobileNav.classList.remove('active') // Cierra el menú
            const icon = hamburger.querySelector('i') // Selecciona el ícono
            icon.classList.remove('fa-xmark') // Quita icono de cerrar
            icon.classList.add('fa-bars') // Vuelve al icono de barras
        })
    })
    
    // Scroll suave + active nav
    const navLinks = document.querySelectorAll('.nav-link') // Links del navbar
    
    function setActiveLink() { // Función para detectar sección activa
        let current = '' // Variable de sección actual
        const sections = document.querySelectorAll('section') // Todas las secciones
        
        sections.forEach(section => { // Recorre cada sección
            const sectionTop = section.offsetTop // Posición desde arriba
            if (scrollY >= sectionTop - 300) { // Si el scroll está cerca
                current = section.getAttribute('id') // Guarda el id actual
            }
        })
        
        navLinks.forEach(link => { // Recorre links del menú
            link.classList.remove('active') // Quita clase activa
            if (link.getAttribute('href') === `#${current}`) { // Si coincide con sección
                link.classList.add('active') // Marca como activo
            }
        })
    }
    
    window.addEventListener('scroll', setActiveLink) // Ejecuta al hacer scroll
    
    // Formulario de contacto
    const form = document.getElementById('contact-form') // Selecciona el formulario
    
    form.addEventListener('submit', (e) => { // Evento al enviar
        e.preventDefault() // Evita recarga de página
        
        const nombre = document.getElementById('nombre').value // Obtiene nombre
        
        // Simulación de envío
        const btn = form.querySelector('button') // Botón de envío
        const originalText = btn.innerHTML // Guarda texto original
        
        btn.innerHTML = ` 
            <i class="fa-solid fa-spinner fa-spin"></i> Enviando...
        ` // Muestra spinner
        btn.disabled = true // Desactiva botón
        
        setTimeout(() => { // Simula espera
            alert(`¡Gracias, ${nombre}! Tu mensaje ha sido enviado. Te contactaremos muy pronto para honrar a tu mascota. 💙`) // Mensaje
            
            form.reset() // Limpia formulario
            
            btn.innerHTML = originalText // Restaura texto
            btn.disabled = false // Activa botón nuevamente
        }, 1800)
    })
    
    console.log('%c🎨 Alebrije Website cargada con éxito ✨', 'color:#14b8a6; font-size:16px; font-weight:700') // Mensaje en consola
})

const navbar = document.getElementById("navbar"); // Selecciona navbar
const navLinks2 = document.querySelectorAll("#navbar a:not(.bg-alebrije-blue)"); // Links excepto botón azul

function setWhiteText() { // Función para texto blanco
    navLinks2.forEach(link => { // Recorre links
        link.classList.remove("text-alebrije-dark"); // Quita color oscuro
        link.classList.add("text-white"); // Agrega color blanco
    });
}

function setDarkText() { // Función para texto oscuro
    navLinks2.forEach(link => { // Recorre links
        link.classList.remove("text-white"); // Quita blanco
        link.classList.add("text-alebrije-dark"); // Agrega color original
    });
}

window.addEventListener("scroll", () => { // Evento scroll
    if (window.scrollY > 50) { // Si baja
        setDarkText(); // Texto oscuro
    } else { // Si está arriba
        setWhiteText(); // Texto blanco
    }
});

navLinks2.forEach(link => { // Recorre links
    link.addEventListener("click", () => { // Evento click
        setDarkText(); // Cambia a oscuro
    });
});

window.addEventListener("load", () => { // Cuando carga la página
    setWhiteText(); // Inicia con texto blanco
});