document.addEventListener('DOMContentLoaded', () => {
    
    // Menú móvil
    const hamburger = document.getElementById('hamburger')
    const mobileNav = document.getElementById('nav-mobile')
    
    hamburger.addEventListener('click', () => {
        mobileNav.classList.toggle('active')
        
        // Cambiar ícono
        const icon = hamburger.querySelector('i')
        if (mobileNav.classList.contains('active')) {
            icon.classList.remove('fa-bars')
            icon.classList.add('fa-xmark')
        } else {
            icon.classList.remove('fa-xmark')
            icon.classList.add('fa-bars')
        }
    })
    
    // Cerrar menú móvil al hacer clic en un enlace
    const mobileLinks = mobileNav.querySelectorAll('a')
    mobileLinks.forEach(link => {
        link.addEventListener('click', () => {
            mobileNav.classList.remove('active')
            const icon = hamburger.querySelector('i')
            icon.classList.remove('fa-xmark')
            icon.classList.add('fa-bars')
        })
    })
    
    // Scroll suave + active nav
    const navLinks = document.querySelectorAll('.nav-link')
    
    function setActiveLink() {
        let current = ''
        const sections = document.querySelectorAll('section')
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop
            if (scrollY >= sectionTop - 300) {
                current = section.getAttribute('id')
            }
        })
        
        navLinks.forEach(link => {
            link.classList.remove('active')
            if (link.getAttribute('href') === `#${current}`) {
                link.classList.add('active')
            }
        })
    }
    
    window.addEventListener('scroll', setActiveLink)
    
    // Formulario de contacto
    const form = document.getElementById('contact-form')
    
    form.addEventListener('submit', (e) => {
        e.preventDefault()
        
        const nombre = document.getElementById('nombre').value
        
        // Simulación de envío
        const btn = form.querySelector('button')
        const originalText = btn.innerHTML
        
        btn.innerHTML = `
            <i class="fa-solid fa-spinner fa-spin"></i> Enviando...
        `
        btn.disabled = true
        
        setTimeout(() => {
            alert(`¡Gracias, ${nombre}! Tu mensaje ha sido enviado. Te contactaremos muy pronto para honrar a tu mascota. 💙`)
            
            // Reset form
            form.reset()
            
            // Restaurar botón
            btn.innerHTML = originalText
            btn.disabled = false
        }, 1800)
    })
    
    console.log('%c🎨 Alebrije Website cargada con éxito ✨', 'color:#14b8a6; font-size:16px; font-weight:700')
})