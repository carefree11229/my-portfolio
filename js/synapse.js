(function () {
  'use strict';

  var CHARS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+~|}{[]:;?><';

  function randChar() {
    return CHARS.charAt(Math.floor(Math.random() * CHARS.length));
  }

  function logoHTML() {
    var path = 'M 1.5,23 L 1.5,33 C 1.5,38.5 6,43 11.5,43 L 16.5,43 C 22,43 26.5,38.5 26.5,33 Q 28,28 33,26.5 C 38.5,26.5 43,22 43,16.5 L 43,11.5 C 43,6 38.5,1.5 33,1.5 L 23,1.5 Q 12,12 1.5,23 Z';
    return '<svg class="logo-svg" viewBox="-50 -50 100 100" aria-hidden="true">' +
      [0, 90, 180, 270].map(function (deg) {
        return '<g transform="rotate(' + deg + ')"><path fill="currentColor" d="' + path + '"/></g>';
      }).join('') + '</svg>';
  }

  var navLogoIcon = document.getElementById('navLogoIcon');
  var footerLogoIcon = document.getElementById('footerLogoIcon');
  if (navLogoIcon) navLogoIcon.innerHTML = logoHTML();
  if (footerLogoIcon) footerLogoIcon.innerHTML = logoHTML();

  var site = document.querySelector('.site');
  setTimeout(function () {
    if (site) site.classList.add('site-ready');
  }, 800);

  function scrambleIn(el, delay) {
    var original = el.getAttribute('data-text') || el.textContent || '';
    setTimeout(function () {
      var revealed = 0;
      var iv = setInterval(function () {
        revealed += 0.5;
        var html = '';
        for (var i = 0; i < original.length; i++) {
          if (original.charAt(i) === ' ') {
            html += ' ';
            continue;
          }
          if (i < Math.floor(revealed)) {
            html += original.charAt(i);
          } else if (i < Math.floor(revealed) + 3) {
            html += randChar();
          } else {
            html += '&nbsp;';
          }
        }
        el.innerHTML = html;
        if (revealed >= original.length) {
          clearInterval(iv);
          el.textContent = original;
        }
      }, 25);
    }, delay);
  }

  Array.prototype.slice.call(document.querySelectorAll('.hero-line')).forEach(function (el, i) {
    var delays = [200, 500, 700, 1000];
    scrambleIn(el, delays[i] || 1000);
  });

  function hoverScramble(el) {
    var original = el.getAttribute('data-text') || el.textContent || '';
    var frame = 0;
    var iv = null;

    function tick() {
      frame += 1;
      var limit = Math.min(original.length, Math.floor(frame / 4));
      var html = '';
      for (var i = 0; i < original.length; i++) {
        if (original.charAt(i) === ' ') {
          html += ' ';
        } else if (i < limit) {
          html += original.charAt(i);
        } else {
          html += randChar();
        }
      }
      el.innerHTML = html;
      if (limit >= original.length) {
        clearInterval(iv);
        el.textContent = original;
      }
    }

    el.addEventListener('mouseenter', function () {
      if (iv) clearInterval(iv);
      frame = 0;
      iv = setInterval(tick, 25);
    });
    el.addEventListener('mouseleave', function () {
      if (iv) clearInterval(iv);
      el.textContent = original;
    });
  }

  Array.prototype.slice.call(document.querySelectorAll('[data-scramble]')).forEach(hoverScramble);

  var navToggle = document.getElementById('navToggle');
  if (navToggle) {
    navToggle.addEventListener('click', function () {
      var open = site.classList.toggle('nav-open');
      navToggle.setAttribute('aria-expanded', open ? 'true' : 'false');
      navToggle.setAttribute('aria-label', open ? '关闭菜单' : '打开菜单');
    });
  }

  var heroVideo = document.getElementById('heroVideo');
  if (heroVideo) {
    var seeking = false;
    var heroLoaded = false;
    heroVideo.muted = true;

    function loadHeroVideo() {
      if (heroLoaded) return;
      heroLoaded = true;
      heroVideo.preload = 'auto';
      try { heroVideo.load(); } catch (e) {}
    }

    heroVideo.addEventListener('loadedmetadata', function () {
      heroVideo.currentTime = 0;
    });
    heroVideo.addEventListener('seeked', function () {
      seeking = false;
    });

    window.addEventListener('mousemove', function (e) {
      if (!heroVideo.duration || heroVideo.readyState < 1 || seeking) return;
      var delta = e.movementX || 0;
      if (!delta) return;
      var next = heroVideo.currentTime + delta * 0.008;
      next = Math.max(0, Math.min(heroVideo.duration - 0.05, next));
      seeking = true;
      heroVideo.currentTime = next;
    }, { passive: true });

    window.addEventListener('mousemove', loadHeroVideo, { passive: true });
    window.addEventListener('touchstart', loadHeroVideo, { passive: true });
    window.addEventListener('scroll', loadHeroVideo, { passive: true });
    setTimeout(loadHeroVideo, 3500);
  }

  var cinema = document.getElementById('about');
  var cinemaInner = document.getElementById('cinemaInner');

  function updateCinema() {
    if (!cinema || !cinemaInner) return;
    var rect = cinema.getBoundingClientRect();
    var vh = window.innerHeight;
    var progress = (vh - rect.top) / (rect.height + vh);
    progress = Math.max(0, Math.min(1, progress));
    var y = 60 + progress * -180;
    var opacity = Math.min(1, Math.max(0, (progress - 0.3) / 0.2));
    cinemaInner.style.transform = 'perspective(400px) rotateX(24deg) translateY(' + y + 'px) translateZ(15px)';
    cinemaInner.style.opacity = String(opacity);
  }

  window.addEventListener('scroll', updateCinema, { passive: true });
  window.addEventListener('resize', updateCinema);
  updateCinema();

  var revealIO = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        revealIO.unobserve(entry.target);
      }
    });
  }, { threshold: 0.18 });

  Array.prototype.slice.call(document.querySelectorAll('.reveal')).forEach(function (el) {
    revealIO.observe(el);
  });
})();
