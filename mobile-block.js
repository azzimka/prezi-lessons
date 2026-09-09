(function () {
  var BREAKPOINT = 960; // px — меньше этого = телефон/планшет

  function inject() {
    var style = document.createElement('style');
    style.textContent = [
      '#mobile-wall {',
      '  display: none;',
      '  position: fixed; inset: 0; z-index: 99999;',
      '  background: #EEEEF8;',
      '  font-family: "Montserrat", "Helvetica Neue", sans-serif;',
      '  flex-direction: column;',
      '  align-items: center; justify-content: center;',
      '  padding: 32px; text-align: center;',
      '}',
      '#mobile-wall.visible { display: flex; }',

      '.mw-icon {',
      '  width: 72px; height: 72px; border-radius: 20px;',
      '  background: #0A0A0A;',
      '  display: flex; align-items: center; justify-content: center;',
      '  margin-bottom: 28px;',
      '}',

      '.mw-badge {',
      '  display: inline-flex; align-items: center; gap: 8px;',
      '  background: #0A0A0A; color: #fff;',
      '  font-size: 11px; font-weight: 700; letter-spacing: 0.15em; text-transform: uppercase;',
      '  padding: 7px 18px; border-radius: 100px; margin-bottom: 24px;',
      '}',
      '.mw-badge::before { content: "●"; color: #DFFF4F; font-size: 9px; }',

      '.mw-title {',
      '  font-size: 32px; font-weight: 900; letter-spacing: -0.02em;',
      '  text-transform: uppercase; color: #0A0A0A;',
      '  line-height: 1.1; margin-bottom: 16px;',
      '}',
      '.mw-title em {',
      '  font-style: italic; font-weight: 700;',
      '  font-family: "Playfair Display", Georgia, serif;',
      '  font-size: 36px;',
      '}',

      '.mw-accent { display: flex; align-items: center; justify-content: center; gap: 14px; margin-bottom: 20px; }',
      '.mw-line { height: 3px; border-radius: 2px; background: #DFFF4F; }',

      '.mw-text {',
      '  font-size: 15px; font-weight: 500; color: #888899;',
      '  max-width: 300px; line-height: 1.65; margin-bottom: 32px;',
      '}',

      '.mw-box {',
      '  background: #fff; border: 1.5px solid #E0E0EE;',
      '  border-radius: 18px; padding: 20px 28px;',
      '  display: flex; align-items: center; gap: 16px;',
      '  max-width: 320px;',
      '}',
      '.mw-box-icon {',
      '  width: 44px; height: 44px; border-radius: 12px;',
      '  background: #DFFF4F;',
      '  display: flex; align-items: center; justify-content: center;',
      '  flex-shrink: 0;',
      '}',
      '.mw-box-text { text-align: left; }',
      '.mw-box-label { font-size: 10px; font-weight: 700; letter-spacing: 0.14em; text-transform: uppercase; color: #888899; margin-bottom: 3px; }',
      '.mw-box-val   { font-size: 13px; font-weight: 800; color: #0A0A0A; letter-spacing: 0.02em; }'
    ].join('\n');
    document.head.appendChild(style);

    var wall = document.createElement('div');
    wall.id = 'mobile-wall';
    wall.innerHTML = [
      '<div class="mw-icon">',
      '  <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="#DFFF4F" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">',
      '    <rect x="2" y="3" width="20" height="14" rx="2"/><polyline points="8 21 12 17 16 21"/><line x1="2" y1="17" x2="22" y2="17"/>',
      '  </svg>',
      '</div>',

      '<div class="mw-badge">ВЕБ-КУРС · ТОЛЬКО ДЛЯ ПК</div>',

      '<div class="mw-title">ОТКРОЙ НА<br><em>компьютере</em></div>',

      '<div class="mw-accent">',
      '  <div class="mw-line" style="width:60px"></div>',
      '  <div class="mw-line" style="width:30px"></div>',
      '</div>',

      '<p class="mw-text">Презентации курса оптимизированы для большого экрана. Открой эту страницу на ноутбуке или компьютере.</p>',

      '<div class="mw-box">',
      '  <div class="mw-box-icon">',
      '    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#0A0A0A" stroke-width="2.5" stroke-linecap="round">',
      '      <polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/>',
      '    </svg>',
      '  </div>',
      '  <div class="mw-box-text">',
      '    <div class="mw-box-label">Рекомендуемый экран</div>',
      '    <div class="mw-box-val">1280px и шире</div>',
      '  </div>',
      '</div>'
    ].join('');

    document.body.appendChild(wall);

    function check() {
      if (window.innerWidth < BREAKPOINT) {
        wall.classList.add('visible');
        document.body.style.overflow = 'hidden';
      } else {
        wall.classList.remove('visible');
        document.body.style.overflow = '';
      }
    }

    check();
    window.addEventListener('resize', check);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', inject);
  } else {
    inject();
  }
})();
