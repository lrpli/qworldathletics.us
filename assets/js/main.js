/* ============================================================
   Q World Athletics Inc. — Main JavaScript
   ============================================================ */

document.addEventListener('DOMContentLoaded', function () {

  // ---- Mobile Navigation Toggle ----
  const navToggle = document.querySelector('.nav-toggle');
  const navList = document.querySelector('.nav-list');
  const navOverlay = document.querySelector('.nav-overlay');
  const navLinks = document.querySelectorAll('.nav-list a');

  function closeNav() {
    navToggle && navToggle.classList.remove('active');
    navList && navList.classList.remove('active');
    navOverlay && navOverlay.classList.remove('active');
    document.body.style.overflow = '';
  }

  function openNav() {
    navToggle && navToggle.classList.add('active');
    navList && navList.classList.add('active');
    navOverlay && navOverlay.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  if (navToggle) {
    navToggle.addEventListener('click', function () {
      if (navList.classList.contains('active')) {
        closeNav();
      } else {
        openNav();
      }
    });
  }

  if (navOverlay) {
    navOverlay.addEventListener('click', closeNav);
  }

  navLinks.forEach(function (link) {
    link.addEventListener('click', closeNav);
  });

  // ---- Sticky Header Shadow ----
  const header = document.querySelector('.header');
  window.addEventListener('scroll', function () {
    if (window.scrollY > 10) {
      header && header.classList.add('scrolled');
    } else {
      header && header.classList.remove('scrolled');
    }
  });

  // ---- Back to Top Button ----
  const backToTop = document.querySelector('.back-to-top');
  if (backToTop) {
    window.addEventListener('scroll', function () {
      if (window.scrollY > 400) {
        backToTop.classList.add('show');
      } else {
        backToTop.classList.remove('show');
      }
    });

    backToTop.addEventListener('click', function () {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  // ---- Scroll Animations (IntersectionObserver) ----
  const animatedElements = document.querySelectorAll('.fade-in, .fade-in-left, .fade-in-right');
  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.15 });

    animatedElements.forEach(function (el) {
      observer.observe(el);
    });
  } else {
    // Fallback: show everything
    animatedElements.forEach(function (el) {
      el.classList.add('visible');
    });
  }

  // ---- Animated Counters ----
  const counters = document.querySelectorAll('[data-count]');
  if (counters.length > 0 && 'IntersectionObserver' in window) {
    const counterObserver = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          animateCounter(entry.target);
          counterObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.5 });

    counters.forEach(function (counter) {
      counterObserver.observe(counter);
    });
  }

  function animateCounter(el) {
    var target = parseInt(el.getAttribute('data-count'), 10);
    var suffix = el.getAttribute('data-suffix') || '';
    var duration = 2000;
    var startTime = null;

    function step(timestamp) {
      if (!startTime) startTime = timestamp;
      var progress = Math.min((timestamp - startTime) / duration, 1);
      // Ease out quad
      var easedProgress = 1 - (1 - progress) * (1 - progress);
      var current = Math.floor(easedProgress * target);
      el.textContent = current.toLocaleString() + suffix;
      if (progress < 1) {
        requestAnimationFrame(step);
      } else {
        el.textContent = target.toLocaleString() + suffix;
      }
    }
    requestAnimationFrame(step);
  }

  // ---- Active Nav Link ----
  var currentPage = window.location.pathname.split('/').pop() || 'index.html';
  navLinks.forEach(function (link) {
    var href = link.getAttribute('href');
    if (href === currentPage || (currentPage === '' && href === 'index.html')) {
      link.classList.add('active');
    }
  });

  // ---- Form Validation ----
  var forms = document.querySelectorAll('[data-validate]');
  forms.forEach(function (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var isValid = true;
      var fields = form.querySelectorAll('[required]');

      fields.forEach(function (field) {
        var errorEl = field.parentElement.querySelector('.form-error');
        field.classList.remove('error');
        if (errorEl) errorEl.classList.remove('show');

        if (!field.value.trim()) {
          isValid = false;
          field.classList.add('error');
          if (errorEl) errorEl.classList.add('show');
        } else if (field.type === 'email' && !isValidEmail(field.value)) {
          isValid = false;
          field.classList.add('error');
          if (errorEl) {
            errorEl.textContent = 'Please enter a valid email address.';
            errorEl.classList.add('show');
          }
        }
      });

      if (isValid) {
        // Show success message
        var formFields = form.querySelector('.form-fields');
        var formSuccess = form.querySelector('.form-success');
        if (formFields && formSuccess) {
          formFields.style.display = 'none';
          formSuccess.classList.add('show');
        }
      }
    });
  });

  function isValidEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  }

  // ---- Newsletter Form ----
  var newsletterForm = document.querySelector('.newsletter-form');
  if (newsletterForm) {
    newsletterForm.addEventListener('submit', function (e) {
      e.preventDefault();
      var input = newsletterForm.querySelector('input');
      if (input && isValidEmail(input.value)) {
        input.value = '';
        input.placeholder = 'Thank you for subscribing!';
        setTimeout(function () {
          input.placeholder = 'Your email address';
        }, 3000);
      }
    });
  }

});
