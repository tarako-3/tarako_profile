document.addEventListener('DOMContentLoaded', () => {
    // Add parallax effect to stars
    document.addEventListener('mousemove', (e) => {
        const stars = document.querySelector('.stars');
        const x = e.clientX / window.innerWidth;
        const y = e.clientY / window.innerHeight;
        stars.style.transform = `translate(${x * 30}px, ${y * 30}px)`;
    });

    // Add ripple effect to cards
    const cards = document.querySelectorAll('.card');
    
    cards.forEach(card => {
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            card.style.setProperty('--mouse-x', `${x}px`);
            card.style.setProperty('--mouse-y', `${y}px`);
        });
        
        // Add click effect
        card.addEventListener('click', () => {
            card.classList.add('clicked');
            setTimeout(() => {
                card.classList.remove('clicked');
            }, 500);
        });
    });

    // Add floating animation to elements with data-float attribute
    const floatElements = document.querySelectorAll('[data-float]');
    floatElements.forEach(el => {
        const delay = Math.random() * 2;
        const duration = 3 + Math.random() * 2;
        el.style.animation = `float ${duration}s ease-in-out ${delay}s infinite`;
    });

    // Add typewriter effect to the title
    const title = document.querySelector('.neon-text');
    const text = title.textContent;
    title.textContent = '';
    
    let i = 0;
    const typeWriter = () => {
        if (i < text.length) {
            title.textContent += text.charAt(i);
            i++;
            setTimeout(typeWriter, 100);
        }
    };
    
    // Start the typewriter effect after a short delay
    setTimeout(typeWriter, 500);
});

// Add scroll reveal animation
const observerOptions = {
    threshold: 0.1
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

document.querySelectorAll('.card').forEach(card => {
    observer.observe(card);
});
