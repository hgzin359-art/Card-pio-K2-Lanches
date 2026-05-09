// ===== NAVEGAÇÃO E ABAS =====
document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('.nav-link');
    const sections = document.querySelectorAll('.section');

    // Função para trocar de seção
    function switchSection(sectionId) {
        // Remove a classe active de todas as seções
        sections.forEach(section => {
            section.classList.remove('active');
        });

        // Remove a classe active de todos os links
        navLinks.forEach(link => {
            link.classList.remove('active');
        });

        // Adiciona a classe active à seção selecionada
        const targetSection = document.getElementById(sectionId);
        if (targetSection) {
            targetSection.classList.add('active');
        }

        // Adiciona a classe active ao link clicado
        const activeLink = document.querySelector(`[data-section="${sectionId}"]`);
        if (activeLink) {
            activeLink.classList.add('active');
        }
    }

    // Event listeners para os links de navegação
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const sectionId = this.getAttribute('data-section');
            switchSection(sectionId);
        });
    });

    // Detectar scroll e atualizar navegação
    window.addEventListener('scroll', function() {
        let current = '';

        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;

            if (scrollY >= sectionTop - 200) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('data-section') === current) {
                link.classList.add('active');
            }
        });
    });

    // Inicializar com a seção "home" ativa
    switchSection('home');
});

// ===== SCROLL REVEAL EFFECT =====
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('active');
        }
    });
}, observerOptions);

// Observar todos os item-cards
document.querySelectorAll('.item-card').forEach(card => {
    observer.observe(card);
});

// ===== FUNÇÃO PARA SCROLL SUAVE =====
function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
        // Atualizar navegação
        const navLinks = document.querySelectorAll('.nav-link');
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('data-section') === sectionId) {
                link.classList.add('active');
            }
        });
        // Mostrar a seção
        const sections = document.querySelectorAll('.section');
        sections.forEach(s => s.classList.remove('active'));
        document.getElementById(sectionId).classList.add('active');
    }
}

// ===== EFEITO DE PARALLAX NO HERO =====
window.addEventListener('scroll', function() {
    const heroImage = document.querySelector('.hero-image');
    if (heroImage) {
        const scrollPosition = window.scrollY;
        heroImage.style.transform = `translateY(${scrollPosition * 0.5}px)`;
    }
});

// ===== ANIMAÇÃO DE ENTRADA DOS CARDS =====
document.addEventListener('DOMContentLoaded', function() {
    const cards = document.querySelectorAll('.item-card');
    cards.forEach((card, index) => {
        card.style.animationDelay = `${index * 0.05}s`;
    });
});

// ===== EFEITO DE RIPPLE AO CLICAR NOS CARDS =====
document.querySelectorAll('.item-card').forEach(card => {
    card.addEventListener('click', function(e) {
        const ripple = document.createElement('span');
        const rect = this.getBoundingClientRect();
        const size = Math.max(rect.width, rect.height);
        const x = e.clientX - rect.left - size / 2;
        const y = e.clientY - rect.top - size / 2;

        ripple.style.width = ripple.style.height = size + 'px';
        ripple.style.left = x + 'px';
        ripple.style.top = y + 'px';
        ripple.classList.add('ripple');

        this.appendChild(ripple);

        setTimeout(() => ripple.remove(), 600);
    });
});

// ===== SMOOTH SCROLL PARA LINKS INTERNOS =====
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// ===== DARK MODE TOGGLE (OPCIONAL) =====
function toggleDarkMode() {
    document.body.classList.toggle('dark-mode');
    localStorage.setItem('darkMode', document.body.classList.contains('dark-mode'));
}

// Verificar preferência de dark mode salva
if (localStorage.getItem('darkMode') === 'true') {
    document.body.classList.add('dark-mode');
}

// ===== EFEITO DE LOADING =====
window.addEventListener('load', function() {
    document.body.style.opacity = '1';
});

// ===== CONTADOR DE ITENS POR CATEGORIA =====
function countItemsByCategory() {
    const sections = document.querySelectorAll('.section');
    const categories = {};

    sections.forEach(section => {
        const title = section.querySelector('.section-header h2');
        if (title) {
            const categoryName = title.textContent;
            const itemCount = section.querySelectorAll('.item-card').length;
            categories[categoryName] = itemCount;
        }
    });

    console.log('Itens por categoria:', categories);
    return categories;
}

// Chamar ao carregar
countItemsByCategory();

// ===== BUSCA RÁPIDA (OPCIONAL) =====
function searchItems(query) {
    const cards = document.querySelectorAll('.item-card');
    const results = [];

    cards.forEach(card => {
        const title = card.querySelector('.item-content h3').textContent.toLowerCase();
        const description = card.querySelector('.item-description').textContent.toLowerCase();

        if (title.includes(query.toLowerCase()) || description.includes(query.toLowerCase())) {
            results.push(card);
            card.style.display = 'block';
        } else {
            card.style.display = 'none';
        }
    });

    return results;
}

// ===== EFEITO DE SCROLL SUAVE NA NAVBAR =====
let lastScrollTop = 0;
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', function() {
    let scrollTop = window.scrollY || document.documentElement.scrollTop;

    if (scrollTop > lastScrollTop) {
        // Scroll para baixo
        navbar.style.transform = 'translateY(-100%)';
    } else {
        // Scroll para cima
        navbar.style.transform = 'translateY(0)';
    }

    lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
});

navbar.style.transition = 'transform 0.3s ease';

// ===== INICIALIZAÇÃO =====
console.log('K2 Lanches - Cardápio Digital carregado com sucesso!');
