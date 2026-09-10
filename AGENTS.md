# AGENTS.md — Инструкция по созданию презентаций

> Этот файл содержит **обязательные правила** для всех AI-агентов, которые генерируют
> HTML-презентации для курса. Читай внимательно перед началом работы.

---

## 1. ОБЩИЕ ПРАВИЛА

- **ИМЕНОВАНИЕ ФАЙЛОВ УРОКОВ (СТРОГО И ОБЯЗАТЕЛЬНО)**:
  - Каждый урок называется строго **`lesson-Y.html`** и лежит в папке `month-X/lesson-Y/` (например: `month-1/lesson-1/lesson-1.html`, `month-1/lesson-2/lesson-2.html`).
  - ❌ **СТРОГО ЗАПРЕЩЕНО называть файлы уроков `index.html`** внутри папок `lesson-Y/`!
  - `index.html` используется **только** на верхних уровнях: в корне проекта (`presentation/index.html`) и в папке каждого месяца (`month-X/index.html`) как страницы навигации и меню.
- Презентация должна быть полностью **self-contained** (всё в одном файле)
- **Не использовать внешние JS-библиотеки** (Reveal.js и т.п.)
- Навигация: клавиши `←` `→`, кнопки на экране, свайп на touch-устройствах
- Шрифты грузить через Google Fonts (embed в `<head>`)
- **ТОН ПОВЕСТВОВАНИЯ (ВАЖНО)**: Презентация ведётся **от лица преподавателя** (пользователя) напрямую к ученику.
  - ❌ ЗАПРЕЩЕНО писать от 3-го лица: «Вместе с преподавателем», «Ученик делает задание», «Учитель объясняет».
  - ✅ ПИСАТЬ НАПРЯМУЮ: «Сейчас мы вместе сверстаем...», «Практикуемся вместе», «А теперь твоя очередь!».
- **ЗАПРЕТ НА ДАТУ И ВРЕМЯ (СТРОГО И ОБЯЗАТЕЛЬНО)**:
  - ❌ **ЗАПРЕЩЕНО указывать дату и время** на презентациях (никаких дат публикации вроде «07 сентября 2026 г.», дат в шапках слайдов, текущего времени или привязок к конкретному году).
  - Презентации должны быть **универсальными и вечно актуальными** для любых потоков и годов обучения.
  - В правом верхнем углу слайда (`header-right`) указывается **ТОЛЬКО название урока / модуль**, строго БЕЗ даты и времени.
- **AGENDA НА ТИТУЛЬНОМ СЛАЙДЕ (СТРОГО И ОБЯЗАТЕЛЬНО)**:
  - На первом (титульном) слайде каждой презентации в нижней части **ОБЯЗАТЕЛЬНО размещается блок Agenda (План урока / «Что мы сегодня изучим»)**.
  - Это красиво заполняет пространство внизу титульного слайда и сразу показывает ученику карту занятия: плашка `LESSON X · AGENDA` + заголовок `Что мы сегодня изучим:` + сетка из 3–4 карточек с ключевыми этапами урока.
  - В каждой карточке пишется номер (`01`, `02`, `03`, `04`) на жёлтом фоне и лаконичная формулировка темы.
- **РЕЖИМ ЛУПЫ-УКАЗКИ (LOUPE MODE — ОБЯЗАТЕЛЬНО)**:
  - В каждой презентации встроен интерактивный режим экранной лупы-указки для преподавателя.
  - **Активация**: клавиша `L` (или `Z`, работает и на русской раскладке `Д`), а также отдельная кнопка с иконкой лупы в панели навигации (`.nav-bar`). Выход — повторное нажатие `L` или `Esc`.
  - **Параметры**: радиус ~45px (~1 см на экране), зум `2.0x`.
  - **Поведение**: курсор скрывается, его заменяет увеличивающая круглая линза с ярким акцентным ободком (`--yellow` + `--black`) и точечным прицелом (маркер 6px) строго по центру. Преподаватель может наводить её на отдельные слова, теги, атрибуты и фрагменты кода, используя её как точную указку с мгновенным увеличением.
- **СТРОГИЙ ЗАПРЕТ НА СИСТЕМНЫЕ ЭМОДЗИ (NO SYSTEM EMOJIS — СТРОГО И ОБЯЗАТЕЛЬНО)**:
  - ❌ **СТРОГО ЗАПРЕЩЕНО использовать системные эмодзи** (`🔍`, `&#128269;`, `💻`, `🚀`, `💡`, `📌`, `🔥` и т.п.) в интерфейсе, кнопках навигации и на слайдах! В разных операционных системах (macOS, Windows, Linux, мобильные устройства) системные эмодзи рендерятся непредсказуемо, ломают аккуратный стиль, выглядят непрофессионально и нарушают цветовую палитру.
  - ✅ **ВСЕ иконки, иллюстрации и логотипы мы создаём сами**:
    - Через инструмент `generate_image` (генерация уникальных картинок и иконок).
    - Либо чистый inline SVG в фирменных цветах (`--black`, `--yellow`, stroke/fill).
  - **ОБЩИЕ АССЕТЫ ПРОЕКТА (`/assets/icons/`)**:
    - Глобальные иконки и логотипы, которые используются во всех уроках (например, кастомная иконка лупы `loupe.png`), хранятся в корне проекта в общей папке `assets/icons/`.
    - Подключение из любого урока: `<img src="../../assets/icons/loupe.png" class="nav-btn-icon" alt="Лупа">` (также допускается локальная копия `img/loupe.png`).
- **Генерировать изображения** через инструмент `generate_image` если нужны:
  - Логотипы программ (VS Code, Sublime Text, WebStorm и т.д.)
  - Иконки интерфейса (кнопки, лупы, бейджи)
  - Иллюстрации концепций
  - Фото рабочей атмосферы разработчика
  - Общие ассеты сохранять в `/assets/icons/`, а материалы конкретного урока — в папку урока (`month-X/lesson-Y/img/`) и подключать через `<img src="...">`

---

## 2. ЦВЕТОВАЯ ПАЛИТРА

```
/* Основные цвета — ОБЯЗАТЕЛЬНО использовать именно эти */

--bg-page:     #EEEEF8;   /* Светло-лавандовый — фон всей страницы */
--bg-slide:    #EEEEF8;   /* Тот же фон у слайдов */
--white:       #FFFFFF;   /* Белый — фон карточек, блоков */
--black:       #0A0A0A;   /* Почти чёрный — основной текст, заголовки */

/* Акцентные цвета */
--yellow:      #DFFF4F;   /* Яркий жёлто-лаймовый — главный акцент */
--purple-soft: #C8B8F0;   /* Мягкий фиолетовый — второй акцент */
--beige:       #EDE8D8;   /* Светлый бежевый — нейтральные карточки */
--dark-card:   #0A0A0A;   /* Чёрный — для контрастных карточек */

/* Вспомогательные */
--border:      #E0E0EE;   /* Граница карточек */
--text-body:   #1A1A1A;   /* Основной текст */
--text-muted:  #888899;   /* Приглушённый текст (метаданные, подписи) */
--text-label:  #555566;   /* Маленькие заглавные лейблы */
```

### Правила применения цветов
- **Жёлтый** (`--yellow`) — декоративные горизонтальные линии на титуле, номера активных карточек, статы
- **Мягкий фиолетовый** (`--purple-soft`) — фон некоторых карточек (чередовать с белым и бежевым)
- **Чёрный** (`--dark-card`) — акцентная карточка (последняя или самая важная в сетке)
- **Белый** — фон основных карточек с тонкой границей
- Фон всей страницы и слайдов — всегда `--bg-page` (лавандовый)

---

## 3. ТИПОГРАФИКА

### Подключение шрифтов (вставлять в `<head>`)
```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,700;0,900;1,700;1,900&family=Montserrat:wght@400;500;600;700;800;900&display=swap" rel="stylesheet">
```

### Роли шрифтов
| Роль | Шрифт | Пример применения |
|------|-------|-------------------|
| Главный декоративный заголовок | `Playfair Display`, italic 700–900 | «ВЕБ-РАЗРАБОТКУ» на титуле |
| Обычные крупные заголовки | `Montserrat`, 800–900, uppercase | «ВВЕДЕНИЕ В», «СОДЕРЖАНИЕ КУРСА» |
| Акцентное слово (напр. «HTML») | `Montserrat`, 900, uppercase, обычное | «HTML» в заголовке |
| Подзаголовки секций | `Montserrat`, 700, uppercase | «ЧТО ЭТО ТАКОЕ», «ЗАЧЕМ ОН НУЖЕН» |
| Тело / параграфы | `Montserrat`, 400–500 | Описательный текст |
| Маленькие лейблы | `Montserrat`, 600, uppercase, letter-spacing: 2px | «ОСНОВНОЙ ИНСТРУМЕНТАРИЙ», «ФОРМАТ ОБУЧЕНИЯ» |
| Метаданные / footer | `Montserrat`, 400, uppercase, letter-spacing: 1.5px | «УЧЕБНЫЙ МОДУЛЬ · СТРАНИЦА 02» |

### Правила типографики
- **Заголовки** — всегда `letter-spacing: -0.02em` (плотно)
- **Лейблы / категории** — всегда `letter-spacing: 0.12em` или `0.15em` (широко)
- Цвет текста: `--black` или `#1A1A1A` — никакого серого для основного контента
- **Размеры (УВЕЛИЧЕННЫЕ ДЛЯ ДОСТУПНОСТИ)**:
  - Главный заголовок титула: `100px–130px`
  - H2 слайда: `64px–72px`
  - Подзаголовок секции: `18px–20px`, uppercase, muted
  - Тело текста (body): `22px–26px` (очень крупно)
  - Метаданные (Header/Footer): `16px–18px`
  - Лейблы на карточках: `16px–20px`

---

## 4. ОБЩИЙ LAYOUT СЛАЙДА

```
┌─────────────────────────────────────────────────────────┐
│  HEADER (высота ~60px)                                  │
│  ≡  НАЗВАНИЕ КУРСА        [название урока]              │
├─────────────────────────────────────────────────────────┤
│                                                         │
│                    CONTENT AREA                         │
│                  (padding: 48px 72px)                   │
│                                                         │
├─────────────────────────────────────────────────────────┤
│  FOOTER (высота ~40px)                                  │
│  УЧЕБНЫЙ МОДУЛЬ · РАЗДЕЛ           СТРАНИЦА 01 / 09     │
└─────────────────────────────────────────────────────────┘
```

### Header (обязателен на каждом слайде кроме Title)
```html
<header class="slide-header">
  <div class="header-brand">
    <span class="burger-icon">≡</span>
    <div>
      <div class="brand-title">ВЕБ-КУРС</div>
      <div class="brand-sub">ОСНОВЫ РАЗРАБОТКИ</div>
    </div>
  </div>
  <div class="header-right">
    <div class="header-lesson">НАЗВАНИЕ УРОКА · МЕСЯЦ 1</div>
  </div>
</header>
```

### Footer (обязателен на каждом слайде кроме Title)
```html
<footer class="slide-footer">
  <span>УЧЕБНЫЙ МОДУЛЬ · ОСНОВЫ ФРОНТЕНД-РАЗРАБОТКИ</span>
  <span>СТРАНИЦА 01</span>
</footer>
```

---

## 5. ТИПЫ СЛАЙДОВ

### 5.1 TITLE SLIDE (Титульный)
**Структура:**
- Верхний левый: `≡ НАЗВАНИЕ КУРСА / подзаголовок`
- Верхний правый: `ФОРМАТ ОБУЧЕНИЯ / ПРАКТИЧЕСКИЙ КУРС` (или тема/модуль, **СТРОГО БЕЗ дат и времени**)
- Центр: тег-пилюля с темой → большой заголовок → жёлтые линии по бокам → подзаголовок
- **Нижний блок Agenda (ОБЯЗАТЕЛЬНО)**: карточка с планом урока `LESSON X · AGENDA` + `Что мы сегодня изучим:` + сетка из 3–4 карточек с номерами и темами. Красиво заполняет нижнюю треть слайда!
- Нижний левый: `ID КУРСА / код` (например: `WEB-HTML-DEV`, без года)
- Нижний правый: слоган (`ИЗУЧАЙ. КОД. СОЗДАВАЙ.`) + жёлтые акцентные штрихи
- Декоративные полые круги в правом углу (opacity ~0.15)

**HTML-разметка титульного слайда с Agenda:**
```html
<div class="slide s-title active" data-index="0">
  <div class="deco-circles">
    <div class="deco-circle-lg"></div>
    <div class="deco-circle-sm"></div>
  </div>
  
  <div class="title-top">
    <div class="title-brand">
      <div class="burger"><span></span><span></span><span></span></div>
      <div>
        <div class="title-brand-name">ВЕБ-КУРС</div>
        <div class="title-brand-sub">ОСНОВЫ РАЗРАБОТКИ</div>
      </div>
    </div>
    <div>
      <div class="title-date-label">ФОРМАТ ОБУЧЕНИЯ</div>
      <div class="title-date-val">ПРАКТИЧЕСКИЙ КУРС</div>
    </div>
  </div>

  <div class="title-center">
    <div class="title-badge">ИНСТРУМЕНТЫ И ПРАКТИКА HTML</div>
    <div class="title-main-line">РЕДАКТОРЫ</div>
    <div class="accent-lines-row">
      <div class="accent-line"></div>
      <div class="title-italic-line">кода</div>
      <div class="accent-line"></div>
    </div>
    <div class="title-third-line">И <span class="title-accent-word">VS CODE</span></div>
    <div class="title-subtitle">Первый шаг в профессию веб-разработчика</div>

    <!-- ОБЯЗАТЕЛЬНЫЙ БЛОК AGENDA -->
    <div class="title-agenda">
      <div class="agenda-header">
        <span class="agenda-pill">LESSON 1 · AGENDA</span>
        <span class="agenda-caption">Что мы сегодня изучим:</span>
      </div>
      <div class="agenda-grid">
        <div class="agenda-card">
          <span class="agenda-num">01</span>
          <div class="agenda-text">Что такое редактор кода и 3 вида</div>
        </div>
        <div class="agenda-card">
          <span class="agenda-num">02</span>
          <div class="agenda-text">Почему выбираем VS Code</div>
        </div>
        <div class="agenda-card">
          <span class="agenda-num">03</span>
          <div class="agenda-text">Скелет и структура тегов HTML</div>
        </div>
        <div class="agenda-card">
          <span class="agenda-num">04</span>
          <div class="agenda-text">Практика: киноафиша и меню</div>
        </div>
      </div>
    </div>
  </div>

  <div class="title-bottom">
    <div>
      <div class="title-id-label">ID КУРСА</div>
      <div class="title-id-val">WEB-HTML-DEV</div>
    </div>
    <div style="display:flex;align-items:center;gap:20px;">
      <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#0A0A0A" stroke-width="2.5" stroke-linecap="round">
        <polyline points="16 18 22 12 16 6"></polyline>
        <polyline points="8 6 2 12 8 18"></polyline>
      </svg>
      <div>
        <div class="title-slogan">ИЗУЧАЙ. КОД. СОЗДАВАЙ.</div>
        <div class="title-slogan-accents">
          <div class="slogan-dash"></div>
          <div class="slogan-dash-sm"></div>
        </div>
      </div>
    </div>
  </div>
</div>
```

**Ключевые CSS-элементы титульного слайда:**
```css
.title-badge {
  background: #0A0A0A;
  color: #FFFFFF;
  border-radius: 100px;
  padding: 8px 24px;
  font-size: 13px;
  font-family: 'Montserrat', sans-serif;
  font-weight: 700;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  display: inline-flex;
  align-items: center;
  gap: 10px;
}
.title-badge::before { content: '●'; color: #DFFF4F; }

.title-main-line {      /* «ВВЕДЕНИЕ В» */
  font-family: 'Montserrat', sans-serif;
  font-weight: 900;
  font-size: 80px;
  letter-spacing: -0.02em;
  text-transform: uppercase;
  color: #0A0A0A;
}
.title-italic-line {    /* «ВЕБ-РАЗРАБОТКУ» */
  font-family: 'Playfair Display', serif;
  font-weight: 700;
  font-style: italic;
  font-size: 88px;
  letter-spacing: -0.02em;
  color: #0A0A0A;
}
.title-accent-word {    /* «HTML» */
  font-family: 'Montserrat', sans-serif;
  font-weight: 900;
}
.accent-lines {         /* жёлтые горизонтальные линии */
  display: flex;
  align-items: center;
  gap: 16px;
}
.accent-line {
  height: 4px;
  width: 80px;
  background: #DFFF4F;
}
.deco-circle {          /* декоративный полый круг */
  width: 260px; height: 260px;
  border: 2px solid rgba(10,10,10,0.1);
  border-radius: 50%;
  position: absolute;
}

/* Agenda на титульном слайде */
.title-agenda {
  width: 100%; max-width: 1360px;
  background: #FFFFFF; border: 2px solid #E0E0EE; border-radius: 22px;
  padding: 16px 24px; margin-top: 14px;
  box-shadow: 0 10px 30px rgba(10, 10, 10, 0.04);
  display: flex; flex-direction: column; gap: 12px;
}
.agenda-header { display: flex; align-items: center; gap: 14px; }
.agenda-pill {
  background: #0A0A0A; color: #FFFFFF;
  font-size: 13px; font-weight: 800; letter-spacing: 0.12em; text-transform: uppercase;
  padding: 6px 16px; border-radius: 100px;
  display: inline-flex; align-items: center; gap: 8px;
}
.agenda-pill::before { content: '●'; color: #DFFF4F; font-size: 11px; }
.agenda-caption {
  font-size: 16px; font-weight: 800; color: #555566;
  letter-spacing: 0.08em; text-transform: uppercase;
}
.agenda-grid {
  display: grid; grid-template-columns: repeat(4, 1fr); gap: 14px;
}
.agenda-card {
  background: #EEEEF8; border: 1.5px solid #E0E0EE; border-radius: 14px;
  padding: 12px 16px; display: flex; align-items: center; gap: 14px;
}
.agenda-num {
  font-size: 16px; font-weight: 900; color: #0A0A0A;
  background: #DFFF4F; width: 34px; height: 34px; border-radius: 10px;
  display: flex; align-items: center; justify-content: center; flex-shrink: 0;
}
.agenda-text {
  font-size: 15px; font-weight: 700; color: #0A0A0A; line-height: 1.35;
}
```

---

### 5.2 TABLE OF CONTENTS (Содержание)
**Структура:**
- Header стандартный
- Заголовок: `≡ СОДЕРЖАНИЕ КУРСА`
- Сетка: 2 колонки × N строк карточек
- Каждая карточка: номер (`01`) + текст темы
- Цвета чередуются: белый → жёлтый → белый → бежевый → белый → фиолетовый → жёлтый → чёрный

```css
.toc-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 12px;
}
.toc-item {
  display: flex;
  align-items: center;
  gap: 20px;
  padding: 20px 28px;
  border-radius: 14px;
  font-family: 'Montserrat', sans-serif;
  font-weight: 700;
  font-size: 14px;
  letter-spacing: 0.05em;
  text-transform: uppercase;
}
.toc-num {
  font-size: 16px;
  font-weight: 800;
  min-width: 28px;
}
/* Цвета карточек TOC */
.toc-white  { background: #FFFFFF; border: 1px solid #E0E0EE; }
.toc-yellow { background: #DFFF4F; }
.toc-beige  { background: #EDE8D8; border: 1px solid #E0D8C0; }
.toc-purple { background: #C8B8F0; }
.toc-black  { background: #0A0A0A; color: #FFFFFF; }
```

---

### 5.3 CONTENT SLIDE (Контентный — основной тип)
**Структура:** 2 колонки
- Левая (~50%): белая/лавандовая карточка с большим заголовком + секции текста
- Правая (~46%): фото (реальное или сгенерированное) + цветная карточка с тегами/статами

```
┌──────────────────┬──────────────────┐
│ Лейбл секции     │  [ФОТО]          │
│                  │  [подпись фото]  │
│  Большой         ├──────────────────┤
│  Заголовок       │                  │
│                  │  Жёлтая карточка │
│  ЧТО ЭТО ТАКОЕ   │  с тегами/пилюля │
│  текст текст     │                  │
│                  │                  │
│  ЗАЧЕМ ОН НУЖЕН  │                  │
│  текст текст     │                  │
└──────────────────┴──────────────────┘
```

```css
.content-card-left {
  background: rgba(200, 184, 240, 0.15); /* очень лёгкий фиолетовый */
  border-radius: 20px;
  padding: 40px;
}
.content-section-label {
  font-family: 'Montserrat', sans-serif;
  font-weight: 700;
  font-size: 11px;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  color: #888899;
  margin-bottom: 16px;
}
.content-h2 {
  font-family: 'Playfair Display', serif;
  font-weight: 700;
  font-size: 52px;
  line-height: 1.1;
  color: #0A0A0A;
  margin-bottom: 28px;
}
.content-section-title {
  font-family: 'Montserrat', sans-serif;
  font-weight: 700;
  font-size: 13px;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: #0A0A0A;
  margin-bottom: 8px;
}
.content-body {
  font-family: 'Montserrat', sans-serif;
  font-weight: 400;
  font-size: 15px;
  line-height: 1.7;
  color: #1A1A1A;
}
/* Подчёркнутый акцент в теле текста */
.text-underline {
  text-decoration: underline;
  text-decoration-style: solid;
  text-underline-offset: 3px;
}

/* Правая часть — фото */
.photo-card {
  border-radius: 20px;
  overflow: hidden;
  position: relative;
}
.photo-card img { width: 100%; height: 100%; object-fit: cover; }
.photo-label {
  position: absolute;
  bottom: 12px; left: 12px;
  background: #FFFFFF;
  padding: 6px 14px;
  border-radius: 8px;
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 0.1em;
  text-transform: uppercase;
}

/* Жёлтая карточка тегов */
.tags-card {
  background: #DFFF4F;
  border-radius: 20px;
  padding: 24px;
}
.tags-label {
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: #555566;
  margin-bottom: 16px;
}
.tag-pill {
  display: inline-block;
  background: rgba(255,255,255,0.7);
  border-radius: 100px;
  padding: 8px 20px;
  font-size: 14px;
  font-weight: 600;
  color: #0A0A0A;
  margin: 4px;
}
```

---

### 5.4 STATS SLIDE (Со статистикой/числами)
**Структура:** 2 колонки
- Левая: белая/фиолетовая карточка с текстом
- Правая: сетка 2×2 из цветных карточек со статами + фото внизу

```css
.stat-card {
  border-radius: 20px;
  padding: 28px;
  position: relative;
}
.stat-card.yellow { background: #DFFF4F; }
.stat-card.purple { background: #C8B8F0; }
.stat-value {
  font-family: 'Montserrat', sans-serif;
  font-weight: 900;
  font-size: 48px;
  line-height: 1;
  color: #0A0A0A;
}
.stat-label {
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: #555566;
  margin-bottom: 12px;
}
.stat-desc {
  font-size: 14px;
  font-weight: 500;
  line-height: 1.5;
  color: #1A1A1A;
  margin-top: 12px;
}
.stat-footnote {
  font-size: 11px;
  color: #888899;
  position: absolute;
  bottom: 16px; left: 28px;
  text-transform: uppercase;
  letter-spacing: 0.08em;
}
```

---

### 5.5 THREE-COLUMN INFO SLIDE (Три иконки + блоки)
**Структура:**
- Header
- Центральный подзаголовок (italic, маленький)
- Три колонки с иконкой + текстом (в белой карточке)
- Два блока внизу: левый фиолетовый (текст) + правый жёлтый (статы)

```css
.three-col-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
}
.icon-col { text-align: center; }
.icon-symbol {
  font-size: 32px;
  margin-bottom: 16px;
  display: block;
  color: #0A0A0A;
}
/* Иконки текстовые (не emoji): используй SVG или unicode */
/* </> для кода,  для ссылки,  >_ для терминала */

.bottom-two {
  display: grid;
  grid-template-columns: 1.4fr 1fr;
  gap: 16px;
  margin-top: 20px;
}
.bottom-purple { background: #C8B8F0; border-radius: 16px; padding: 28px; }
.bottom-yellow  { background: #DFFF4F; border-radius: 16px; padding: 28px; }
```

---

## 6. КОМПОНЕНТЫ-АТОМЫ

### Burger icon (логотип / брендинг)
```html
<div class="burger-icon">
  <span></span><span></span><span></span>
</div>
```
```css
.burger-icon { display: flex; flex-direction: column; gap: 4px; }
.burger-icon span { display: block; width: 22px; height: 3px; background: #0A0A0A; }
```

### Pill-badge (тег-пилюля)
```css
.pill-badge {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  background: #0A0A0A;
  color: #FFFFFF;
  border-radius: 100px;
  padding: 8px 24px;
  font-size: 12px;
  font-weight: 700;
  letter-spacing: 0.15em;
  text-transform: uppercase;
}
```

### Accent lines (жёлтые линии на титуле)
```html
<div class="accent-lines-row">
  <div class="accent-line"></div>
  <h1 class="title-italic-line">ВЕБ-РАЗРАБОТКУ</h1>
  <div class="accent-line"></div>
</div>
```
```css
.accent-lines-row { display: flex; align-items: center; gap: 20px; }
.accent-line { height: 4px; width: 80px; background: #DFFF4F; flex-shrink: 0; }
```

### Decorative circles (полые круги на титуле)
```css
.deco-circles { position: absolute; top: 20px; right: 60px; }
.deco-circle-lg {
  width: 280px; height: 280px;
  border: 1.5px solid rgba(10,10,10,0.12);
  border-radius: 50%;
}
.deco-circle-sm {
  width: 180px; height: 180px;
  border: 1.5px solid rgba(10,10,10,0.08);
  border-radius: 50%;
  position: absolute;
  top: 50px; left: 50px;
}
```

---

## 7. ШАБЛОН CSS-БАЗЫ (начинать каждый файл с этого)

```css
*, *::before, *::after { margin: 0; padding: 0; box-sizing: border-box; }

:root {
  --bg:          #EEEEF8;
  --white:       #FFFFFF;
  --black:       #0A0A0A;
  --yellow:      #DFFF4F;
  --purple-soft: #C8B8F0;
  --beige:       #EDE8D8;
  --border:      #E0E0EE;
  --text:        #1A1A1A;
  --muted:       #888899;
  --label:       #555566;
}

body {
  background: var(--bg);
  font-family: 'Montserrat', sans-serif;
  height: 100vh;
  overflow: hidden;
  display: flex;
  flex-direction: column;
}

.viewport { flex: 1; position: relative; overflow: hidden; }

.slide {
  position: absolute;
  inset: 0;
  opacity: 0;
  transform: translateX(60px);
  transition: opacity 0.4s ease, transform 0.4s cubic-bezier(0.4,0,0.2,1);
  pointer-events: none;
  display: flex;
  flex-direction: column;
  padding: 0;
}
.slide.active   { opacity: 1; transform: translateX(0);    pointer-events: all; }
.slide.exit     { opacity: 0; transform: translateX(-60px); }

/* HEADER */
.slide-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  padding: 24px 48px 0;
}
.header-brand { display: flex; align-items: center; gap: 14px; }
.brand-title  { font-weight: 800; font-size: 15px; letter-spacing: 0.05em; text-transform: uppercase; }
.brand-sub    { font-weight: 500; font-size: 11px; letter-spacing: 0.12em; text-transform: uppercase; color: var(--muted); }
.header-right { text-align: right; }
.header-lesson{ font-size: 13px; font-weight: 700; letter-spacing: 0.1em; text-transform: uppercase; color: var(--text); }

/* CONTENT AREA — ОБЯЗАТЕЛЕН отступ снизу (padding-bottom: 20px), чтобы карточки контента не прилипали к футеру! */
.slide-content { flex: 1; padding: 14px 56px 20px; display: flex; align-items: center; overflow: hidden; min-height: 0; }

/* FOOTER
   ⚠️ padding-right ОБЯЗАТЕЛЬНО минимум 260px, чтобы текст не перекрывался кнопками навигации!
   Расчёт: 3 кнопки × 58px + 2 промежутка × 12px + right-offset 36px = 234px → берём 260px с запасом.
   Если поставить меньше — правый текст (СТРАНИЦА XX / YY) уйдёт под кнопки. */
.slide-footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px 260px 24px 56px;
  font-size: 16px;
  font-weight: 600;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--muted);
  flex-shrink: 0;
}

/* TITLE AGENDA BLOCK */
.title-agenda {
  width: 100%; max-width: 1360px;
  background: var(--white); border: 2px solid var(--border); border-radius: 22px;
  padding: 16px 24px; margin-top: 14px;
  box-shadow: 0 10px 30px rgba(10, 10, 10, 0.04);
  display: flex; flex-direction: column; gap: 12px;
}
.agenda-header { display: flex; align-items: center; gap: 14px; }
.agenda-pill {
  background: var(--black); color: var(--white);
  font-size: 13px; font-weight: 800; letter-spacing: 0.12em; text-transform: uppercase;
  padding: 6px 16px; border-radius: 100px;
  display: inline-flex; align-items: center; gap: 8px;
}
.agenda-pill::before { content: '●'; color: var(--yellow); font-size: 11px; }
.agenda-caption {
  font-size: 16px; font-weight: 800; color: var(--label);
  letter-spacing: 0.08em; text-transform: uppercase;
}
.agenda-grid {
  display: grid; grid-template-columns: repeat(4, 1fr); gap: 14px;
}
.agenda-card {
  background: var(--bg); border: 1.5px solid var(--border); border-radius: 14px;
  padding: 12px 16px; display: flex; align-items: center; gap: 14px;
}
.agenda-num {
  font-size: 16px; font-weight: 900; color: var(--black);
  background: var(--yellow); width: 34px; height: 34px; border-radius: 10px;
  display: flex; align-items: center; justify-content: center; flex-shrink: 0;
}
.agenda-text {
  font-size: 15px; font-weight: 700; color: var(--black); line-height: 1.35;
}

/* NAV BUTTONS */
.nav-bar {
  position: fixed;
  bottom: 16px; right: 36px;
  display: flex; gap: 12px;
  z-index: 100;
}
.nav-btn {
  width: 58px; height: 58px;
  background: var(--white);
  border: 2px solid var(--border);
  border-radius: 16px;
  font-size: 28px; cursor: pointer;
  display: flex; align-items: center; justify-content: center;
  box-shadow: 0 4px 14px rgba(10,10,10,0.06);
  transition: background 0.2s, border-color 0.2s, transform 0.1s;
  font-family: 'Montserrat', sans-serif;
}
.nav-btn:hover    { background: var(--black); color: var(--white); border-color: var(--black); }
.nav-btn:active   { transform: scale(0.95); }
.nav-btn:disabled { opacity: 0.25; pointer-events: none; box-shadow: none; }
.nav-btn.active   { background: var(--yellow) !important; color: var(--black) !important; border-color: var(--black) !important; box-shadow: 0 0 0 3px rgba(223, 255, 79, 0.45); }

/* ── LOUPE / MAGNIFIER MODE ── */
.magnifier-lens {
  position: fixed; top: 0; left: 0;
  width: 90px; height: 90px;
  border-radius: 50%;
  border: 3px solid var(--black);
  box-shadow: 0 10px 30px rgba(10, 10, 10, 0.35), 0 0 0 2px var(--yellow), inset 0 0 0 2px rgba(255, 255, 255, 0.6);
  pointer-events: none; overflow: hidden;
  z-index: 9999; display: none; background: var(--bg);
  will-change: transform;
}
.magnifier-lens.active { display: block; }
.magnifier-lens::after {
  content: ''; position: absolute;
  top: 50%; left: 50%;
  width: 7px; height: 7px;
  background: var(--yellow); border: 1.5px solid var(--black);
  border-radius: 50%; transform: translate(-50%, -50%);
  pointer-events: none; z-index: 10;
  box-shadow: 0 0 4px rgba(0,0,0,0.5);
}
.magnifier-inner {
  position: absolute; top: 0; left: 0;
  pointer-events: none; will-change: transform;
  /* ⚠️ НЕ СТАВИТЬ transform-origin: 0 0 здесь — он задаётся динамически через JS */
}
body.magnifier-mode, body.magnifier-mode * { cursor: none !important; }
body.magnifier-mode .nav-bar, body.magnifier-mode .nav-bar * { cursor: pointer !important; }
```

### HTML-разметка кнопок и лупы (перед закрывающим `</body>`):
```html
<div class="nav-bar">
  <button class="nav-btn" id="btnPrev" onclick="navigate(-1)" disabled title="Назад (←)">←</button>
  <button class="nav-btn" id="btnLoupe" onclick="toggleMagnifier()" title="Режим лупы / указки (L / Z)">
    <!-- ⚠️ ЗАПРЕЩЕНО писать системные эмодзи вроде &#128269; или 🔍! Используем кастомную иконку: -->
    <img src="../../assets/icons/loupe.png" class="nav-btn-icon" alt="Лупа" />
  </button>
  <button class="nav-btn" id="btnNext" onclick="navigate(1)" title="Вперёд (→)">→</button>
</div>

<!-- Элемент экранной лупы -->
<div id="magnifierLens" class="magnifier-lens">
  <div id="magnifierInner" class="magnifier-inner"></div>
</div>
```

### Стандартный JS-скрипт (навигация + лупа):
```javascript
<script>
  const slides = document.querySelectorAll('.slide');
  const btnPrev = document.getElementById('btnPrev');
  const btnNext = document.getElementById('btnNext');
  const total = slides.length;
  let current = 0;

  function goTo(index) {
    if (index < 0 || index >= total) return;
    const dir = index > current ? 1 : -1;
    const prev = current;

    slides[prev].style.transition = 'opacity 0.4s ease, transform 0.4s cubic-bezier(0.4,0,0.2,1)';
    slides[prev].style.opacity = '0';
    slides[prev].style.transform = dir > 0 ? 'translateX(-80px)' : 'translateX(80px)';
    slides[prev].classList.remove('active');

    setTimeout(() => {
      slides[prev].style.transition = '';
      slides[prev].style.transform  = 'translateX(80px)';
      slides[prev].style.opacity    = '';
    }, 420);

    current = index;
    slides[current].style.transition = '';
    slides[current].style.transform  = dir > 0 ? 'translateX(80px)' : 'translateX(-80px)';
    slides[current].style.opacity    = '0';
    slides[current].classList.add('active');

    requestAnimationFrame(() => requestAnimationFrame(() => {
      slides[current].style.transition = 'opacity 0.4s ease, transform 0.4s cubic-bezier(0.4,0,0.2,1)';
      slides[current].style.transform  = 'translateX(0)';
      slides[current].style.opacity    = '1';
    }));

    btnPrev.disabled = current === 0;
    btnNext.disabled = current === total - 1;

    if (isLoupeActive) setTimeout(syncLoupeSlide, 50);
  }

  function navigate(dir) { goTo(current + dir); }

  /* ── LOUPE / MAGNIFIER LOGIC ── */
  const lens = document.getElementById('magnifierLens');
  const magnifierInner = document.getElementById('magnifierInner');
  const btnLoupe = document.getElementById('btnLoupe');
  const navBar = document.querySelector('.nav-bar');

  let isLoupeActive = false;
  const loupeRadius = 45; // ~1cm (радиус 45px, диаметр 90px)
  const loupeZoom = 2.0;  // 2-кратное увеличение
  let mouseX = window.innerWidth / 2;
  let mouseY = window.innerHeight / 2;
  let rafId = null;

  function syncLoupeSlide() {
    if (!isLoupeActive) return;
    const activeSlide = slides[current];
    magnifierInner.style.width = window.innerWidth + 'px';
    magnifierInner.style.height = window.innerHeight + 'px';
    magnifierInner.innerHTML = `
      <div class="${activeSlide.className}" style="opacity:1 !important;transform:none !important;position:absolute;inset:0;pointer-events:none;">
        ${activeSlide.innerHTML}
      </div>
    `;
  }

  /*
   * ═══════════════════════════════════════════════════════════════════════
   * ⚠️  ПРАВИЛЬНАЯ МАТЕМАТИКА ТРАНСФОРМАЦИИ ЛУПЫ — НЕ МЕНЯЙ БЕЗ ПОНИМАНИЯ
   * ═══════════════════════════════════════════════════════════════════════
   *
   * ❌ НЕВЕРНО (эта формула вызывает смещение — курсор показывает не то место):
   *
   *   magnifierInner.style.transform = `translate3d(${loupeRadius - mouseX * loupeZoom}px,
   *                                                  ${loupeRadius - mouseY * loupeZoom}px, 0)
   *                                     scale(${loupeZoom})`;
   *
   *   Причина: CSS применяет translate ПОСЛЕ scale (справа налево).
   *   При transform-origin: 0 0, scale(2) растягивает координатное пространство от угла.
   *   В результате translate работает в уже масштабированных координатах,
   *   что умножает сдвиг на zoom — чем дальше курсор от (0,0), тем больше ошибка.
   *
   * ✅ ВЕРНО — устанавливаем transformOrigin динамически в точку курсора:
   *
   *   magnifierInner.style.transformOrigin = `${mouseX}px ${mouseY}px`;
   *   const tx = loupeRadius - mouseX;   // ← координаты ЭКРАННЫЕ, без умножения на zoom!
   *   const ty = loupeRadius - mouseY;
   *   magnifierInner.style.transform = `translate3d(${tx}px, ${ty}px, 0) scale(${loupeZoom})`;
   *
   *   Логика (по шагам):
   *   1. scale(2) масштабирует контент вокруг точки курсора (mouseX, mouseY) → курсор неподвижен.
   *   2. translate(loupeRadius - mouseX, loupeRadius - mouseY) смещает эту точку
   *      ровно в центр линзы → линза всегда показывает пиксель строго под курсором.
   * ═══════════════════════════════════════════════════════════════════════
   */
  function updateLoupeTransform() {
    rafId = null;
    if (!isLoupeActive) return;
    // Позиционируем линзу так, чтобы её центр был точно над курсором
    lens.style.transform = `translate3d(${mouseX - loupeRadius}px, ${mouseY - loupeRadius}px, 0)`;
    // Масштабируем контент от точки курсора, затем смещаем её в центр линзы
    magnifierInner.style.transformOrigin = `${mouseX}px ${mouseY}px`;
    const tx = loupeRadius - mouseX;
    const ty = loupeRadius - mouseY;
    magnifierInner.style.transform = `translate3d(${tx}px, ${ty}px, 0) scale(${loupeZoom})`;
  }

  function toggleMagnifier() {
    isLoupeActive = !isLoupeActive;
    if (isLoupeActive) {
      document.body.classList.add('magnifier-mode');
      btnLoupe.classList.add('active');
      lens.classList.add('active');
      lens.style.display = 'block';
      syncLoupeSlide();
      updateLoupeTransform();
    } else {
      document.body.classList.remove('magnifier-mode');
      btnLoupe.classList.remove('active');
      lens.classList.remove('active');
      lens.style.display = 'none';
    }
  }

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

  navBar.addEventListener('mouseenter', () => {
    if (isLoupeActive) lens.style.display = 'none';
  });
  navBar.addEventListener('mouseleave', () => {
    if (isLoupeActive) lens.style.display = 'block';
  });

  document.addEventListener('keydown', e => {
    if (e.key === 'ArrowRight' || e.key === 'ArrowDown') navigate(1);
    if (e.key === 'ArrowLeft'  || e.key === 'ArrowUp')   navigate(-1);
    if (e.key === 'l' || e.key === 'L' || e.key === 'д' || e.key === 'Д' || e.key === 'z' || e.key === 'Z') {
      toggleMagnifier();
    }
    if (e.key === 'Escape' && isLoupeActive) {
      toggleMagnifier();
    }
  });

  let tx = 0;
  document.addEventListener('touchstart', e => { tx = e.touches[0].clientX; });
  document.addEventListener('touchend', e => {
    const dx = e.changedTouches[0].clientX - tx;
    if (Math.abs(dx) > 50) navigate(dx < 0 ? 1 : -1);
  });
</script>
```

---

## 8. ПРАВИЛА ГЕНЕРАЦИИ ИЗОБРАЖЕНИЙ И ИКОНОК

> **ЗАПРЕЩЕНО использовать системные эмодзи** (🎨 🤖 📁 💙 ✅ и т.п.) в качестве иконок или иллюстраций.
> Все визуальные элементы должны быть **сгенерированы** через `generate_image` или нарисованы через SVG.

---

### НЕЛЬЗЯ (плохо):
```html
<span class="icon">🎨</span>    <!-- системный эмодзи — запрещено -->
<span class="icon">💙</span>    <!-- системный эмодзи — запрещено -->
<div class="card-icon">📁</div> <!-- системный эмодзи — запрещено -->
```

### НУЖНО (хорошо):
```html
<!-- Вариант 1: SVG-иконка inline -->
<svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
  <polyline points="16 18 22 12 16 6"></polyline>
  <polyline points="8 6 2 12 8 18"></polyline>
</svg>

<!-- Вариант 2: Сгенерированное изображение -->
<img src="./img/vscode-logo.png" alt="VS Code" class="app-icon" />

<!-- Вариант 3: Текстовый символ в нашем стиле (Unicode, не emoji) -->
<span class="icon-symbol">&lt;/&gt;</span>   <!-- для кода -->
<span class="icon-symbol">&#8734;</span>      <!-- для бесконечности -->
<span class="icon-symbol">&#9670;</span>      <!-- для декора -->
```

---

### Когда генерировать изображение через `generate_image`:
- **Фото** для правой части контентного слайда (рабочее место, код на экране, атмосфера)
- **Логотипы** программ и инструментов (VS Code, Git, Chrome, Figma и т.д.)
- **Иллюстрации** концепций (схема браузер↔сервер, дерево DOM, пайплайн и т.п.)
- **Иконки** для карточек — вместо эмодзи, в стиле презентации
- **Декоративные визуалы** для титульного слайда

### Когда использовать SVG вместо generate_image:
- Простые геометрические иконки (`</>`, стрелки, галочки, линии)
- Иконки из стандартных наборов (Heroicons, Feather Icons — inline SVG)
- Элементы UI (кнопки, прогресс-бары, индикаторы)

---

### Стиль генерируемых изображений — ВАЖНО:
Все изображения должны соответствовать палитре презентации:
- **Фото**: тёплые, кинематографические, атмосферные
- **Логотипы**: flat-дизайн, чистый фон, минимализм
- **Иконки**: монохромные или в цветах палитры (`#DFFF4F`, `#C8B8F0`, `#0A0A0A`)
- **Схемы/диаграммы**: светлый фон, чёткие линии, цвета из палитры

### Промпты — примеры:
```
# Рабочая атмосфера разработчика
"developer workspace, laptop with colorful code on screen, coffee cup, warm ambient light,
cinematic photo, ultra realistic, 16:9, editorial photography style"

# Логотип VS Code (flat, без эмодзи-стиля)
"VS Code logo icon, flat design vector, blue and white, clean minimal background,
professional app icon style, no gradients"

# Иконка для карточки «Скорость»
"speed lightning bolt icon, flat design, black on transparent, minimalist,
geometric, no emoji style, vector illustration"

# Концепция HTML документа
"HTML document tree diagram, clean flat infographic, lavender background #EEEEF8,
black nodes, yellow accent #DFFF4F, modern editorial style"
```

### Структура папок:
```
month-1/lesson-1/
  index.html
  img/
    hero-photo.png       <- атмосферное фото (сгенерировано)
    vscode-logo.png      <- логотип VS Code (сгенерирован)
    icon-speed.png       <- иконка карточки (сгенерирована)
    concept-dom.png      <- схема концепции (сгенерирована)
```

```html
<img src="./img/vscode-logo.png" alt="VS Code" class="app-logo" />
<img src="./img/hero-photo.png"  alt="Среда разработки" class="photo-card-img" />
```

---

## 9. ЧЕКЛИСТ ПЕРЕД ФИНАЛЬНЫМ РЕНДЕРОМ

- [ ] Шрифты Montserrat + Playfair Display подключены через Google Fonts
- [ ] Фон страницы и слайдов `#EEEEF8` (лавандовый), НЕ белый и НЕ тёмный
- [ ] Есть header (≡ + название курса + название урока, БЕЗ дат и времени) на всех слайдах кроме Title
- [ ] **СТРОГО НЕТ ДАТЫ И ВРЕМЕНИ**: на слайдах отсутствуют даты («07 сентября 2026 г.»), дата публикации, время создания или привязка к году
- [ ] **Есть Agenda на титульном слайде**: внизу первого слайда обязательно размещён блок «LESSON X · AGENDA / Что мы сегодня изучим» с 3–4 карточками тем
- [ ] Есть footer с модулем и номером страницы
- [ ] Жёлтый (`#DFFF4F`) использован минимум 1 раз
- [ ] Хотя бы одна карточка тёмная (чёрная) для контраста
- [ ] Навигация: `←` `→` клавиши + кнопки работают
- [ ] Если нужны изображения — они сгенерированы и подключены через `<img>`
- [ ] **Системные эмодзи НЕ использованы** — вместо них SVG-иконки или сгенерированные изображения
- [ ] Все иконки в карточках — либо inline SVG, либо `<img src="./img/...">` из папки `img/`
- [ ] Каждый тип слайда соответствует одному из типов в разделе 5
- [ ] Все тексты по-русски (если не указано иное)
- [ ] **Подключён `/mobile-block.js`** перед `</body>` — для блокировки открытия на мобильных устройствах

---

## 10. СТРУКТУРА ФАЙЛОВ КУРСА

```
presentation/
  AGENTS.md              ← этот файл (читать перед работой!)
  index.html             ← главная навигация по месяцам
  mobile-block.js        ← блокировщик мобильных устройств (ОБЯЗАТЕЛЬНО подключать!)
  style.css              ← глобальные стили (если нужны)
  month-1/
    index.html           ← навигация по урокам месяца
    lesson-1/
      lesson-1.html      ← презентация урока (НЕ index.html!)
      img/               ← сгенерированные изображения
    lesson-2/
      lesson-2.html      ← презентация урока (НЕ index.html!)
      img/
    lesson-3/
      lesson-3.html      ← презентация урока (НЕ index.html!)
      img/
  month-2/ ...
  month-3/ ...
  (и т.д. до month-7)
```

---

## 11. МОБИЛЬНЫЙ БЛОКИРОВЩИК (ОБЯЗАТЕЛЬНО)

Все страницы курса — навигационные (`index.html` месяцев) и презентации (`lesson-X/lesson-X.html`) — **обязаны** подключать файл `/mobile-block.js`.

Этот скрипт показывает fullscreen-оверлей «Открой на компьютере» при ширине экрана **< 960px**, блокируя скролл страницы. При возврате к десктопному размеру оверлей автоматически скрывается.

### Как подключить (ОБЯЗАТЕЛЬНО перед `</body>`):
```html
  <script src="/mobile-block.js"></script>
</body>
```

> ⚠️ Путь всегда **абсолютный** `/mobile-block.js` — он работает корректно для любого уровня вложенности
> (`/month-1/lesson-2/lesson-2.html`, `/month-3/lesson-5/lesson-5.html` и т.д.).

### Что делает скрипт:
- Инжектирует CSS-стили и HTML-оверлей прямо в `<body>` через JS — **не нужно ничего писать в HTML**
- Порог блокировки: `window.innerWidth < 960px`
- Оверлей оформлен в стиле AGENTS.md: палитра `--bg-page`, шрифт Montserrat, жёлтый акцент `--yellow`, иконка монитора
- Реагирует на `window.resize` — динамический

### Параметры (если нужно изменить):
В файле `/mobile-block.js` первая строка внутри IIFE:
```javascript
var BREAKPOINT = 960; // px — меньше этого = телефон/планшет
```
Изменить это значение, если нужен другой порог.

### Дизайн оверлея:
- Фон: `#EEEEF8` (лавандовый, основной фон сайта)
- Значок монитора: чёрная карточка с жёлтой SVG-иконкой
- Badge: `● ВЕБ-КУРС · ТОЛЬКО ДЛЯ ПК`
- Заголовок: `ОТКРОЙ НА` + `*компьютере*` (Playfair Display italic)
- Акцентные жёлтые линии (два отрезка)
- Белая карточка: «Рекомендуемый экран · 1280px и шире»

---

*Backend Academy*

