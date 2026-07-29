/* ============================================
   TOP IMPEX COMPANY SARL — Main JS
   ============================================ */

document.addEventListener('DOMContentLoaded', () => {

  /* ---------- Preloader ---------- */
  const preloader = document.getElementById('preloader');
  const hidePreloader = () => {
    if (!preloader) return;
    preloader.classList.add('hidden');
    document.body.style.overflow = '';
  };
  // Minimum show time for the luxury feel, even if assets load instantly
  const MIN_PRELOAD_MS = 1400;
  const start = Date.now();
  window.addEventListener('load', () => {
    const elapsed = Date.now() - start;
    const wait = Math.max(0, MIN_PRELOAD_MS - elapsed);
    setTimeout(hidePreloader, wait);
  });
  // Fallback in case 'load' never fires (e.g. missing video file during dev)
  setTimeout(hidePreloader, 3500);

  /* ---------- Mobile nav toggle ---------- */
  const navToggle = document.querySelector('.nav-toggle');
  const navLinks = document.querySelector('.nav-links');
  if (navToggle && navLinks) {
    navToggle.addEventListener('click', () => {
      navLinks.classList.toggle('open');
    });
  }

  /* ---------- Scroll reveal ---------- */
  const revealEls = document.querySelectorAll('.reveal');
  const io = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('in-view');
        io.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15, rootMargin: '0px 0px -40px 0px' });
  revealEls.forEach((el, i) => {
    el.style.setProperty('--i', i % 6);
    io.observe(el);
  });

  /* ---------- Animated counters ---------- */
  const counters = document.querySelectorAll('[data-count]');
  const animateCount = (el) => {
    const target = parseFloat(el.dataset.count);
    const suffix = el.dataset.suffix || '';
    const duration = 1600;
    const startTime = performance.now();
    const step = (now) => {
      const progress = Math.min((now - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      const value = target * eased;
      el.textContent = (target % 1 === 0 ? Math.floor(value) : value.toFixed(1)) + suffix;
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  };
  const counterIO = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        animateCount(entry.target);
        counterIO.unobserve(entry.target);
      }
    });
  }, { threshold: 0.4 });
  counters.forEach((el) => counterIO.observe(el));

  /* ---------- Sticky nav shadow on scroll ---------- */
  const header = document.querySelector('header.nav');
  if (header) {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 12) {
        header.style.boxShadow = '0 8px 30px rgba(0,0,0,0.35)';
      } else {
        header.style.boxShadow = 'none';
      }
    });
  }

});


/* ---------- Services accordion (services.html) ---------- */
document.addEventListener('DOMContentLoaded', () => {
  const serviceItems = document.querySelectorAll('.service-item');
  serviceItems.forEach((item) => {
    const head = item.querySelector('.service-head');
    const body = item.querySelector('.service-body');
    if (!head || !body) return;
    head.addEventListener('click', () => {
      const isOpen = item.classList.contains('open');
      serviceItems.forEach((other) => {
        other.classList.remove('open');
        other.querySelector('.service-body').style.maxHeight = null;
        other.querySelector('.service-head').setAttribute('aria-expanded', 'false');
      });
      if (!isOpen) {
        item.classList.add('open');
        body.style.maxHeight = body.scrollHeight + 'px';
        head.setAttribute('aria-expanded', 'true');
        setTimeout(() => item.scrollIntoView({ behavior: 'smooth', block: 'center' }), 200);
      }
    });
  });
});



/* ---------- About Header Slider ---------- */

document.addEventListener('DOMContentLoaded', () => {

    const slides = document.querySelectorAll('.page-header .ph-slide');

    if (!slides.length) return;

    let current = 0;

    setInterval(() => {

        slides[current].classList.remove('active');

        current = (current + 1) % slides.length;

        slides[current].classList.add('active');

    }, 5000);

});

/* ---------- Careers: file name preview + form submit (careers.html) ---------- */
document.addEventListener('DOMContentLoaded', () => {
  const fileInput = document.getElementById('cv-upload');
  const fileNameEl = document.getElementById('cv-filename');
  if (fileInput && fileNameEl) {
    fileInput.addEventListener('change', () => {
      fileNameEl.textContent = fileInput.files.length ? fileInput.files[0].name : '';
    });
  }

  const appForm = document.getElementById('application-form');
  if (appForm) {
    appForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const name = document.getElementById('app-name').value;
      const email = document.getElementById('app-email').value;
      const phone = document.getElementById('app-phone').value;
      const position = document.getElementById('app-position').value;
      const message = document.getElementById('app-message').value;

      const subject = encodeURIComponent('Candidature — ' + (position || 'Poste non précisé'));
      const body = encodeURIComponent(
        `Nom: ${name}\nEmail: ${email}\nTéléphone: ${phone}\nPoste souhaité: ${position}\n\nMessage:\n${message}\n\n(Merci de joindre votre CV en pièce jointe avant l'envoi.)`
      );
      window.location.href = `mailto:info@topimpexgroup.com?subject=${subject}&body=${body}`;
    });
  }
});

/* ---------- Contact form (contact.html) ---------- */
document.addEventListener('DOMContentLoaded', () => {
  const contactForm = document.getElementById('contact-form');
  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const name = document.getElementById('c-name').value;
      const email = document.getElementById('c-email').value;
      const subject = document.getElementById('c-subject').value;
      const message = document.getElementById('c-message').value;

      const mailSubject = encodeURIComponent(subject || 'Message depuis le site');
      const body = encodeURIComponent(`Nom: ${name}\nEmail: ${email}\n\nMessage:\n${message}`);
      window.location.href = `mailto:info@topimpexgroup.com?subject=${mailSubject}&body=${body}`;
    });
  }
});

/* ---------- Gallery lightbox (gallery.html) ---------- */
document.addEventListener('DOMContentLoaded', () => {
  const tiles = document.querySelectorAll('.gallery-tile');
  const lightbox = document.getElementById('lightbox');
  if (!tiles.length || !lightbox) return;

  const lbImg = lightbox.querySelector('img');
  const lbTitle = lightbox.querySelector('.lb-title');
  const lbDesc = lightbox.querySelector('.lb-desc');
  const lbClose = lightbox.querySelector('.lightbox-close');

  tiles.forEach((tile) => {
    tile.addEventListener('click', () => {
      lbImg.src = tile.dataset.full || tile.querySelector('img').src;
      lbTitle.textContent = tile.dataset.title || '';
      lbDesc.textContent = tile.dataset.desc || '';
      lightbox.classList.add('open');
    });
  });

  const closeLightbox = () => lightbox.classList.remove('open');
  lbClose.addEventListener('click', closeLightbox);
  lightbox.addEventListener('click', (e) => {
    if (e.target === lightbox) closeLightbox();
  });
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeLightbox();
  });
});

/* ---------- Quote multi-step form (quote.html) ---------- */
document.addEventListener('DOMContentLoaded', () => {
  const steps = document.querySelectorAll('.quote-step');
  const progressSteps = document.querySelectorAll('.qp-step');
  const progressLines = document.querySelectorAll('.qp-line');
  if (!steps.length) return;

  let current = 0;

  const showStep = (index) => {
    steps.forEach((s, i) => s.classList.toggle('active', i === index));
    progressSteps.forEach((s, i) => {
      s.classList.toggle('active', i === index);
      s.classList.toggle('done', i < index);
    });
    progressLines.forEach((l, i) => {
      l.classList.toggle('done', i < index);
    });
    if (index === steps.length - 1) fillSummary();
  };

  const validateStep = (index) => {
    const fields = steps[index].querySelectorAll('[required]');
    for (const f of fields) {
      if (!f.value.trim()) {
        f.focus();
        return false;
      }
    }
    return true;
  };

  document.querySelectorAll('.qs-next').forEach((btn) => {
    btn.addEventListener('click', () => {
      if (!validateStep(current)) return;
      if (current < steps.length - 1) {
        current++;
        showStep(current);
        document.querySelector('.quote-wrap').scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });

  document.querySelectorAll('.qs-back').forEach((btn) => {
    btn.addEventListener('click', () => {
      if (current > 0) {
        current--;
        showStep(current);
      }
    });
  });

  const fillSummary = () => {
    const get = (id) => { const el = document.getElementById(id); return el ? el.value : ''; };
    const map = {
      'qs-name': get('q-name'),
      'qs-company': get('q-company'),
      'qs-email': get('q-email'),
      'qs-phone': get('q-phone'),
      'qs-country': get('q-country'),
      'qs-service': get('q-service'),
      'qs-budget': get('q-budget') || '—',
      'qs-timeline': get('q-timeline') || '—',
      'qs-contact-method': get('q-contact-method'),
    };
    Object.keys(map).forEach((key) => {
      const el = document.getElementById(key);
      if (el) el.textContent = map[key] || '—';
    });
  };

  const quoteForm = document.getElementById('quote-form');
  if (quoteForm) {
    quoteForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const get = (id) => { const el = document.getElementById(id); return el ? el.value : ''; };
      const subject = encodeURIComponent('Demande de devis — ' + (get('q-service') || 'Service non précisé'));
      const body = encodeURIComponent(
        `Nom: ${get('q-name')}\n` +
        `Société: ${get('q-company')}\n` +
        `Email: ${get('q-email')}\n` +
        `Téléphone: ${get('q-phone')}\n` +
        `Pays: ${get('q-country')}\n` +
        `Service souhaité: ${get('q-service')}\n` +
        `Budget indicatif: ${get('q-budget')}\n` +
        `Délai souhaité: ${get('q-timeline')}\n` +
        `Moyen de contact préféré: ${get('q-contact-method')}\n\n` +
        `Description du projet:\n${get('q-description')}\n\n` +
        `(Merci de joindre vos plans / documents techniques en pièce jointe avant l'envoi.)`
      );
      window.location.href = `mailto:info@topimpexgroup.com?subject=${subject}&body=${body}`;
    });
  }

  showStep(0);
});

/* ---------- Generic file-drop preview (any page with .file-drop) ---------- */
document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.file-drop').forEach((drop) => {
    const input = drop.querySelector('input[type="file"]');
    const nameEl = drop.querySelector('.file-name');
    if (!input || !nameEl) return;
    input.addEventListener('change', () => {
      if (!input.files.length) { nameEl.textContent = ''; return; }
      const names = Array.from(input.files).map((f) => f.name);
      nameEl.textContent = names.join(', ');
    });
  });
});
