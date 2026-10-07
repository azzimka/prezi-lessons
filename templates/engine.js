/**
 * engine.js — Каноничный JavaScript-движок презентации
 * Подключается в <script> перед закрывающим </body> в каждом уроке.
 * Включает: постраничную навигацию, клавиатуру, свайп, прогресс-бар и режим лупы (2x).
 */

(function () {
  const slides = Array.from(document.querySelectorAll('.slide'));
  const btnPrev = document.getElementById('btnPrev') || document.getElementById('prev');
  const btnNext = document.getElementById('btnNext') || document.getElementById('next');
  const btnLoupe = document.getElementById('btnLoupe');
  const progressBar = document.getElementById('bar');
  const total = slides.length;
  let current = 0;

  function updateUi() {
    slides.forEach((s, i) => {
      s.classList.toggle('active', i === current);
      s.setAttribute('aria-hidden', i === current ? 'false' : 'true');
    });
    if (btnPrev) btnPrev.disabled = current === 0;
    if (btnNext) btnNext.disabled = current === total - 1;
    if (progressBar) progressBar.style.width = ((current + 1) / total * 100) + '%';
    if (isLoupeActive) setTimeout(syncLoupeSlide, 40);
  }

  function goTo(index) {
    if (index < 0 || index >= total) return;
    const dir = index > current ? 1 : -1;
    const prev = current;

    if (slides[prev].classList.contains('animated')) {
      slides[prev].style.transition = 'opacity 0.4s ease, transform 0.4s cubic-bezier(0.4,0,0.2,1)';
      slides[prev].style.opacity = '0';
      slides[prev].style.transform = dir > 0 ? 'translateX(-80px)' : 'translateX(80px)';
      slides[prev].classList.remove('active');

      setTimeout(() => {
        slides[prev].style.transition = '';
        slides[prev].style.transform = 'translateX(80px)';
        slides[prev].style.opacity = '';
      }, 420);

      current = index;
      slides[current].style.transition = '';
      slides[current].style.transform = dir > 0 ? 'translateX(80px)' : 'translateX(-80px)';
      slides[current].style.opacity = '0';
      slides[current].classList.add('active');

      requestAnimationFrame(() => requestAnimationFrame(() => {
        slides[current].style.transition = 'opacity 0.4s ease, transform 0.4s cubic-bezier(0.4,0,0.2,1)';
        slides[current].style.transform = 'translateX(0)';
        slides[current].style.opacity = '1';
      }));
    } else {
      current = index;
    }

    updateUi();
  }

  function navigate(dir) {
    goTo(current + dir);
  }

  window.navigate = navigate;
  window.goTo = goTo;

  if (btnPrev) btnPrev.addEventListener('click', () => navigate(-1));
  if (btnNext) btnNext.addEventListener('click', () => navigate(1));

  /* ── LOUPE / MAGNIFIER MODE ── */
  const lens = document.getElementById('magnifierLens');
  const magnifierInner = document.getElementById('magnifierInner');
  const navBar = document.querySelector('.nav-bar') || document.querySelector('.nav');

  let isLoupeActive = false;
  const loupeRadius = 90; // 180px diameter / 2
  const loupeZoom = 2.0;
  let mouseX = window.innerWidth / 2;
  let mouseY = window.innerHeight / 2;
  let rafId = null;

  function syncLoupeSlide() {
    if (!isLoupeActive || !lens || !magnifierInner) return;
    const activeSlide = slides[current];
    magnifierInner.style.width = window.innerWidth + 'px';
    magnifierInner.style.height = window.innerHeight + 'px';
    magnifierInner.innerHTML = `
      <div class="${activeSlide.className}" style="opacity:1 !important;transform:none !important;position:absolute;inset:0;pointer-events:none;">
        ${activeSlide.innerHTML}
      </div>
    `;
  }

  function updateLoupeTransform() {
    rafId = null;
    if (!isLoupeActive || !lens || !magnifierInner) return;
    lens.style.transform = `translate3d(${mouseX - loupeRadius}px, ${mouseY - loupeRadius}px, 0)`;
    magnifierInner.style.transformOrigin = `${mouseX}px ${mouseY}px`;
    const tx = loupeRadius - mouseX;
    const ty = loupeRadius - mouseY;
    magnifierInner.style.transform = `translate3d(${tx}px, ${ty}px, 0) scale(${loupeZoom})`;
  }

  function toggleMagnifier() {
    if (!lens || !magnifierInner) return;
    isLoupeActive = !isLoupeActive;
    if (isLoupeActive) {
      document.body.classList.add('magnifier-mode');
      if (btnLoupe) btnLoupe.classList.add('active');
      lens.classList.add('active');
      lens.style.display = 'block';
      syncLoupeSlide();
      updateLoupeTransform();
    } else {
      document.body.classList.remove('magnifier-mode');
      if (btnLoupe) btnLoupe.classList.remove('active');
      lens.classList.remove('active');
      lens.style.display = 'none';
    }
  }

  window.toggleMagnifier = toggleMagnifier;
  if (btnLoupe) btnLoupe.addEventListener('click', toggleMagnifier);

  window.addEventListener('mousemove', e => {
    mouseX = e.clientX;
    mouseY = e.clientY;
    if (isLoupeActive && !rafId) {
      rafId = requestAnimationFrame(updateLoupeTransform);
    }
  });

  window.addEventListener('resize', () => {
    if (isLoupeActive) syncLoupeSlide();
  });

  if (navBar && lens) {
    navBar.addEventListener('mouseenter', () => {
      if (isLoupeActive) lens.style.display = 'none';
    });
    navBar.addEventListener('mouseleave', () => {
      if (isLoupeActive) lens.style.display = 'block';
    });
  }

  /* ── КЛАВИАТУРА ── */
  document.addEventListener('keydown', e => {
    if (e.key === 'ArrowRight' || e.key === 'ArrowDown' || e.key === 'PageDown') {
      e.preventDefault();
      navigate(1);
    }
    if (e.key === 'ArrowLeft' || e.key === 'ArrowUp' || e.key === 'PageUp') {
      e.preventDefault();
      navigate(-1);
    }
    if (e.key === 'Home') {
      e.preventDefault();
      goTo(0);
    }
    if (e.key === 'End') {
      e.preventDefault();
      goTo(total - 1);
    }
    if (['l', 'L', 'д', 'Д', 'z', 'Z'].includes(e.key)) {
      toggleMagnifier();
    }
    if (e.key === 'Escape' && isLoupeActive) {
      toggleMagnifier();
    }
  });

  /* ── TOUCH SWIPE ── */
  let touchStartX = 0;
  document.addEventListener('touchstart', e => {
    touchStartX = e.touches[0].clientX;
  }, { passive: true });
  document.addEventListener('touchend', e => {
    const dx = e.changedTouches[0].clientX - touchStartX;
    if (Math.abs(dx) > 50) navigate(dx < 0 ? 1 : -1);
  }, { passive: true });

  updateUi();
})();
