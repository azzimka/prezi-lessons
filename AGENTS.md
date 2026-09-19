# AGENTS.md — Инструкция по созданию презентаций

> Этот файл содержит **обязательные правила** для всех AI-агентов, которые генерируют
> HTML-презентации для курса. Читай внимательно и полностью перед началом работы.

---

## 1. ОБЩИЕ ПРАВИЛА

### 1.1 Файловая структура

- Каждый урок называется строго **`lesson-Y.html`** и лежит в папке `month-X/lesson-Y/`.
  - Примеры: `month-1/lesson-1/lesson-1.html`, `month-1/lesson-2/lesson-2.html`.
- ❌ **СТРОГО ЗАПРЕЩЕНО называть файлы уроков `index.html`** внутри папок `lesson-Y/`!
- `index.html` используется **только** на верхних уровнях: в корне проекта (`presentation/index.html`) и в папке каждого месяца (`month-X/index.html`) как страницы навигации и меню.
- Изображения конкретного урока хранятся в `month-X/lesson-Y/img/`.
- Глобальные ассеты (иконки, логотипы, используемые во всех уроках) — в `assets/icons/`.

```
presentation/
  AGENTS.md              ← этот файл
  index.html             ← главная навигация по месяцам
  mobile-block.js        ← блокировщик мобильных (подключать ОБЯЗАТЕЛЬНО)
  style.css              ← глобальные стили (если нужны)
  assets/
    icons/               ← общие иконки (loupe.png и т.д.)
  month-1/
    index.html           ← навигация по урокам месяца
    lesson-1/
      lesson-1.html      ← ПРЕЗЕНТАЦИЯ (НЕ index.html!)
      img/               ← картинки этого урока
    lesson-2/
      lesson-2.html
      img/
  month-2/ ...
  (и т.д. до month-7)
```

### 1.2 Технические требования

- Презентация полностью **self-contained** (всё в одном HTML-файле: CSS в `<style>`, JS в `<script>`).
- **Не использовать внешние JS-библиотеки** (Reveal.js, Swiper и т.п.).
- Шрифты подключаются через Google Fonts в `<head>`.
- Навигация: клавиши `←` `→`, кнопки на экране, свайп на touch-устройствах.
- Перед закрывающим `</body>` обязательно подключать `/mobile-block.js`.

### 1.3 Тон и обращение

- Презентация ведётся **от лица преподавателя** напрямую к ученикам.
- ❌ **ЗАПРЕЩЕНО** писать от 3-го лица: «Вместе с преподавателем», «Ученик делает задание», «Учитель объясняет».
- ❌ **ЗАПРЕЩЕНО** фамильярное обращение на «ты»: «Твоё задание», «Сделай», «Создай», «Открой», «Попробуй».
- ✅ **Всегда обращаться на «вы»** (вежливо, уважительно, профессионально):
  - «Ваше задание», «Ваша очередь!», «Ваш проект», «У вас всё получится!»
  - Глаголы в вежливом повелительном наклонении: «Создайте», «Откройте», «Выберите», «Сделайте», «Проверьте».

### 1.4 Принцип «TALK, DO NOT READ»

Слайд — это **визуальная подсказка для спикера, а не суфлёр**.

- ❌ **ЗАПРЕЩЕНО** заполнять слайды полотнами текста, длинными абзацами и теоретическими параграфами.
- ✅ На слайде размещаются: **крупные ключевые термины**, теги, ёмкие тезисы (2–5 слов), визуальные схемы, блоки кода.
- Преподаватель смотрит на учеников и говорит живо — слайд лишь ментальная карта.
- Для каталогов тегов/свойств — **только название + роль в 2–3 слова**. Устное пояснение делает спикер.

### 1.5 Принцип «SHOW, DO NOT JUST TELL»

- ❌ Ученики забывают сухие правила и абстрактные определения.
- ✅ Они запоминают **истории, метафоры и наглядные картинки**:
  - *Контрасты «ДО / ПОСЛЕ»*: сырой текст vs аккуратный список; голый HTML vs стилизованная страница.
  - *Жизненные метафоры*: HTML — скелет дома, CSS — интерьер; `<ul>` — список покупок, `<ol>` — шаги рецепта.
  - *Реальные интерфейсы*: как `<ul> <li> <a>` превращается в навигационную шапку сайта.
- Слайд показывает **код рядом с результатом** и стимулирует диалог.

### 1.6 Строгое следование программе

- ❌ **ЗАПРЕЩЕНО** использовать в учебном коде теги, свойства и концепции, которые ещё не проходили.
- Если в уроке изучаются только `color`, `background`, `font-size` — в примерах **ТОЛЬКО** они. Никаких `padding`, `margin`, `flexbox` до соответствующих уроков.
- Ученик должен понимать и уметь воспроизвести каждую строчку кода на слайде.

### 1.7 Запрет на дату и время

- ❌ **ЗАПРЕЩЕНО** указывать дату, время, год на слайдах.
- Презентации должны быть **вечно актуальными** для любых потоков.
- В `header-right` — **только** название урока / модуль, без дат.

### 1.8 Запрет на системные эмодзи

- ❌ **ЗАПРЕЩЕНО** использовать системные эмодзи (`🔍`, `💻`, `🚀`, `💡` и т.п.) в интерфейсе и на слайдах.
- ✅ Все иконки создаются через:
  - `generate_image` (уникальные картинки и иконки).
  - Либо чистый **inline SVG** в фирменных цветах (`--black`, `--yellow`).
- Общие ассеты (loupe.png и т.д.) хранятся в `/assets/icons/`, подключение: `<img src="../../assets/icons/loupe.png">`.

### 1.9 Запрет на дублирование содержания (нет Agenda на титульном слайде)

- ❌ **СТРОГО ЗАПРЕЩЕНО размещать блок Agenda (план/содержание) на титульном слайде!**
- Содержание урока находится **строго на Слайде 2 (Table of Contents / Содержание урока)**.
- Титульный слайд — это чистая постерная обложка (бренд, бейдж темы, крупный заголовок, подзаголовок, слоган и ID курса).
- Размещение тем сразу на 1-м и 2-м слайдах перегружает обложку и создаёт бессмысленное дублирование одной и той же информации подряд.

### 1.10 Обязательный Git Commit и Push после любых изменений

- ⚡ **СТРОГОЕ ПРАВИЛО ДЛЯ ВСЕХ АГЕНТОВ**: после каждого действия, если был создан новый файл, внесены исправления, правки текста или удалён код — агент **ОБЯЗАН сразу же зафиксировать изменения и отправить их в удалённый репозиторий**:
  ```bash
  git add .
  git commit -m "Понятное описание сделанных изменений"
  git push origin main
  ```
- ❌ **ЗАПРЕЩЕНО** завершать ответ пользователю, оставляя незакоммиченные или незапушенные изменения в рабочей директории.
- Любое изменение (даже мелкий фикс одной строчки текста или стилей) должно быть сразу закоммичено и отправлено в GitHub.

### 1.11 Запрет на самовольное создание слайдов и контента (Агент — методический консультант, а не автор)

- ❌ **СТРОГО ЗАПРЕЩЕНО агентам самостоятельно выдумывать контент, писать тексты слайдов «из себя» или самовольно верстать презентацию/слайды при получении общей темы!**
- **Пример**: Если преподаватель говорит агенту: *«6 урок будет на тему работа со шрифтами в CSS и свойствами background-...»* — это всего лишь вводный общий контекст урока!
  - ❌ **Грубая ошибка агента**: сразу побежать нарезать слайды, генерировать файлы и набивать презентацию выдуманным контентом на эту тему.
  - ✅ **Правильное поведение**: агент слушает преподавателя. Преподаватель сам решает и указывает, **что** именно добавлять, **куда** добавлять и в какой последовательности.
- **Роль и задачи агента**:
  1. **Предлагать идеи для тем и формулировок** в формате обсуждения и брейншторма, помогая преподавателю составить идеальный план.
  2. **Корректировать преподавателя ТОЛЬКО в трёх критических случаях**:
     - *Нарушение лаконичности*: если в предложенном материале или плане возникает перегруз текстом и простыни теории (нарушение принципа «Talk, do not read»).
     - *Методическая или техническая ошибка*: если предложен некорректный код, допущены ошибки в синтаксисе или нарушена программа курса (забегание вперёд по ещё не пройденным темам).
     - *Нарушение структуры урока*: если нарушена логическая цепочка подачи материала (например, практика даётся раньше теории, отсутствует наглядный контраст или нарушена вложенность тегов).
  3. **Во всех остальных случаях**: агент строго следует прямым указаниям преподавателя, ничего не додумывает от себя и создаёт/обновляет слайды **только по прямому распоряжению**.

### 1.12 Обязательный вертикальный скролл (overflow-y: auto) для блоков кода

- ⚡ **СТРОГОЕ ПРАВИЛО ДЛЯ ВСЕХ АГЕНТОВ**: Любые блоки кода (`.editor-frame`, `.code-box`, терминалы и контейнеры листингов) **ОБЯЗАНЫ иметь вертикальную прокрутку (`overflow-y: auto;`) и защиту от обрезания контента (`min-height: 0; max-height: ...;`)**.
- ❌ **СТРОГО ЗАПРЕЩЕНО** допускать ситуации, когда селекторы, свойства или длинный код уходят за нижний край карточки/экрана и обрезаются!
- **Требования к оформлению блоков кода**:
  1. В стилях `.code-box` всегда указывать `overflow-y: auto; overflow-x: auto;`.
  2. Родительский фрейм (`.editor-frame`, `.code-card-wrap`) должен иметь `min-height: 0;` и аккуратно помещаться в `.slide-content`.
  3. Для `.code-box` обязательно добавлять аккуратный стилизованный скроллбар (`::-webkit-scrollbar`), чтобы при прокрутке вверх и вниз интерфейс оставался стильным и не ломал вёрстку.

---

## 2. ЦВЕТОВАЯ ПАЛИТРА

```css
:root {
  /* Основные */
  --bg:          #EEEEF8;   /* Светло-лавандовый — фон страницы и слайдов */
  --white:       #FFFFFF;   /* Белый — фон карточек */
  --black:       #0A0A0A;   /* Почти чёрный — текст, заголовки */

  /* Акцентные */
  --yellow:      #DFFF4F;   /* Яркий жёлто-лаймовый — главный акцент */
  --purple-soft: #C8B8F0;   /* Мягкий фиолетовый — второй акцент */
  --beige:       #EDE8D8;   /* Светлый бежевый — нейтральные карточки */

  /* Вспомогательные */
  --border:      #E0E0EE;   /* Граница карточек */
  --text:        #1A1A1A;   /* Основной текст */
  --muted:       #888899;   /* Приглушённый текст (метаданные, подписи) */
  --label:       #555566;   /* Маленькие заглавные лейблы */

  /* Код */
  --code-bg:     #12131A;   /* Фон блоков кода (тёмный) */
}
```

### Правила применения цветов
- **Жёлтый** (`--yellow`) — декоративные линии на титуле, номера карточек, акцентные плашки, кнопка лупы в активном состоянии.
- **Мягкий фиолетовый** (`--purple-soft`) — фон некоторых карточек (чередовать с белым и бежевым).
- **Чёрный** (`--black`) — акцентная карточка (последняя или самая важная), фон блоков кода.
- **Белый** — фон основных карточек с тонкой границей `--border`.
- **Фон** всей страницы и слайдов — всегда `--bg` (лавандовый). Никогда не белый и не тёмный.

---

## 3. ТИПОГРАФИКА

### Подключение шрифтов (в `<head>`)
```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700;800;900&family=Playfair+Display:ital,wght@0,700;0,900;1,700;1,900&family=Unbounded:wght@700;800;900&display=swap" rel="stylesheet">
```

### Роли шрифтов

| Роль | Шрифт | Пример |
|------|-------|--------|
| Декоративный заголовок титула | `Playfair Display`, italic 700–900 | «ВЕБ-РАЗРАБОТКУ» |
| Заголовки слайдов (.content-h2, .catalog-title) | `'Unbounded', 'Neutral Face', 'Montserrat', sans-serif`, 800–900 | «ТЕГ <FORM>», «ТИПЫ ПОЛЕЙ <INPUT>» |
| Крупные заголовки (TOC, блоки) | `Montserrat`, 800–900, uppercase | «СОДЕРЖАНИЕ КУРСА» |
| Акцентное слово | `Montserrat`, 900, uppercase | «HTML» |
| Подзаголовки секций | `Montserrat`, 700, uppercase | «ЧТО ЭТО ТАКОЕ» |
| Тело текста | `Montserrat`, 400–500 | Описательные тезисы |
| Маленькие лейблы | `Montserrat`, 600–700, uppercase, `letter-spacing: 0.12em` | «ОСНОВНОЙ ИНСТРУМЕНТАРИЙ» |
| Header/Footer | `Montserrat`, 600, uppercase, `letter-spacing: 0.1em` | «УЧЕБНЫЙ МОДУЛЬ · СТРАНИЦА 02» |
| Код | `'SF Mono', 'Fira Code', Menlo, Consolas, Monaco, monospace` | Блоки кода |

### Правила типографики

- **Заголовки слайдов (.content-h2, .catalog-title) — СТРОГО В ОДНУ СТРОКУ**:
  - ❌ **СТРОГО ЗАПРЕЩЕНО** использовать антикву (`Playfair Display`) для заголовков контентных слайдов и каталогов! Антиква выглядит архаично для технического курса.
  - ❌ **СТРОГО ЗАПРЕЩЕНО** разрывать заголовки тегами `<br/>` на несколько коротких строк («Тег<br/>&lt;form&gt;», «Регистрация<br/>в кинотеатре»)!
  - ✅ Заголовки слайдов пишутся **строго в одну строку** (`white-space: nowrap;`).
  - ✅ Используется современный геометрический дисплейный гротеск типа **Neutral Face / Unbounded**: `'Unbounded', 'Neutral Face', 'Montserrat', sans-serif`.
  - Размер шрифта подбирается так, чтобы заголовок гарантированно помещался в ширину колонки: канонично `32px–36px` (для длинных заголовков практики: `26px–30px`).
- **Заголовки**: `letter-spacing: -0.02em` (плотно).
- **Лейблы/категории**: `letter-spacing: 0.12em` (широко).
- **Цвет текста**: `--black` или `--text` (#1A1A1A) — никакого серого для основного контента.

### Каноничные размеры (ОБЯЗАТЕЛЬНЫ ДЛЯ ВСЕХ УРОКОВ)

| Элемент | Размер |
|---------|--------|
| Заголовок титула (title-main-line) | `74–82px` |
| Italic-строка титула | `88–96px` |
| H2 слайда (.content-h2) | `32–36px` (строго в 1 строку) |
| Заголовок каталога (.catalog-title) | `34–38px` (строго в 1 строку) |
| Подзаголовок секции (.content-section-label) | `16px`, uppercase, muted |
| Название подсекции (.content-section-title) | `17px`, uppercase, bold |
| Тело текста (.content-body) | `20px` |
| Header (brand-title) | `24px` |
| Header (header-lesson) | `16px` |
| Footer | `15px` |
| Лейблы на карточках | `16–18px` |

> ⚠️ Эти размеры являются **каноничными**. Не менять от урока к уроку. Консистентность важнее «красоты» отдельного слайда.

---

## 4. ОБЩИЙ LAYOUT СЛАЙДА

```
┌─────────────────────────────────────────────────────────┐
│  HEADER (padding: 24px 56px 0)                          │
│  ≡ ВЕБ-КУРС / ОСНОВЫ РАЗРАБОТКИ    [УРОК X · ТЕМА]     │
├─────────────────────────────────────────────────────────┤
│                                                         │
│                    CONTENT AREA                         │
│              (padding: 14px 56px 20px)                  │
│                                                         │
├─────────────────────────────────────────────────────────┤
│  FOOTER (padding: 10px 260px 20px 56px)                 │
│  УЧЕБНЫЙ МОДУЛЬ · РАЗДЕЛ           СТРАНИЦА 01 / 13     │
└─────────────────────────────────────────────────────────┘
```

> ⚠️ Footer `padding-right: 260px` — СТРОГО ОБЯЗАТЕЛЕН! Кнопки `.nav-bar` зафиксированы справа (`bottom: 16px; right: 36px`, общая ширина ~234px). Если поставить меньше — текст «СТРАНИЦА XX» уйдёт под кнопки.

### Header (обязателен на каждом слайде, кроме Title)
```html
<header class="slide-header">
  <div class="header-brand">
    <div class="burger"><span></span><span></span><span></span></div>
    <div>
      <div class="brand-title">ВЕБ-КУРС</div>
      <div class="brand-sub">ОСНОВЫ РАЗРАБОТКИ</div>
    </div>
  </div>
  <div class="header-right">
    <div class="header-lesson">НАЗВАНИЕ УРОКА · МЕСЯЦ X</div>
  </div>
</header>
```

### Footer (обязателен на каждом слайде, кроме Title)
```html
<footer class="slide-footer">
  <span>УЧЕБНЫЙ МОДУЛЬ · ОСНОВЫ РАЗРАБОТКИ</span>
  <span>СТРАНИЦА 01 / 13</span>
</footer>
```

### Правило консистентности Header
- `brand-title` на всех обычных слайдах **одного урока** — одно и то же название (например, «ВЕБ-РАЗРАБОТКА» или «ВЕБ-КУРС»). Не менять от слайда к слайду!
- `brand-sub` — единый подзаголовок для всего урока (например, «ОСНОВЫ HTML»).
- `header-lesson` — может меняться от слайда к слайду для отражения текущей подтемы, но формат единый: `УРОК X · ПОДТЕМА`.

---

## 5. ТИПЫ СЛАЙДОВ И ПРАВИЛО ЧЕРЕДОВАНИЯ

### ⚡ КЛЮЧЕВОЕ ПРАВИЛО: РАЗНООБРАЗИЕ ЛЕЙАУТОВ

Настоящая презентация **никогда** не использует один и тот же лейаут 5 раз подряд. Агент обязан чередовать типы слайдов по такой логике:

```
TITLE → TOC → SECTION DIVIDER → CONTENT (2-col) → CONTENT (визуал) → SECTION DIVIDER → ...
              → COMPARISON → QUOTE → CONTENT (3-col) → PRACTICE → ...
```

**Минимальные требования к любому уроку из 10+ слайдов:**
- Минимум **2 разных лейаута контентных слайдов** (не все `content-two-col`!).
- Минимум **1 section divider** между крупными секциями.
- Минимум **1 слайд с визуальным акцентом** (сравнение ДО/ПОСЛЕ, большая схема, цитата).
- ❌ **ЗАПРЕЩЕНО** использовать `content-two-col` (левая фиолетовая карточка + правая колонка) больше 3 раз подряд!

---

### 5.1 TITLE SLIDE (Титульный)

Полноэкранный flex-контейнер. **Никаких `position: absolute; bottom: 0` для `.title-bottom`!**

> ⚠️ **ЗАПРЕТ НА ДУБЛИРОВАНИЕ СОДЕРЖАНИЯ (AGENDA)**:
> ❌ **СТРОГО ЗАПРЕЩЕНО** размещать блок Agenda (план/содержание) на титульном слайде!
> Содержание урока находится **строго на Слайде 2 (Table of Contents)**.
> Титульный слайд — это постерная обложка (название темы, бейдж, подзаголовок, слоган). Размещение содержания сразу на 1-м и 2-м слайдах — грубая ошибка дублирования.

**Структура:**
- **Верх**: бренд (≡ + ВЕБ-КУРС) слева, ФОРМАТ ОБУЧЕНИЯ справа. **Без дат!**
- **Центр**: тег-пилюля → большой заголовок → жёлтые линии → подзаголовок урока.
- **Низ**: ID КУРСА слева, слоган + SVG-иконка справа. `padding-right: 280px` обязателен!
- **Декор**: полые круги в правом верхнем углу.

**CSS (каноничный, НЕ МЕНЯТЬ):**
```css
.s-title {
  position: absolute; inset: 0; overflow: hidden;
  display: flex; flex-direction: column; justify-content: space-between;
}
.title-top {
  display: flex; justify-content: space-between; align-items: flex-start;
  padding: 32px 56px 0; flex-shrink: 0;
}
.title-center {
  flex: 1; display: flex; flex-direction: column; align-items: center; justify-content: center;
  width: 100%; max-width: 1360px; margin: 0 auto; padding: 20px;
}
.title-bottom {
  display: flex; justify-content: space-between; align-items: flex-end;
  padding: 0 280px 28px 56px; flex-shrink: 0;
}
```

**HTML-разметка (каноничная):**
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
    <div class="title-badge">ТЕМА УРОКА</div>
    <div class="title-main-line">ЗАГОЛОВОК</div>
    <div class="accent-lines-row">
      <div class="accent-line"></div>
      <div class="title-italic-line">слово</div>
      <div class="accent-line"></div>
    </div>
    <div class="title-third-line">ПРОДОЛЖЕНИЕ</div>
    <div class="title-subtitle">Подзаголовок урока</div>
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

---

### 5.2 TABLE OF CONTENTS (Содержание)

- Заголовок: `≡ СОДЕРЖАНИЕ УРОКА`.
- Сетка 2 × N карточек.
- Цвета чередуются: белый → жёлтый → белый → бежевый → фиолетовый → чёрный.

```css
.toc-wrap { width: 100%; display: flex; flex-direction: column; gap: 14px; }
.toc-heading {
  display: flex; align-items: center; gap: 16px;
  font-weight: 900; font-size: 36px; letter-spacing: -0.01em; text-transform: uppercase;
}
.toc-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 10px; }
.toc-item {
  display: flex; align-items: center; gap: 18px;
  padding: 14px 22px; border-radius: 14px;
  font-weight: 800; font-size: 16px; letter-spacing: 0.02em; text-transform: uppercase;
}
.toc-num { font-size: 19px; font-weight: 900; min-width: 28px; }
.toc-white  { background: var(--white); border: 1px solid var(--border); color: var(--black); }
.toc-yellow { background: var(--yellow); color: var(--black); }
.toc-beige  { background: var(--beige); border: 1px solid #E0D8C0; color: var(--black); }
.toc-purple { background: var(--purple-soft); color: var(--black); }
.toc-black  { background: var(--black); color: var(--white); }
```

---

### 5.3 SECTION DIVIDER (Разделитель секции) — НОВЫЙ ТИП

**Зачем:** Визуальная пауза между крупными тематическими блоками. Даёт зрителю понять: «начинается новая тема». Настоящие презентации всегда так делают.

**Структура:** Полноэкранный слайд с минимумом элементов:
- Номер секции (крупный, на жёлтом фоне) в левой части.
- Заголовок секции (крупный, Montserrat 900 uppercase) справа.
- Подзаголовок (1 строка, muted) под заголовком.
- Декоративная жёлтая линия.
- Фон: `--bg` (лавандовый), обычный header + footer.

```
┌─────────────────────────────────────────────────────────┐
│  HEADER                                                 │
├─────────────────────────────────────────────────────────┤
│                                                         │
│         ┌──────┐                                        │
│         │  01  │   БЛОЧНЫЕ И                            │
│         └──────┘   СТРОЧНЫЕ ТЕГИ                        │
│         ──────     Как HTML выстраивает контент          │
│                                                         │
├─────────────────────────────────────────────────────────┤
│  FOOTER                                                 │
└─────────────────────────────────────────────────────────┘
```

```css
.section-divider-content {
  display: flex; align-items: center; gap: 40px;
  width: 100%; max-width: 900px; margin: 0 auto;
}
.section-num-box {
  width: 100px; height: 100px;
  background: var(--yellow); border-radius: 24px;
  display: flex; align-items: center; justify-content: center;
  font-weight: 900; font-size: 42px; color: var(--black);
  flex-shrink: 0;
}
.section-divider-text { display: flex; flex-direction: column; gap: 12px; }
.section-divider-title {
  font-weight: 900; font-size: 48px; letter-spacing: -0.02em;
  text-transform: uppercase; color: var(--black); line-height: 1.1;
}
.section-divider-sub {
  font-weight: 500; font-size: 20px; color: var(--muted);
}
.section-divider-line {
  width: 80px; height: 5px; background: var(--yellow); border-radius: 3px;
}
```

```html
<div class="slide" data-index="N">
  <header class="slide-header">...</header>
  <div class="slide-content">
    <div class="section-divider-content">
      <div class="section-num-box">01</div>
      <div class="section-divider-text">
        <div class="section-divider-title">БЛОЧНЫЕ И<br/>СТРОЧНЫЕ ТЕГИ</div>
        <div class="section-divider-line"></div>
        <div class="section-divider-sub">Как HTML выстраивает контент на странице</div>
      </div>
    </div>
  </div>
  <footer class="slide-footer">...</footer>
</div>
```

---

### 5.4 CONTENT SLIDE — ДВЕ КОЛОНКИ (основной, но НЕ единственный)

Классический лейаут: **левая карточка с текстом + правая с визуалом**. Хорош для введения новой концепции.

```
┌──────────────────┬──────────────────┐
│  Лейбл секции    │  [ФОТО / ВИЗУАЛ] │
│                  │                  │
│  Большой         ├──────────────────┤
│  Заголовок       │                  │
│                  │  Карточка с      │
│  ЧТО ЭТО ТАКОЕ  │  тегами/пилюлями │
│  тезис           │                  │
│                  │                  │
│  ЗАЧЕМ НУЖЕН     │                  │
│  тезис           │                  │
└──────────────────┴──────────────────┘
```

> ⚠️ **Максимум 3 таких слайда подряд!** Потом — section divider, comparison, quote или другой тип.

```css
.content-two-col {
  display: grid; grid-template-columns: 1fr 1fr; gap: 32px;
  width: 100%; height: 100%; align-items: stretch;
}
.content-card-left {
  background: rgba(200, 184, 240, 0.15); border-radius: 24px;
  padding: 30px 36px;
  display: flex; flex-direction: column; justify-content: center;
}
.content-section-label {
  font-weight: 800; font-size: 16px; letter-spacing: 0.15em;
  text-transform: uppercase; color: var(--muted); margin-bottom: 10px;
}
.content-h2 {
  font-family: 'Unbounded', 'Neutral Face', 'Montserrat', sans-serif;
  font-weight: 800; font-size: 34px; line-height: 1.15;
  letter-spacing: -0.02em; color: var(--black); margin-bottom: 16px;
  white-space: nowrap;
}
.content-section-title {
  font-weight: 800; font-size: 17px; letter-spacing: 0.08em;
  text-transform: uppercase; color: var(--black);
  margin-bottom: 6px; margin-top: 12px;
}
.content-body {
  font-weight: 500; font-size: 20px; line-height: 1.5; color: var(--text);
}
.text-underline { text-decoration: underline; text-underline-offset: 4px; }
.content-right {
  display: flex; flex-direction: column; gap: 16px;
  height: 100%; justify-content: center;
}
```

---

### 5.5 CONTENT SLIDE — ТРИ КОЛОНКИ

Для сравнения трёх вариантов (например: текстовые редакторы vs IDE vs code editors) или каталога из трёх карточек.

```
┌──────────────┬──────────────┬──────────────┐
│    Иконка    │    Иконка    │    Иконка    │
│   Заголовок  │   Заголовок  │   Заголовок  │
│   Тезис      │   Тезис      │   Тезис      │
└──────────────┴──────────────┴──────────────┘
```

```css
.three-col-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 24px; }
.icon-col {
  background: var(--white); border: 2px solid var(--border); border-radius: 24px;
  padding: 36px 30px; text-align: center;
  display: flex; flex-direction: column; align-items: center; gap: 18px;
}
.icon-symbol {
  width: 76px; height: 76px; border-radius: 18px;
  display: flex; align-items: center; justify-content: center;
  font-size: 38px; font-weight: 900; letter-spacing: -0.02em;
}
.icon-bg-black  { background: var(--black); color: var(--white); }
.icon-bg-yellow { background: var(--yellow); color: var(--black); }
.icon-bg-purple { background: var(--purple-soft); color: var(--black); }
.icon-col-title { font-weight: 800; font-size: 24px; color: var(--black); }
.icon-col-body  { font-size: 18px; line-height: 1.5; color: var(--muted); font-weight: 500; }
```

---

### 5.6 COMPARISON SLIDE — ДО / ПОСЛЕ — НОВЫЙ ТИП

**Зачем:** Мгновенно показывает ценность изучаемой технологии. Самый запоминающийся тип слайда.

**Структура:** Две колонки с визуальным контрастом:
- **Левая «ДО»**: серый/бежевый фон, бледный контент, лейбл «БЕЗ CSS» / «СЫРОЙ HTML».
- **Правая «ПОСЛЕ»**: яркий, живой результат, лейбл «С CSS» / «ГОТОВЫЙ САЙТ».

```
┌──────────────────┬──────────────────┐
│    ✕  ДО         │    ✓  ПОСЛЕ      │
│                  │                  │
│  [серый блок     │  [яркий блок    │
│   сырого кода    │   готового      │
│   или текста]    │   результата]   │
│                  │                  │
│  Нет стилей,     │  Красиво,       │
│  голый текст     │  структурно     │
└──────────────────┴──────────────────┘
```

```css
.comparison-grid {
  display: grid; grid-template-columns: 1fr 1fr; gap: 28px;
  width: 100%; height: 100%; align-items: stretch;
}
.compare-card {
  border-radius: 24px; padding: 32px;
  display: flex; flex-direction: column; gap: 16px;
}
.compare-card.before {
  background: #F0EDE6; border: 2px dashed #D0CCC4;
}
.compare-card.after {
  background: var(--white); border: 2px solid var(--yellow);
  box-shadow: 0 8px 24px rgba(223, 255, 79, 0.15);
}
.compare-label {
  display: inline-flex; align-items: center; gap: 8px;
  font-size: 14px; font-weight: 800; letter-spacing: 0.12em;
  text-transform: uppercase; padding: 6px 16px; border-radius: 100px;
  width: fit-content;
}
.compare-label.before-label {
  background: #D0CCC4; color: var(--black);
}
.compare-label.after-label {
  background: var(--yellow); color: var(--black);
}
```

---

### 5.7 QUOTE / KEY INSIGHT SLIDE — НОВЫЙ ТИП

**Зачем:** Акцентировать одну ключевую мысль, которую ученик должен запомнить. Передышка между плотными слайдами.

**Структура:** Центрированная крупная фраза, возможно с декоративными кавычками. Минимум элементов.

```
┌─────────────────────────────────────────────────────────┐
│  HEADER                                                 │
├─────────────────────────────────────────────────────────┤
│                                                         │
│              «                                          │
│         HTML описывает ЧТО,                             │
│         CSS — КАК ЭТО ВЫГЛЯДИТ                          │
│              »                                          │
│                                                         │
│         ──────                                          │
│         КЛЮЧЕВАЯ МЫСЛЬ УРОКА                            │
│                                                         │
├─────────────────────────────────────────────────────────┤
│  FOOTER                                                 │
└─────────────────────────────────────────────────────────┘
```

```css
.quote-content {
  display: flex; flex-direction: column; align-items: center; justify-content: center;
  text-align: center; width: 100%; max-width: 900px; margin: 0 auto; gap: 24px;
}
.quote-mark {
  font-family: 'Playfair Display', serif; font-size: 80px;
  color: var(--yellow); line-height: 0.5;
}
.quote-text {
  font-family: 'Playfair Display', serif; font-style: italic;
  font-size: 44px; font-weight: 700; line-height: 1.3;
  color: var(--black);
}
.quote-line {
  width: 60px; height: 5px; background: var(--yellow); border-radius: 3px;
}
.quote-label {
  font-weight: 800; font-size: 14px; letter-spacing: 0.15em;
  text-transform: uppercase; color: var(--muted);
}
```

```html
<div class="slide" data-index="N">
  <header class="slide-header">...</header>
  <div class="slide-content">
    <div class="quote-content">
      <div class="quote-mark">«</div>
      <div class="quote-text">HTML описывает ЧТО на странице,<br/>CSS — КАК это выглядит</div>
      <div class="quote-line"></div>
      <div class="quote-label">КЛЮЧЕВАЯ МЫСЛЬ УРОКА</div>
    </div>
  </div>
  <footer class="slide-footer">...</footer>
</div>
```

---

### 5.8 FULL-VISUAL SLIDE — НОВЫЙ ТИП

**Зачем:** Показать большую схему, скриншот, визуальную метафору. Изображение занимает 70–80% площади.

**Структура:** Одна большая картинка/схема с маленькой подписью.

```css
.full-visual-content {
  display: flex; flex-direction: column; align-items: center;
  justify-content: center; gap: 16px; width: 100%; height: 100%;
}
.full-visual-image {
  max-width: 85%; max-height: 78%;
  border-radius: 20px; overflow: hidden;
  box-shadow: 0 12px 36px rgba(10, 10, 10, 0.1);
  border: 2px solid var(--border);
}
.full-visual-image img { width: 100%; height: 100%; object-fit: contain; display: block; }
.full-visual-caption {
  font-size: 16px; font-weight: 700; color: var(--muted);
  letter-spacing: 0.1em; text-transform: uppercase;
}
```

---

### 5.9 STATS SLIDE (Статистика)

Сетка 2×2 из цветных карточек с крупными числами. Хорош для «Почему выбираем VS Code» и подобных аргументов.

```css
.stat-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 18px; }
.stat-card { border-radius: 22px; padding: 28px; position: relative; }
.stat-card.yellow { background: var(--yellow); }
.stat-card.purple { background: var(--purple-soft); }
.stat-card.white  { background: var(--white); border: 2px solid var(--border); }
.stat-card.black  { background: var(--black); }
.stat-label {
  font-size: 16px; font-weight: 800; letter-spacing: 0.12em;
  text-transform: uppercase; color: var(--label); margin-bottom: 14px;
}
.stat-card.black .stat-label { color: rgba(255,255,255,0.6); }
.stat-value { font-weight: 900; font-size: 56px; line-height: 1; color: var(--black); }
.stat-card.black .stat-value { color: var(--white); }
.stat-desc {
  font-size: 18px; font-weight: 500; line-height: 1.4;
  color: var(--text); margin-top: 14px;
}
.stat-card.black .stat-desc { color: rgba(255,255,255,0.8); }
```

---

### 5.10 PRACTICE SLIDE (Практика)

Для совместных и самостоятельных заданий. Левая часть — описание задачи и шаги, правая — wireframe/чеклист.

> Фон левой карточки для совместной практики: `rgba(200,184,240,0.15)`. Для самостоятельной: `rgba(223,255,79,0.25)`.

---

### 5.11 CATALOG / GRID SLIDE (Каталог)

Для перечисления тегов, свойств и т.п. Сетка 2×3 или 3×2 карточек. Каждая карточка: **имя тега + роль в 2–3 слова**. Никаких длинных описаний — спикер объясняет устно.

```css
.catalog-wrap {
  width: 100%; display: flex; flex-direction: column; gap: 16px;
}
.catalog-title {
  font-family: 'Unbounded', 'Neutral Face', 'Montserrat', sans-serif;
  font-weight: 800; font-size: 36px; letter-spacing: -0.02em; color: var(--black);
  white-space: nowrap;
}
.catalog-grid {
  display: grid; grid-template-columns: repeat(3, 1fr); gap: 14px;
}
.catalog-item {
  background: var(--white); border: 2px solid var(--border);
  border-radius: 18px; padding: 18px 22px;
  display: flex; flex-direction: column; gap: 8px;
}
.catalog-tag-name {
  font-family: 'SF Mono', 'Fira Code', Menlo, Consolas, monospace;
  font-weight: 900; font-size: 22px; color: var(--black);
}
.catalog-tag-role {
  font-size: 12px; font-weight: 800; letter-spacing: 0.12em;
  text-transform: uppercase; color: var(--label);
  background: var(--bg); padding: 3px 10px; border-radius: 6px;
}
.catalog-tag-desc {
  font-size: 16px; font-weight: 500; color: var(--muted); line-height: 1.4;
}
```

---

### Рекомендуемый порядок слайдов для урока из 13 слайдов

| # | Тип | Пример |
|---|-----|--------|
| 1 | **Title** | Постерная обложка (название, бейдж, слоган) |
| 2 | **TOC** | Содержание урока (8 пунктов) |
| 3 | **Section Divider** | `01 · ТЕМА ПЕРВОЙ СЕКЦИИ` |
| 4 | **Content 2-col** | Введение в тему (текст + визуал) |
| 5 | **Content 3-col** или **Catalog** | Три варианта / каталог тегов |
| 6 | **Stats** | Аргументы (числа, факты) |
| 7 | **Quote** | Ключевая мысль первой половины |
| 8 | **Section Divider** | `02 · ТЕМА ВТОРОЙ СЕКЦИИ` |
| 9 | **Content 2-col** | Новая тема (текст + код) |
| 10 | **Comparison** | ДО / ПОСЛЕ или визуальная схема |
| 11 | **Full-Visual** | Большая схема / скриншот |
| 12 | **Practice** | Совместная практика |
| 13 | **Practice** | Самостоятельная работа |

Это **не жёсткий шаблон**, а ориентир. Конкретный порядок зависит от материала. Главное — **не допускать монотонности**.

---

## 6. КОМПОНЕНТЫ-АТОМЫ

### Burger icon
```html
<div class="burger"><span></span><span></span><span></span></div>
```
```css
.burger { display: flex; flex-direction: column; gap: 6px; }
.burger span { display: block; width: 32px; height: 4px; background: var(--black); border-radius: 2px; }
```

### Pill-badge (тег-пилюля)
```css
.title-badge {
  background: var(--black); color: var(--white); border-radius: 100px;
  padding: 7px 22px; font-size: 13px; font-weight: 800;
  letter-spacing: 0.15em; text-transform: uppercase;
  display: inline-flex; align-items: center; gap: 10px;
}
.title-badge::before { content: '●'; color: var(--yellow); }
```

### Group pill (маленькая плашка-категория)
```css
.group-pill {
  font-size: 14px; font-weight: 800; letter-spacing: 0.12em;
  text-transform: uppercase; padding: 6px 16px; border-radius: 100px;
}
.group-pill.bg-purple { background: var(--purple-soft); color: var(--black); }
.group-pill.bg-yellow { background: var(--yellow); color: var(--black); }
.group-pill.bg-dark   { background: var(--black); color: var(--white); }
```

### Accent lines (жёлтые декоративные линии)
```css
.accent-lines-row { display: flex; align-items: center; gap: 20px; }
.accent-line { height: 5px; width: 80px; background: var(--yellow); flex-shrink: 0; border-radius: 3px; }
```

### Decorative circles (на титуле)
```css
.deco-circles { position: absolute; top: 16px; right: 56px; pointer-events: none; }
.deco-circle-lg {
  width: 340px; height: 340px;
  border: 2px solid rgba(10,10,10,0.1); border-radius: 50%;
}
.deco-circle-sm {
  width: 220px; height: 220px;
  border: 2px solid rgba(10,10,10,0.07); border-radius: 50%;
  position: absolute; top: 60px; left: 60px;
}
```

### Photo card (фото в контентном слайде)
```css
.photo-card {
  flex: 1; border-radius: 24px; overflow: hidden;
  position: relative; min-height: 0;
}
.photo-card img { width: 100%; height: 100%; object-fit: cover; display: block; }
.photo-label {
  position: absolute; bottom: 16px; left: 16px;
  background: var(--white); padding: 8px 18px; border-radius: 10px;
  font-size: 16px; font-weight: 800; letter-spacing: 0.1em;
  text-transform: uppercase; color: var(--black);
}
```

### Tags card (жёлтая карточка с пилюлями)
```css
.tags-card { background: var(--yellow); border-radius: 24px; padding: 26px 32px; flex-shrink: 0; }
.tags-label {
  font-size: 18px; font-weight: 800; letter-spacing: 0.12em;
  text-transform: uppercase; color: var(--label); margin-bottom: 14px;
}
.tags-pills { display: flex; flex-wrap: wrap; gap: 12px; }
.tag-pill {
  background: rgba(255,255,255,0.75); border-radius: 100px;
  padding: 10px 22px; font-size: 21px; font-weight: 700; color: var(--black);
}
```

### List card (карточка-строка для списков)
```css
.list-card {
  background: var(--white); border: 2px solid var(--border); border-radius: 20px;
  padding: 22px 30px; display: flex; align-items: center; gap: 20px;
}
.list-card-icon {
  width: 62px; height: 62px; background: var(--beige); border-radius: 14px;
  display: flex; align-items: center; justify-content: center; flex-shrink: 0;
}
.list-card-icon svg { width: 32px; height: 32px; }
.list-card-title { font-weight: 800; font-size: 22px; color: var(--black); }
.list-card-sub { font-size: 18px; font-weight: 500; color: var(--muted); margin-top: 4px; }
```

---

## 7. ОФОРМЛЕНИЕ БЛОКОВ КОДА

### Правила

- ❌ **ЗАПРЕЩЕНО** вытягивать код в одну горизонтальную строку!
- ✅ `white-space: pre;` (или `pre-wrap`) **ОБЯЗАТЕЛЬНО** для `.code-box`.
- Код читается **строго сверху вниз**, с отступами в 2 пробела.
- Блоки кода оформляются как окно редактора VS Code (`.editor-frame`).

### Editor-frame (окно редактора)

```html
<div class="editor-frame">
  <div class="editor-topbar">
    <div class="editor-dots">
      <span class="dot red"></span>
      <span class="dot yellow"></span>
      <span class="dot green"></span>
    </div>
    <span class="editor-tab">index.html</span>
  </div>
  <div class="code-box"><span class="c-tag">&lt;h1&gt;</span>Заголовок<span class="c-tag">&lt;/h1&gt;</span>
<span class="c-tag">&lt;p&gt;</span>Абзац текста<span class="c-tag">&lt;/p&gt;</span></div>
</div>
```

### CSS

```css
.editor-frame {
  background: var(--code-bg, #12131A);
  border-radius: 14px; border: 1.5px solid #2B2C42;
  overflow: hidden; box-shadow: 0 6px 20px rgba(0,0,0,0.15);
}
.editor-topbar {
  display: flex; align-items: center; justify-content: space-between;
  padding: 8px 14px; background: #181926;
  border-bottom: 1px solid #2B2C42;
}
.editor-dots { display: flex; gap: 6px; align-items: center; }
.dot { width: 10px; height: 10px; border-radius: 50%; }
.dot.red    { background: #FF5F56; }
.dot.yellow { background: #FFBD2E; }
.dot.green  { background: #27C93F; }
.editor-tab {
  font-size: 12px; font-weight: 700; color: #8B949E;
  font-family: 'SF Mono', 'Fira Code', Menlo, Consolas, monospace;
  letter-spacing: 0.05em;
}

.code-box {
  padding: 16px 20px;
  font-family: 'SF Mono', 'Fira Code', Menlo, Consolas, Monaco, monospace;
  font-size: 16px; line-height: 1.6; color: #F0F0FF;
  white-space: pre;
  tab-size: 2;
  overflow-x: auto;
  overflow-y: auto;
}
.editor-frame {
  min-height: 0;
}
.editor-frame .code-box {
  border-radius: 0;
  max-height: 480px;
}
.code-box::-webkit-scrollbar {
  width: 8px; height: 8px;
}
.code-box::-webkit-scrollbar-track {
  background: #1C1D26; border-radius: 4px;
}
.code-box::-webkit-scrollbar-thumb {
  background: #38394E; border-radius: 4px;
}
.code-box::-webkit-scrollbar-thumb:hover {
  background: var(--yellow);
}

/* Подсветка синтаксиса */
.c-tag  { color: #FF7B72; font-weight: bold; }    /* HTML-теги */
.c-attr { color: #79C0FF; }                        /* Атрибуты */
.c-str  { color: #A5D6FF; }                        /* Значения атрибутов */
.c-sel  { color: #FFA657; font-weight: bold; }     /* CSS-селекторы */
.c-prop { color: #7EE787; }                        /* CSS-свойства */
.c-val  { color: #DFFF4F; }                        /* CSS-значения */
.c-com  { color: #8B949E; font-style: italic; }    /* Комментарии */
```

---

## 8. КАНОНИЧНЫЙ ШАБЛОН CSS-БАЗЫ

Каждый файл `lesson-X.html` **начинается** с этого единого набора стилей. Размеры и отступы — каноничные, не менять от урока к уроку.

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
  --code-bg:     #12131A;
}

body {
  background: var(--bg);
  font-family: 'Montserrat', sans-serif;
  height: 100vh;
  overflow: hidden;
  display: flex;
  flex-direction: column;
}

/* ── VIEWPORT ── */
.viewport { flex: 1; position: relative; overflow: hidden; }

.slide {
  position: absolute; inset: 0;
  opacity: 0; transform: translateX(80px);
  transition: opacity 0.4s ease, transform 0.4s cubic-bezier(0.4,0,0.2,1);
  pointer-events: none; display: flex; flex-direction: column;
}
.slide.active { opacity: 1; transform: translateX(0); pointer-events: all; }
.slide.exit   { opacity: 0; transform: translateX(-80px); }

/* ── HEADER ── */
.slide-header {
  display: flex; justify-content: space-between; align-items: flex-start;
  padding: 24px 56px 0; flex-shrink: 0;
}
.header-brand { display: flex; align-items: center; gap: 18px; }
.burger { display: flex; flex-direction: column; gap: 6px; }
.burger span { display: block; width: 32px; height: 4px; background: var(--black); border-radius: 2px; }
.brand-title { font-weight: 800; font-size: 24px; letter-spacing: 0.05em; text-transform: uppercase; color: var(--black); }
.brand-sub   { font-weight: 600; font-size: 16px; letter-spacing: 0.12em; text-transform: uppercase; color: var(--muted); margin-top: 4px; }
.header-right { text-align: right; }
.header-lesson { font-size: 16px; font-weight: 700; letter-spacing: 0.1em; text-transform: uppercase; color: var(--black); }

/* ── CONTENT AREA ── */
.slide-content {
  flex: 1; padding: 14px 56px 20px;
  display: flex; align-items: center; justify-content: center;
  overflow: hidden; min-height: 0;
}

/* ── FOOTER ── */
.slide-footer {
  display: flex; justify-content: space-between; align-items: center;
  padding: 10px 260px 20px 56px;
  font-size: 15px; font-weight: 600; letter-spacing: 0.1em;
  text-transform: uppercase; color: var(--muted); flex-shrink: 0;
}

/* ── NAV BUTTONS ── */
.nav-bar {
  position: fixed; bottom: 16px; right: 36px;
  display: flex; gap: 12px; z-index: 100;
}
.nav-btn {
  width: 58px; height: 58px; background: var(--white);
  border: 2px solid var(--border); border-radius: 16px;
  font-size: 28px; cursor: pointer;
  display: flex; align-items: center; justify-content: center;
  box-shadow: 0 4px 14px rgba(10,10,10,0.06);
  transition: background 0.2s, border-color 0.2s, transform 0.1s;
  font-family: 'Montserrat', sans-serif;
}
.nav-btn:hover    { background: var(--black); color: var(--white); border-color: var(--black); }
.nav-btn:active   { transform: scale(0.95); }
.nav-btn:disabled { opacity: 0.25; pointer-events: none; box-shadow: none; }
.nav-btn.active   { background: var(--yellow) !important; color: var(--black) !important; border-color: var(--black) !important; box-shadow: 0 0 0 3px rgba(223,255,79,0.45); }
.nav-btn-icon {
  width: 28px; height: 28px; object-fit: contain; display: block;
  pointer-events: none; transition: transform 0.2s, filter 0.2s;
}
.nav-btn:hover .nav-btn-icon { filter: brightness(0) invert(1); }
.nav-btn.active .nav-btn-icon { filter: none; transform: scale(1.08); }

/* ── LOUPE / MAGNIFIER MODE ── */
.magnifier-lens {
  position: fixed; top: 0; left: 0;
  width: 180px; height: 180px; border-radius: 50%;
  border: 3px solid var(--black);
  box-shadow: 0 10px 30px rgba(10,10,10,0.35), 0 0 0 2px var(--yellow), inset 0 0 0 2px rgba(255,255,255,0.6);
  pointer-events: none; overflow: hidden; z-index: 9999;
  display: none; background: var(--bg); will-change: transform;
}
.magnifier-lens.active { display: block; }
.magnifier-lens::after {
  content: ''; position: absolute; top: 50%; left: 50%;
  width: 7px; height: 7px; background: var(--yellow);
  border: 1.5px solid var(--black); border-radius: 50%;
  transform: translate(-50%, -50%); pointer-events: none; z-index: 10;
  box-shadow: 0 0 4px rgba(0,0,0,0.5);
}
.magnifier-inner { position: absolute; top: 0; left: 0; pointer-events: none; will-change: transform; }
body.magnifier-mode, body.magnifier-mode * { cursor: none !important; }
body.magnifier-mode .nav-bar, body.magnifier-mode .nav-bar * { cursor: pointer !important; }
```

---

## 9. НАВИГАЦИЯ И ЛУПА — HTML + JS

### HTML кнопок и лупы (перед `</body>`)
```html
<div class="nav-bar">
  <button class="nav-btn" id="btnPrev" onclick="navigate(-1)" disabled title="Назад (←)">←</button>
  <button class="nav-btn" id="btnLoupe" onclick="toggleMagnifier()" title="Режим лупы (L / Z)">
    <img src="../../assets/icons/loupe.png" class="nav-btn-icon" alt="Лупа" />
  </button>
  <button class="nav-btn" id="btnNext" onclick="navigate(1)" title="Вперёд (→)">→</button>
</div>

<div id="magnifierLens" class="magnifier-lens">
  <div id="magnifierInner" class="magnifier-inner"></div>
</div>
```

> Также допускается inline SVG для лупы вместо `<img>`, если `/assets/icons/loupe.png` недоступен.

### JavaScript (стандартный, одинаковый во всех уроках)
```javascript
<script>
  const slides  = document.querySelectorAll('.slide');
  const btnPrev = document.getElementById('btnPrev');
  const btnNext = document.getElementById('btnNext');
  const total   = slides.length;
  let current   = 0;

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
  const loupeRadius = 90; // 180px diameter / 2 (увеличено в 2 раза)
  const loupeZoom = 2.0;
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
   * ═══════════════════════════════════════════════════════
   * ПРАВИЛЬНАЯ МАТЕМАТИКА ЛУПЫ — НЕ МЕНЯТЬ!
   *
   * transformOrigin устанавливается в точку курсора.
   * scale(2) масштабирует вокруг этой точки.
   * translate смещает точку в центр линзы.
   * Результат: линза показывает ровно то, что под курсором.
   * ═══════════════════════════════════════════════════════
   */
  function updateLoupeTransform() {
    rafId = null;
    if (!isLoupeActive) return;
    lens.style.transform = `translate3d(${mouseX - loupeRadius}px, ${mouseY - loupeRadius}px, 0)`;
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

  let touchStartX = 0;
  document.addEventListener('touchstart', e => { touchStartX = e.touches[0].clientX; });
  document.addEventListener('touchend', e => {
    const dx = e.changedTouches[0].clientX - touchStartX;
    if (Math.abs(dx) > 50) navigate(dx < 0 ? 1 : -1);
  });
</script>
```

---

## 10. ГЕНЕРАЦИЯ ИЗОБРАЖЕНИЙ

### Запрещено
```html
<!-- ❌ Системные эмодзи -->
<span class="icon">🎨</span>
<div class="card-icon">📁</div>
```

### Разрешено
```html
<!-- ✅ SVG inline -->
<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
  <polyline points="16 18 22 12 16 6"></polyline>
  <polyline points="8 6 2 12 8 18"></polyline>
</svg>

<!-- ✅ Сгенерированное изображение -->
<img src="./img/vscode-logo.png" alt="VS Code" class="app-icon" />

<!-- ✅ Текстовый символ (Unicode, не emoji) -->
<span class="icon-symbol">&lt;/&gt;</span>
```

### Когда генерировать через `generate_image`
- Фото для контентного слайда (рабочее место, код на экране)
- Логотипы программ (VS Code, Git, Chrome)
- Иллюстрации концепций (схема DOM, пайплайн)
- Иконки для карточек — вместо эмодзи

### Когда использовать SVG
- Простые геометрические иконки (стрелки, `</>`, галочки)
- Элементы UI (кнопки, индикаторы)

### Стиль генерируемых изображений
- **Фото**: тёплые, кинематографические, атмосферные
- **Логотипы**: flat-дизайн, чистый фон, минимализм
- **Иконки**: монохромные или в цветах палитры
- **Схемы**: светлый фон, чёткие линии, цвета из палитры

---

## 11. МОБИЛЬНЫЙ БЛОКИРОВЩИК

Все страницы курса **обязаны** подключать `/mobile-block.js` перед `</body>`:

```html
  <script src="/mobile-block.js"></script>
</body>
```

Путь всегда **абсолютный**. Скрипт показывает fullscreen-оверлей «Открой на компьютере» при ширине `< 960px`.

---

## 12. ЧЕКЛИСТ ПЕРЕД ФИНАЛЬНЫМ РЕНДЕРОМ

### Техническое
- [ ] Шрифты Montserrat + Playfair Display + Unbounded подключены через Google Fonts
- [ ] Фон страницы `#EEEEF8` (лавандовый)
- [ ] Header на всех слайдах, кроме Title. **Без дат и времени!**
- [ ] Footer с модулем и номером страницы. `padding-right: 260px`!
- [ ] Навигация `← →` + кнопки + свайп работают
- [ ] Лупа работает (клавиша L/Z/Д)
- [ ] Подключён `/mobile-block.js`

### Содержание
- [ ] **Контент согласован с преподавателем**: агент не создаёт слайды самовольно, не пишет контент «из себя» и не верстает презентацию без прямых указаний (правило 1.11)
- [ ] **На титульном слайде НЕТ Agenda**: содержание урока находится строго на Слайде 2 (TOC), без дублирования
- [ ] **Обращение на «вы»** — никаких «ты», «твоё»
- [ ] **Программа не нарушена** — нет забегания вперёд по материалу
- [ ] **Принцип «Talk, Do Not Read»** — нет простыней текста
- [ ] **Принцип «Show, Do Not Just Tell»** — есть метафоры, схемы, ДО/ПОСЛЕ

### Визуальная качество
- [ ] **Заголовки слайдов строго в одну строку**: `.content-h2` и `.catalog-title` оформлены шрифтом Unbounded / Neutral Face, БЕЗ тегов `<br/>`
- [ ] **Минимум 2 разных типа лейаутов** среди контентных слайдов
- [ ] **Минимум 1 section divider** между секциями
- [ ] **НЕТ** больше 3 одинаковых `content-two-col` подряд
- [ ] **Системные эмодзи НЕ использованы** — только SVG и `generate_image`
- [ ] **Код в `.code-box` с `white-space: pre`** — читается сверху вниз
- [ ] **Блоки кода оформлены через `.editor-frame`** с точками и именем файла
- [ ] **Титульный слайд — flex-колонка**, `.title-bottom` с `padding-right: 280px`
### Git и синхронизация
- [ ] Все созданные и изменённые файлы добавлены: `git add .`
- [ ] Создан осмысленный коммит: `git commit -m "..."`
- [ ] Изменения успешно отправлены в удалённый репозиторий: `git push origin main`
- [ ] Статус `git status` чистый перед завершением ответа

---

## 13. СИНХРОНИЗАЦИЯ С GIT И АВТОМАТИЧЕСКИЙ ПУШ

Каждый AI-агент при взаимодействии с кодовой базой проекта **обязан непрерывно синхронизировать результаты с GitHub**:

1. **Триггеры для коммита и пуша**:
   - Создан каркас или файл презентации урока (`lesson-X.html`).
   - Внесены любые исправления (изменён текст слайда, подправлена таблица, обновлены стили).
   - Добавлены или удалены файлы, ассеты, картинки или ссылки.
   - Обновлена навигация в `index.html` или документация в `AGENTS.md`.
2. **Обязательная цепочка команд**:
   ```bash
   git add .
   git commit -m "Осмысленное описание изменений (feat/fix/docs)"
   git push origin main
   ```
3. **Запрет на незапушенный код**:
   - ❌ Никакой ответ пользователю не должен завершаться со статусом «есть незакоммиченные/незапушенные изменения».
   - Код всегда должен быть в актуальном состоянии в удалённом репозитории `origin`.

---

*Backend Academy*
