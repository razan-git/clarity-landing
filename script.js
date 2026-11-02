// Clarity landing page behavior. Vanilla JS, no dependencies.
(() => {
  // Mobile nav toggle: open/close the menu, keep aria-expanded in sync,
  // and close on Escape, on link click, or when the layout becomes desktop.
  const initNavToggle = () => {
    const menu = document.getElementById('nav-menu');
    const toggle = document.querySelector('.nav-toggle');
    const label = toggle.querySelector('.visually-hidden');

    const setOpen = (isOpen) => {
      menu.hidden = !isOpen;
      toggle.setAttribute('aria-expanded', String(isOpen));
      label.textContent = isOpen ? 'Close menu' : 'Open menu';
    };

    toggle.addEventListener('click', () => setOpen(menu.hidden));

    menu.addEventListener('click', (event) => {
      if (event.target.closest('a')) setOpen(false);
    });

    document.addEventListener('keydown', (event) => {
      if (event.key === 'Escape' && !menu.hidden) {
        setOpen(false);
        toggle.focus();
      }
    });

    window.matchMedia('(min-width: 768px)').addEventListener('change', (event) => {
      if (event.matches) setOpen(false);
    });
  };

  // Smooth scroll for in-page anchors, respecting prefers-reduced-motion.
  const initSmoothScroll = () => {};

  // Add .nav--scrolled once the page scrolls past 16px. Throttled with requestAnimationFrame.
  const initStickyNav = () => {
    const nav = document.getElementById('nav');
    let ticking = false;

    const update = () => {
      nav.classList.toggle('nav--scrolled', window.scrollY > 16);
      ticking = false;
    };

    window.addEventListener('scroll', () => {
      if (!ticking) {
        window.requestAnimationFrame(update);
        ticking = true;
      }
    }, { passive: true });

    update();
  };

  // Hero headline typewriter: types the headline once on load, with a caret class while typing.
  // The full text is kept in the DOM for screen readers, and reduced motion shows it at once.
  const initTypewriter = () => {
    const title = document.querySelector('.hero-title');
    const text = title.textContent;

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    let index = 0;

    const type = () => {
      index += 1;
      title.textContent = text.slice(0, index);

      if (index < text.length) {
        window.setTimeout(type, 40);
      } else {
        title.classList.remove('hero-title--typing');
      }
    };

    title.textContent = '';
    title.classList.add('hero-title--typing');
    window.setTimeout(type, 300);
  };

  // Scroll reveal: marks each section .reveal, then adds .is-visible once it enters the viewport.
  // Skipped when reduced motion is set or IntersectionObserver is unavailable.
  const initScrollReveal = () => {
    if (!('IntersectionObserver' in window)) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.15 });

    document.querySelectorAll('.section').forEach((section) => {
      section.classList.add('reveal');
      observer.observe(section);
    });
  };

  // Sign-up modal: opens from every [data-open-signup] button and closes from the close button or the backdrop.
  // Form submission is not connected to an endpoint yet.
  const initSignupModal = () => {
    const modal = document.getElementById('signup-modal');
    const form = document.getElementById('signup-form');
    const status = form.querySelector('.form-status');

    document.querySelectorAll('[data-open-signup]').forEach((button) => {
      button.addEventListener('click', () => modal.showModal());
    });

    modal.querySelector('[data-close-signup]').addEventListener('click', () => modal.close());

    modal.addEventListener('click', (event) => {
      if (event.target === modal) modal.close();
    });

    form.addEventListener('submit', (event) => {
      event.preventDefault();
      if (!form.reportValidity()) return;

      // PLACEHOLDER: send the name and email to the lead endpoint once one is chosen.
      status.textContent = 'Form submission is not connected yet.';
    });
  };

  // Pricing billing toggle: switches the plan amounts between monthly and annual prices.
  const initBillingToggle = () => {
    const buttons = document.querySelectorAll('.pricing-toggle-button');
    const amounts = document.querySelectorAll('.pricing-amount');

    buttons.forEach((button) => {
      button.addEventListener('click', () => {
        const isAnnual = button.dataset.billing === 'annual';

        buttons.forEach((item) => item.setAttribute('aria-pressed', String(item === button)));
        amounts.forEach((amount) => {
          amount.textContent = isAnnual ? amount.dataset.annual : amount.dataset.monthly;
        });
      });
    });
  };

  document.addEventListener('DOMContentLoaded', () => {
    initNavToggle();
    initSmoothScroll();
    initStickyNav();
    initTypewriter();
    initScrollReveal();
    initSignupModal();
    initBillingToggle();
  });
})();
