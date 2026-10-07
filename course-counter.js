(function () {
  'use strict';

  /**
   * Склонение слова «урок» в зависимости от числа
   * @param {number} n
   * @returns {string}
   */
  function pluralizeLessons(n) {
    if (n <= 0) return 'Скоро';
    var abs = Math.abs(n) % 100;
    var rem = abs % 10;
    if (abs > 10 && abs < 20) return n + ' уроков';
    if (rem > 1 && rem < 5) return n + ' урока';
    if (rem === 1) return n + ' урок';
    return n + ' уроков';
  }

  // Резервные значения на случай строгого file:// протокола (когда браузер блокирует fetch)
  var FALLBACK_COUNTS = {
    1: 13,
    2: 0,
    3: 0,
    4: 0,
    5: 0,
    6: 0,
    7: 0
  };

  /**
   * Проверка наличия последующих уроков на диске (lesson-12, lesson-13...),
   * даже если они ещё не были добавлены в index.html месяца.
   */
  function probeNextLessons(monthNum, currentMax, currentCount) {
    var next = currentMax + 1;
    // Безопасный лимит проверок
    if (next > 40) return Promise.resolve(currentCount);

    return fetch('./month-' + monthNum + '/lesson-' + next + '/lesson-' + next + '.html', {
      method: 'HEAD',
      cache: 'no-cache'
    })
      .then(function (res) {
        if (res.ok) {
          return probeNextLessons(monthNum, next, currentCount + 1);
        }
        return currentCount;
      })
      .catch(function () {
        return currentCount;
      });
  }

  /**
   * 1. ГЛАВНАЯ СТРАНИЦА КУРСА (presentation/index.html)
   * Автоматически подсчитывает количество доступных уроков в каждом месяце,
   * обновляет бейджи на карточках и автоматически открывает модуль, если появился урок.
   */
  function initMainPage() {
    var cards = document.querySelectorAll('.months-grid .mcard');
    if (!cards.length) return;

    cards.forEach(function (card) {
      var numEl = card.querySelector('.mnum');
      if (!numEl) return;
      var monthNum = parseInt(numEl.textContent.trim(), 10);
      if (isNaN(monthNum)) return;

      var lessonsEl = card.querySelector('.mlessons');
      var arrowEl = card.querySelector('.marrow');
      var hasMonthIndex = false;

      // 1. Проверяем наличие month-X/index.html
      fetch('./month-' + monthNum + '/index.html', { cache: 'no-cache' })
        .then(function (res) {
          if (!res.ok) throw new Error('No month index');
          hasMonthIndex = true;
          return res.text();
        })
        .then(function (html) {
          var parser = new DOMParser();
          var doc = parser.parseFromString(html, 'text/html');
          var lessonNums = new Set();

          // Извлекаем все карточки уроков или ссылки вида lesson-Y.html
          doc.querySelectorAll('.lessons-grid .lcard, a[href*="lesson-"]').forEach(function (el) {
            var href = el.getAttribute('href') || '';
            var m = href.match(/lesson-(\d+)/);
            if (m) lessonNums.add(parseInt(m[1], 10));
          });

          var count = lessonNums.size;
          var maxInIndex = count > 0 ? Math.max.apply(null, Array.from(lessonNums)) : 0;

          // 2. Дополнительно зондируем уроки на диске (если файл создан, но в меню ещё не внесён)
          return probeNextLessons(monthNum, maxInIndex, count);
        })
        .catch(function () {
          // Если month-X/index.html отсутствует, проверяем уроки напрямую с 1-го
          return probeNextLessons(monthNum, 0, 0);
        })
        .then(function (finalCount) {
          // Если fetch заблокирован (например, открыто по file://), берем надежный fallback
          if (finalCount === 0 && FALLBACK_COUNTS[monthNum]) {
            finalCount = FALLBACK_COUNTS[monthNum];
          }

          if (finalCount > 0) {
            if (lessonsEl) {
              lessonsEl.textContent = pluralizeLessons(finalCount);
            }

            // Если модуль был заблокирован («Скоро»), открываем его
            if (card.classList.contains('locked')) {
              card.classList.remove('locked');
              var targetUrl = hasMonthIndex
                ? './month-' + monthNum + '/index.html'
                : './month-' + monthNum + '/lesson-1/lesson-1.html';
              card.setAttribute('href', targetUrl);
              if (arrowEl) {
                arrowEl.innerHTML = '→';
              }
            }
          }
        });
    });
  }

  /**
   * 2. СТРАНИЦА МЕСЯЦА (month-X/index.html)
   * Автоматически обновляет число уроков в шапке hero и заголовке секции
   * на основе реального количества карточек .lcard в сетке.
   */
  function initMonthPage() {
    var lessonsGrid = document.querySelector('.lessons-grid');
    if (!lessonsGrid) return;

    var cards = lessonsGrid.querySelectorAll('.lcard');
    var count = cards.length;

    var metaVal = document.querySelector('.hero-meta .meta-item-val:not(.sm)');
    var secCount = document.querySelector('.sec-count');

    if (count > 0) {
      if (metaVal) {
        metaVal.textContent = count;
      }
      if (secCount) {
        secCount.textContent = pluralizeLessons(count);
      }
    }
  }

  // Запуск логики
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', function () {
      initMainPage();
      initMonthPage();
    });
  } else {
    initMainPage();
    initMonthPage();
  }
})();
