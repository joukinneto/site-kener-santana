/**
 * main.js — Site Psicóloga Kener Santana
 * Funcionalidades: navbar scroll, menu mobile, FAQ accordion, scroll reveal, animações.
 */

(function () {
  'use strict';

  /* ------------------------------------------------------------------
     1. NAVBAR — estado scroll e menu mobile
  ------------------------------------------------------------------ */
  const header     = document.getElementById('header');
  const navToggle  = document.getElementById('navToggle');
  const navMenu    = document.getElementById('navMenu');
  const navLinks   = document.querySelectorAll('.nav-link');

  // Adiciona classe 'scrolled' ao header após 30px de scroll
  function onScroll() {
    if (window.scrollY > 30) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
    updateActiveNavLink();
  }

  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll(); // checar estado inicial

  // Menu hambúrguer
  navToggle.addEventListener('click', function () {
    const isOpen = navMenu.classList.toggle('open');
    navToggle.setAttribute('aria-expanded', String(isOpen));
    document.body.style.overflow = isOpen ? 'hidden' : '';
  });

  // Fechar menu ao clicar em link
  navLinks.forEach(function (link) {
    link.addEventListener('click', closeMenu);
  });

  // Fechar menu ao pressionar Esc
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && navMenu.classList.contains('open')) {
      closeMenu();
      navToggle.focus();
    }
  });

  function closeMenu() {
    navMenu.classList.remove('open');
    navToggle.setAttribute('aria-expanded', 'false');
    document.body.style.overflow = '';
  }

  // Fechar menu ao clicar fora
  document.addEventListener('click', function (e) {
    if (navMenu.classList.contains('open') &&
        !navMenu.contains(e.target) &&
        !navToggle.contains(e.target)) {
      closeMenu();
    }
  });

  /* ------------------------------------------------------------------
     2. LINK ATIVO DA NAVBAR baseado na seção visível
  ------------------------------------------------------------------ */
  const sections = document.querySelectorAll('section[id]');

  function updateActiveNavLink() {
    let currentId = '';
    sections.forEach(function (section) {
      const sectionTop = section.offsetTop - 100;
      if (window.scrollY >= sectionTop) {
        currentId = section.getAttribute('id');
      }
    });

    navLinks.forEach(function (link) {
      link.classList.remove('active');
      if (link.getAttribute('href') === '#' + currentId) {
        link.classList.add('active');
      }
    });
  }

  /* ------------------------------------------------------------------
     3. FAQ ACCORDION
  ------------------------------------------------------------------ */
  const faqQuestions = document.querySelectorAll('.faq-question');

  faqQuestions.forEach(function (question) {
    question.addEventListener('click', function () {
      const expanded   = question.getAttribute('aria-expanded') === 'true';
      const answerId   = question.getAttribute('aria-controls');
      const answer     = document.getElementById(answerId);

      // Fechar todos os outros itens
      faqQuestions.forEach(function (q) {
        if (q !== question) {
          q.setAttribute('aria-expanded', 'false');
          const a = document.getElementById(q.getAttribute('aria-controls'));
          if (a) a.classList.remove('open');
        }
      });

      // Alternar o atual
      question.setAttribute('aria-expanded', String(!expanded));
      if (answer) answer.classList.toggle('open', !expanded);
    });
  });

  /* ------------------------------------------------------------------
     4. SCROLL REVEAL — elementos com classe .reveal
  ------------------------------------------------------------------ */
  const revealElements = document.querySelectorAll('.reveal');

  if ('IntersectionObserver' in window) {
    const revealObserver = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          revealObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

    revealElements.forEach(function (el) {
      revealObserver.observe(el);
    });
  } else {
    // Fallback: mostrar todos imediatamente
    revealElements.forEach(function (el) {
      el.classList.add('visible');
    });
  }

  /* ------------------------------------------------------------------
     5. ANO ATUAL NO FOOTER
  ------------------------------------------------------------------ */
  const yearEl = document.getElementById('currentYear');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  /* ------------------------------------------------------------------
     6. ACESSIBILIDADE — foco visível apenas via teclado
  ------------------------------------------------------------------ */
  document.addEventListener('mousedown', function () {
    document.body.classList.add('using-mouse');
  });
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Tab') {
      document.body.classList.remove('using-mouse');
    }
  });

  /* ------------------------------------------------------------------
     7. SMOOTH SCROLL para links âncora internos
  ------------------------------------------------------------------ */
  document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
    anchor.addEventListener('click', function (e) {
      const targetId = anchor.getAttribute('href');
      if (targetId === '#') return;
      const target = document.querySelector(targetId);
      if (!target) return;
      e.preventDefault();
      const offset = 80; // altura do header
      const top = target.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top: top, behavior: 'smooth' });
    });
  });

})();
