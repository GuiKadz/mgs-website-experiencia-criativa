// menu hambúrguer
const hamburger = document.querySelector('.nav-hamburger');
const nav = document.querySelector('.nav-links');

if (hamburger && nav) {
  hamburger.addEventListener('click', () => {
    const aberto = hamburger.classList.toggle('open');
    nav.classList.toggle('active', aberto);
  });

  nav.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
      hamburger.classList.remove('open');
      nav.classList.remove('active');
    });
  });
}

// formulário de contato
const form = document.getElementById('contatoForm');
const feedback = document.getElementById('formFeedback');

if (form) {
  form.addEventListener('submit', e => {
    e.preventDefault();

    const btn = form.querySelector('[type="submit"]');
    btn.textContent = 'Enviando...';
    btn.disabled = true;

    setTimeout(() => {
      feedback.textContent = '✓ Mensagem enviada! Retornaremos em breve.';
      form.reset();
      btn.textContent = 'Enviar mensagem';
      btn.disabled = false;

      setTimeout(() => (feedback.textContent = ''), 5000);
    }, 1200);
  });
}

// rolagem suave
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', e => {
    const alvo = document.querySelector(a.getAttribute('href'));
    if (alvo) {
      e.preventDefault();
      alvo.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

// filtro do portfólio
const filtros = document.querySelectorAll('.filtro-btn');
const cards = document.querySelectorAll('.portfolio-card');

if (filtros.length) {
  filtros.forEach(btn => {
    btn.addEventListener('click', () => {
      filtros.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const categoria = btn.dataset.filtro;

      cards.forEach(card => {
        const match = categoria === 'todos' || card.dataset.categoria === categoria;
        card.classList.toggle('hidden', !match);
      });
    });
  });
}
