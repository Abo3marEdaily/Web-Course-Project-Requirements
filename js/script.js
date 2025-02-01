document.addEventListener('DOMContentLoaded', () => {
    // Existing theme switcher code...

    // Button Click Action
    document.querySelector('.hero-buttons .btn-primary').addEventListener('click', () => {
        console.log('Hire Me button clicked!');
        alert('Thanks for considering me! Let\'s connect!');
    });

    // Form Validation
    const form = document.querySelector('form');
    form.addEventListener('submit', (e) => {
        e.preventDefault();

        const name = form.elements.name.value.trim();
        const email = form.elements.email.value.trim();
        const message = form.elements.message.value.trim();
        let isValid = true;

        // Clear previous errors
        document.querySelectorAll('.error').forEach(el => el.remove());

        // Name validation
        if (!name) {
            showError(form.elements.name, 'Name is required');
            isValid = false;
        }

        // Email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!email) {
            showError(form.elements.email, 'Email is required');
            isValid = false;
        } else if (!emailRegex.test(email)) {
            showError(form.elements.email, 'Invalid email format');
            isValid = false;
        }

        // Message validation
        if (!message) {
            showError(form.elements.message, 'Message is required');
            isValid = false;
        }

        if (isValid) {
            showModal();
            form.reset();
        }
    });

    function showError(input, message) {
        const error = document.createElement('div');
        error.className = 'error';
        error.style.color = 'red';
        error.textContent = message;
        input.parentNode.insertBefore(error, input.nextSibling);
        input.style.borderColor = 'red';
    }

    // Modal functionality
    const modalOverlay = document.querySelector('.modal-overlay');
    document.querySelector('.close-modal').addEventListener('click', () => {
        modalOverlay.style.display = 'none';
    });

    window.addEventListener('click', (e) => {
        if (e.target === modalOverlay) {
            modalOverlay.style.display = 'none';
        }
    });

    function showModal() {
        modalOverlay.style.display = 'block';
    }

    // Toggle Menu
    document.querySelector('.mobile-menu').addEventListener('click', () => {
        const nav = document.querySelector('header ul');
        nav.classList.toggle('show-menu');
    });

    // DOM Manipulation - Skills
    const skills = ['HTML5', 'CSS3', 'JavaScript', 'React', 'Node.js', 'Git'];
    const skillsContainer = document.querySelector('.skills-container');

    document.getElementById('showSkills').addEventListener('click', () => {
        skillsContainer.innerHTML = skills
            .map(skill => `<div class="skill-item">${skill}</div>`)
            .join('');
    });

    // Dynamic content update
    setInterval(() => {
        const randomColor = `hsl(${Math.random() * 360}, 70%, 50%)`;
        document.documentElement.style.setProperty('--primary-color', randomColor);
    }, 5000);
});