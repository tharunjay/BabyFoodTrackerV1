(() => {
  'use strict';

  const PROFILE = {
    startDate: '2026-05-18',
    endDate: '2026-07-15',
  };

  const ROTATION = 'Eggs Mon–Wed · Peanut butter Thu–Sat · Sun rest';

  const m = (text, amount, isNew) => ({ text, amount, isNew });

  const PLAN = [
    {
      label: 'Week 1',
      stage: '2 meals · 1 fruit + 1 veggie · each food 3 days',
      focus: 'Ease in. Each fruit and veggie served 3 days in a row — never alternated. Smooth, well-cooked purées. No new proteins yet.',
      daily: { meals: '2 meals', texture: 'Smooth purée', portion: '~2–3 tbsp/meal', total: '~40–60 g/day', milk: '600–800 ml milk' },
      days: [
        { date: '2026-05-18', meals: {
          breakfast: m('Pear purée (cooked, smooth)', '2–3 tbsp'),
          lunch: m('Sweet potato purée', '2–3 tbsp'),
        }},
        { date: '2026-05-19', meals: {
          breakfast: m('Pear purée', '2–3 tbsp'),
          lunch: m('Sweet potato purée', '2–3 tbsp'),
        }},
        { date: '2026-05-20', meals: {
          breakfast: m('Pear purée', '2–3 tbsp'),
          lunch: m('Sweet potato purée', '2–3 tbsp'),
        }},
        { date: '2026-05-21', meals: {
          breakfast: m('Apple purée (cooked, smooth)', '2–3 tbsp'),
          lunch: m('Butternut squash purée', '2–3 tbsp'),
        }},
        { date: '2026-05-22', meals: {
          breakfast: m('Apple purée', '2–3 tbsp'),
          lunch: m('Butternut squash purée', '2–3 tbsp'),
        }},
        { date: '2026-05-23', meals: {
          breakfast: m('Apple purée', '2–3 tbsp'),
          lunch: m('Butternut squash purée', '2–3 tbsp'),
        }},
        { date: '2026-05-24', meals: {
          breakfast: m('Banana mash', '2–3 tbsp'),
          lunch: m('Pumpkin purée', '2–3 tbsp'),
        }},
      ],
    },
    {
      label: 'Week 2',
      stage: '2 meals · add lentils, egg & peanut butter',
      focus: 'Still 2 meals. Egg 3 days in a row, then peanut butter 3 days in a row — never alternated. Fruits & veggies also run 3 days each.',
      daily: { meals: '2 meals', texture: 'Smooth purée → slightly thicker', portion: '~3 tbsp/meal', total: '~60–80 g/day', milk: '600–800 ml milk' },
      days: [
        { date: '2026-05-25', meals: {
          breakfast: m('Scrambled egg with banana', '1 small egg + 2 tbsp banana', 'Egg'),
          lunch: m('Red lentil + pumpkin purée', '3 tbsp'),
        }},
        { date: '2026-05-26', meals: {
          breakfast: m('Scrambled egg with banana', '1 small egg + 2 tbsp banana'),
          lunch: m('Red lentil + pumpkin purée', '3 tbsp'),
        }},
        { date: '2026-05-27', meals: {
          breakfast: m('Scrambled egg with mango', '1 small egg + 2 tbsp mango'),
          lunch: m('Red lentil + parsnip purée', '3 tbsp'),
        }},
        { date: '2026-05-28', meals: {
          breakfast: m('Oat porridge with peanut butter + mango', '3 tbsp porridge + 1 tsp smooth PB', 'Peanut butter'),
          lunch: m('Red lentil + parsnip purée', '3 tbsp'),
        }},
        { date: '2026-05-29', meals: {
          breakfast: m('Oat porridge with peanut butter + mango', '3 tbsp + 1 tsp PB'),
          lunch: m('Red lentil + parsnip purée', '3 tbsp'),
        }},
        { date: '2026-05-30', meals: {
          breakfast: m('Oat porridge with peanut butter + pear', '3 tbsp + 1 tsp PB'),
          lunch: m('Red lentil + zucchini purée', '3 tbsp'),
        }},
        { date: '2026-05-31', meals: {
          breakfast: m('Oat porridge with pear', '3 tbsp'),
          lunch: m('Red lentil + zucchini purée', '3 tbsp'),
        }},
      ],
    },
    {
      label: 'Week 3',
      stage: '3 meals · thicker textures, fruits return',
      focus: 'Move smooth → light mash. Add a rice/oat dinner. Eggs Mon–Wed, PB Thu–Sat (3 each, no alternation). Apple and banana return for 3 days each.',
      daily: { meals: '3 meals', texture: 'Thick purée / light mash', portion: '~3 tbsp/meal', total: '~100–120 g/day', milk: '600–700 ml milk' },
      days: [
        { date: '2026-06-01', meals: {
          breakfast: m('Scrambled egg with pear', '1 small egg + 2 tbsp pear'),
          lunch: m('Red lentil + zucchini mash', '3 tbsp'),
          dinner: m('Rice porridge with pear', '3 tbsp'),
        }},
        { date: '2026-06-02', meals: {
          breakfast: m('Scrambled egg with apple', '1 small egg + 2 tbsp apple'),
          lunch: m('Red lentil + broccoli mash', '3 tbsp'),
          dinner: m('Rice porridge with apple', '3 tbsp'),
        }},
        { date: '2026-06-03', meals: {
          breakfast: m('Scrambled egg with apple', '1 small egg + 2 tbsp apple'),
          lunch: m('Red lentil + broccoli mash', '3 tbsp'),
          dinner: m('Rice porridge with apple', '3 tbsp'),
        }},
        { date: '2026-06-04', meals: {
          breakfast: m('Oat porridge with peanut butter + apple', '3 tbsp + 1 tsp PB'),
          lunch: m('Red lentil + broccoli mash', '3 tbsp'),
          dinner: m('Oat porridge with apple', '3 tbsp'),
        }},
        { date: '2026-06-05', meals: {
          breakfast: m('Oat porridge with peanut butter + banana', '3 tbsp + 1 tsp PB'),
          lunch: m('Red lentil + cauliflower mash', '3 tbsp'),
          dinner: m('Oat porridge with banana', '3 tbsp'),
        }},
        { date: '2026-06-06', meals: {
          breakfast: m('Oat porridge with peanut butter + banana', '3 tbsp + 1 tsp PB'),
          lunch: m('Red lentil + cauliflower mash', '3 tbsp'),
          dinner: m('Oat porridge with banana', '3 tbsp'),
        }},
        { date: '2026-06-07', meals: {
          breakfast: m('Oat porridge with banana', '3 tbsp'),
          lunch: m('Red lentil + cauliflower mash', '3 tbsp'),
          dinner: m('Oat porridge with banana', '3 tbsp'),
        }},
      ],
    },
    {
      label: 'Week 4',
      stage: '3 meals · introduce pasta',
      focus: 'Tiny pasta shapes (stelline, orzo) cooked very soft — 3 days in a row, then back to lentil mash for 3 days. No new meat yet. Blueberry introduced Sunday.',
      daily: { meals: '3 meals', texture: 'Light mash with small soft lumps', portion: '~3–4 tbsp/meal', total: '~120–140 g/day', milk: '500–700 ml milk' },
      days: [
        { date: '2026-06-08', meals: {
          breakfast: m('Scrambled egg with mango', '1 small egg + 3 tbsp mango'),
          lunch: m('Tiny pasta with red lentil + pea sauce', '4 tbsp', 'Pasta'),
          dinner: m('Rice porridge with mango', '3 tbsp'),
        }},
        { date: '2026-06-09', meals: {
          breakfast: m('Scrambled egg with mango', '1 small egg + 3 tbsp mango'),
          lunch: m('Tiny pasta with red lentil + pea sauce', '4 tbsp'),
          dinner: m('Rice porridge with mango', '3 tbsp'),
        }},
        { date: '2026-06-10', meals: {
          breakfast: m('Scrambled egg with mango', '1 small egg + 3 tbsp mango'),
          lunch: m('Tiny pasta with red lentil + pea sauce', '4 tbsp'),
          dinner: m('Rice porridge with mango', '3 tbsp'),
        }},
        { date: '2026-06-11', meals: {
          breakfast: m('Oat porridge with peanut butter + pear', '3–4 tbsp + 1–2 tsp PB'),
          lunch: m('Red lentil + sweet potato mash', '4 tbsp'),
          dinner: m('Oat porridge with pear', '3 tbsp'),
        }},
        { date: '2026-06-12', meals: {
          breakfast: m('Oat porridge with peanut butter + pear', '3–4 tbsp + 1–2 tsp PB'),
          lunch: m('Red lentil + sweet potato mash', '4 tbsp'),
          dinner: m('Oat porridge with pear', '3 tbsp'),
        }},
        { date: '2026-06-13', meals: {
          breakfast: m('Oat porridge with peanut butter + pear', '3–4 tbsp + 1–2 tsp PB'),
          lunch: m('Red lentil + sweet potato mash', '4 tbsp'),
          dinner: m('Oat porridge with pear', '3 tbsp'),
        }},
        { date: '2026-06-14', meals: {
          breakfast: m('Oat porridge with blueberry mash', '3–4 tbsp', 'Blueberry'),
          lunch: m('Red lentil + butternut squash mash', '4 tbsp'),
          dinner: m('Oat porridge with blueberry', '3 tbsp'),
        }},
      ],
    },
    {
      label: 'Week 5',
      stage: '3 meals · first meat — chicken',
      focus: 'Chicken at lunch all week — pureed or finely shredded. Pasta returns Wed–Fri for 3 days. Peach introduced Saturday.',
      daily: { meals: '3 meals', texture: 'Mash with soft lumps', portion: '~4 tbsp/meal', total: '~140–160 g/day', milk: '500–700 ml milk' },
      days: [
        { date: '2026-06-15', meals: {
          breakfast: m('Scrambled egg with blueberry', '1 small egg + 3 tbsp blueberry'),
          lunch: m('Chicken + butternut squash mash', '4 tbsp', 'Chicken'),
          dinner: m('Rice porridge with blueberry', '4 tbsp'),
        }},
        { date: '2026-06-16', meals: {
          breakfast: m('Scrambled egg with blueberry', '1 small egg + 3 tbsp blueberry'),
          lunch: m('Chicken + butternut squash mash', '4 tbsp'),
          dinner: m('Rice porridge with blueberry', '4 tbsp'),
        }},
        { date: '2026-06-17', meals: {
          breakfast: m('Scrambled egg with apple', '1 small egg + 3 tbsp apple'),
          lunch: m('Tiny pasta with chicken + pumpkin', '4 tbsp'),
          dinner: m('Rice porridge with apple', '4 tbsp'),
        }},
        { date: '2026-06-18', meals: {
          breakfast: m('Oat porridge with peanut butter + apple', '4 tbsp + 1–2 tsp PB'),
          lunch: m('Tiny pasta with chicken + pumpkin', '4 tbsp'),
          dinner: m('Oat porridge with apple', '4 tbsp'),
        }},
        { date: '2026-06-19', meals: {
          breakfast: m('Oat porridge with peanut butter + apple', '4 tbsp + 1–2 tsp PB'),
          lunch: m('Tiny pasta with chicken + pumpkin', '4 tbsp'),
          dinner: m('Oat porridge with apple', '4 tbsp'),
        }},
        { date: '2026-06-20', meals: {
          breakfast: m('Oat porridge with peanut butter + peach', '4 tbsp + 1–2 tsp PB', 'Peach'),
          lunch: m('Chicken + parsnip mash', '4 tbsp'),
          dinner: m('Oat porridge with peach', '4 tbsp'),
        }},
        { date: '2026-06-21', meals: {
          breakfast: m('Oat porridge with peach', '4 tbsp'),
          lunch: m('Red lentil + parsnip mash', '4 tbsp'),
          dinner: m('Oat porridge with peach', '4 tbsp'),
        }},
      ],
    },
    {
      label: 'Week 6',
      stage: '3 meals + 1 snack · first fish (cod, salmon)',
      focus: 'Add a small afternoon fruit snack. Cod 3 days Mon–Wed, salmon 3 days Thu–Sat — no alternating. Sunday goes back to lentils.',
      daily: { meals: '3 meals + 1 snack', texture: 'Soft chunks · finger foods begin', portion: '~4–5 tbsp/meal · 2 tbsp snack', total: '~150–170 g/day', milk: '500–600 ml milk' },
      days: [
        { date: '2026-06-22', meals: {
          breakfast: m('Scrambled egg with peach', '1 small egg + 3 tbsp peach'),
          lunch: m('Cod + parsnip mash', '4 tbsp', 'Cod'),
          snack: m('Peach mash', '2 tbsp', 'Snack added'),
          dinner: m('Rice porridge with peach', '4 tbsp'),
        }},
        { date: '2026-06-23', meals: {
          breakfast: m('Scrambled egg with banana', '1 small egg + 3 tbsp banana'),
          lunch: m('Cod + zucchini mash', '4 tbsp'),
          snack: m('Banana mash', '2 tbsp'),
          dinner: m('Rice porridge with banana', '4 tbsp'),
        }},
        { date: '2026-06-24', meals: {
          breakfast: m('Scrambled egg with banana', '1 small egg + 3 tbsp banana'),
          lunch: m('Cod + zucchini mash', '4 tbsp'),
          snack: m('Banana mash', '2 tbsp'),
          dinner: m('Rice porridge with banana', '4 tbsp'),
        }},
        { date: '2026-06-25', meals: {
          breakfast: m('Oat porridge with peanut butter + banana', '4 tbsp + 2 tsp PB'),
          lunch: m('Salmon + zucchini mash', '4 tbsp', 'Salmon'),
          snack: m('Banana mash', '2 tbsp'),
          dinner: m('Oat porridge with banana', '4 tbsp'),
        }},
        { date: '2026-06-26', meals: {
          breakfast: m('Oat porridge with peanut butter + mango', '4 tbsp + 2 tsp PB'),
          lunch: m('Salmon + broccoli mash', '4 tbsp'),
          snack: m('Mango', '2 tbsp'),
          dinner: m('Oat porridge with mango', '4 tbsp'),
        }},
        { date: '2026-06-27', meals: {
          breakfast: m('Oat porridge with peanut butter + mango', '4 tbsp + 2 tsp PB'),
          lunch: m('Salmon + broccoli mash', '4 tbsp'),
          snack: m('Mango', '2 tbsp'),
          dinner: m('Oat porridge with mango', '4 tbsp'),
        }},
        { date: '2026-06-28', meals: {
          breakfast: m('Oat porridge with mango', '4 tbsp'),
          lunch: m('Red lentil + broccoli mash', '5 tbsp'),
          snack: m('Mango', '2 tbsp'),
          dinner: m('Oat porridge with mango', '4 tbsp'),
        }},
      ],
    },
    {
      label: 'Week 7',
      stage: '3 meals + snack · introduce beef',
      focus: 'Slow-cooked beef Mon–Wed (3 days, intro). Salmon returns Thu–Sat (3 days). Blueberry and pear cycle back.',
      daily: { meals: '3 meals + 1 snack', texture: 'Small soft pieces', portion: '~5 tbsp/meal · 3 tbsp snack', total: '~170–190 g/day', milk: '500–600 ml milk' },
      days: [
        { date: '2026-06-29', meals: {
          breakfast: m('Scrambled egg with blueberry', '1 small egg + 3 tbsp blueberry'),
          lunch: m('Beef + cauliflower mash', '5 tbsp', 'Beef'),
          snack: m('Blueberry mash', '3 tbsp'),
          dinner: m('Rice porridge with blueberry', '5 tbsp'),
        }},
        { date: '2026-06-30', meals: {
          breakfast: m('Scrambled egg with blueberry', '1 small egg + 3 tbsp blueberry'),
          lunch: m('Beef + cauliflower mash', '5 tbsp'),
          snack: m('Blueberry mash', '3 tbsp'),
          dinner: m('Rice porridge with blueberry', '5 tbsp'),
        }},
        { date: '2026-07-01', meals: {
          breakfast: m('Scrambled egg with blueberry', '1 small egg + 3 tbsp blueberry'),
          lunch: m('Beef + cauliflower mash', '5 tbsp'),
          snack: m('Blueberry mash', '3 tbsp'),
          dinner: m('Rice porridge with blueberry', '5 tbsp'),
        }},
        { date: '2026-07-02', meals: {
          breakfast: m('Oat porridge with peanut butter + pear', '4 tbsp + 2 tsp PB'),
          lunch: m('Salmon + pea mash', '5 tbsp'),
          snack: m('Pear', '3 tbsp'),
          dinner: m('Oat porridge with pear', '5 tbsp'),
        }},
        { date: '2026-07-03', meals: {
          breakfast: m('Oat porridge with peanut butter + pear', '4 tbsp + 2 tsp PB'),
          lunch: m('Salmon + pea mash', '5 tbsp'),
          snack: m('Pear', '3 tbsp'),
          dinner: m('Oat porridge with pear', '5 tbsp'),
        }},
        { date: '2026-07-04', meals: {
          breakfast: m('Oat porridge with peanut butter + pear', '4 tbsp + 2 tsp PB'),
          lunch: m('Salmon + pea mash', '5 tbsp'),
          snack: m('Pear', '3 tbsp'),
          dinner: m('Oat porridge with pear', '5 tbsp'),
        }},
        { date: '2026-07-05', meals: {
          breakfast: m('Oat porridge with apple', '4 tbsp'),
          lunch: m('Red lentil + sweet potato mash', '5 tbsp'),
          snack: m('Apple mash', '3 tbsp'),
          dinner: m('Oat porridge with apple', '5 tbsp'),
        }},
      ],
    },
    {
      label: 'Week 8',
      stage: '3 meals + snack · introduce lamb',
      focus: 'Slow-cooked lamb Mon–Wed (3 days, intro). Chicken returns Thu–Sat (3 days). Apple, peach and banana cycle back.',
      daily: { meals: '3 meals + 1 snack', texture: 'Small soft pieces · family-style', portion: '~5–6 tbsp/meal · 3 tbsp snack', total: '~190–210 g/day', milk: '500–600 ml milk' },
      days: [
        { date: '2026-07-06', meals: {
          breakfast: m('Scrambled egg with apple', '1 small egg + 3 tbsp apple'),
          lunch: m('Lamb + sweet potato mash', '6 tbsp', 'Lamb'),
          snack: m('Apple', '3 tbsp'),
          dinner: m('Rice porridge with apple', '5 tbsp'),
        }},
        { date: '2026-07-07', meals: {
          breakfast: m('Scrambled egg with apple', '1 small egg + 3 tbsp apple'),
          lunch: m('Lamb + sweet potato mash', '6 tbsp'),
          snack: m('Apple', '3 tbsp'),
          dinner: m('Rice porridge with apple', '5 tbsp'),
        }},
        { date: '2026-07-08', meals: {
          breakfast: m('Scrambled egg with peach', '1 small egg + 3 tbsp peach'),
          lunch: m('Lamb + butternut squash mash', '6 tbsp'),
          snack: m('Peach', '3 tbsp'),
          dinner: m('Rice porridge with peach', '5 tbsp'),
        }},
        { date: '2026-07-09', meals: {
          breakfast: m('Oat porridge with peanut butter + peach', '5 tbsp + 2 tsp PB'),
          lunch: m('Chicken + butternut squash mash', '6 tbsp'),
          snack: m('Peach', '3 tbsp'),
          dinner: m('Oat porridge with peach', '5 tbsp'),
        }},
        { date: '2026-07-10', meals: {
          breakfast: m('Oat porridge with peanut butter + peach', '5 tbsp + 2 tsp PB'),
          lunch: m('Chicken + butternut squash mash', '6 tbsp'),
          snack: m('Peach', '3 tbsp'),
          dinner: m('Oat porridge with peach', '5 tbsp'),
        }},
        { date: '2026-07-11', meals: {
          breakfast: m('Oat porridge with peanut butter + banana', '5 tbsp + 2 tsp PB'),
          lunch: m('Chicken + pumpkin mash', '6 tbsp'),
          snack: m('Banana', '3 tbsp'),
          dinner: m('Oat porridge with banana', '5 tbsp'),
        }},
        { date: '2026-07-12', meals: {
          breakfast: m('Oat porridge with banana', '5 tbsp'),
          lunch: m('Red lentil + pumpkin mash', '6 tbsp'),
          snack: m('Banana', '3 tbsp'),
          dinner: m('Oat porridge with banana', '5 tbsp'),
        }},
      ],
    },
    {
      label: 'Week 9',
      stage: '3 meals + snack · approaching 8 months',
      focus: 'Three balanced meals plus a snack. Beef returns for all 3 days — single protein, no alternation. Mango and broccoli for 2 of 3 days.',
      daily: { meals: '3 meals + 1 snack', texture: 'Soft chunks · family-style', portion: '~6 tbsp/meal · 3 tbsp snack', total: '~200–220 g/day', milk: '500–600 ml milk' },
      days: [
        { date: '2026-07-13', meals: {
          breakfast: m('Scrambled egg with banana', '1 small egg + 3 tbsp banana'),
          lunch: m('Beef + pumpkin mash', '6 tbsp'),
          snack: m('Banana', '3 tbsp'),
          dinner: m('Rice porridge with banana', '6 tbsp'),
        }},
        { date: '2026-07-14', meals: {
          breakfast: m('Scrambled egg with mango', '1 small egg + 3 tbsp mango'),
          lunch: m('Beef + broccoli mash', '6 tbsp'),
          snack: m('Mango', '3 tbsp'),
          dinner: m('Rice porridge with mango', '6 tbsp'),
        }},
        { date: '2026-07-15', meals: {
          breakfast: m('Scrambled egg with mango', '1 small egg + 3 tbsp mango'),
          lunch: m('Beef + broccoli mash', '6 tbsp'),
          snack: m('Mango', '3 tbsp'),
          dinner: m('Rice porridge with mango', '6 tbsp'),
        }},
      ],
    },
  ];

  const STORAGE_KEY = 'gooseFoodTracker.v1';

  const parseDate = (iso) => {
    const [y, mo, d] = iso.split('-').map(Number);
    return new Date(y, mo - 1, d);
  };

  const fmtDate = (iso) => parseDate(iso).toLocaleDateString(undefined, { day: '2-digit', month: 'short' });

  const todayISO = () => {
    const d = new Date();
    const y = d.getFullYear();
    const mo = String(d.getMonth() + 1).padStart(2, '0');
    const dd = String(d.getDate()).padStart(2, '0');
    return `${y}-${mo}-${dd}`;
  };

  const dow = (iso) => parseDate(iso).toLocaleDateString(undefined, { weekday: 'short' });

  const loadState = () => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      return raw ? JSON.parse(raw) : { meals: {} };
    } catch { return { meals: {} }; }
  };

  const saveState = (s) => {
    try { localStorage.setItem(STORAGE_KEY, JSON.stringify(s)); } catch { /* ignore */ }
  };

  const state = loadState();
  if (!state.meals) state.meals = {};

  const renderProfile = () => {
    document.getElementById('planWindow').textContent =
      `${fmtDate(PROFILE.startDate)} → ${fmtDate(PROFILE.endDate)} 2026`;
  };

  const renderWeekNav = (activeIdx) => {
    const nav = document.getElementById('weekNav');
    nav.innerHTML = '';
    PLAN.forEach((week, idx) => {
      const btn = document.createElement('button');
      btn.textContent = week.label;
      btn.type = 'button';
      if (idx === activeIdx) btn.classList.add('active');
      btn.addEventListener('click', () => render(idx));
      nav.appendChild(btn);
    });
  };

  const MEAL_SLOTS = [
    { key: 'breakfast', label: 'Breakfast', code: 'b' },
    { key: 'lunch', label: 'Lunch', code: 'l' },
    { key: 'snack', label: 'Snack', code: 's' },
    { key: 'dinner', label: 'Dinner', code: 'd' },
  ];

  const mealRow = (slot, meal, date) => {
    if (!meal) return '';
    const id = `${date}__${slot.code}`;
    const checked = state.meals[id] ? 'checked' : '';
    const doneClass = state.meals[id] ? 'done' : '';
    const tag = meal.isNew ? `<span class="new-tag" title="${meal.isNew}">NEW · ${meal.isNew}</span>` : '';
    return `
      <label class="meal ${doneClass}">
        <input type="checkbox" data-meal-id="${id}" ${checked} />
        <span>
          <span class="meal-label">${slot.label}</span>
          <span class="meal-text">${meal.text}${tag}</span>
          <span class="meal-amount">${meal.amount}</span>
        </span>
      </label>
    `;
  };

  const renderWeek = (weekIdx) => {
    const week = PLAN[weekIdx];
    const root = document.getElementById('planRoot');
    const today = todayISO();
    const start = week.days[0].date;
    const end = week.days[week.days.length - 1].date;

    const targets = `
      <div class="week-targets">
        <div class="target-cell"><span class="target-label">Meals</span><span class="target-value">${week.daily.meals}</span></div>
        <div class="target-cell"><span class="target-label">Texture</span><span class="target-value">${week.daily.texture}</span></div>
        <div class="target-cell"><span class="target-label">Portion</span><span class="target-value">${week.daily.portion}</span></div>
        <div class="target-cell"><span class="target-label">Daily total</span><span class="target-value">${week.daily.total}</span></div>
        <div class="target-cell"><span class="target-label">Milk</span><span class="target-value">${week.daily.milk}</span></div>
      </div>
    `;

    const daysHtml = week.days.map((day) => {
      const isToday = day.date === today;
      const rows = MEAL_SLOTS.map((slot) => mealRow(slot, day.meals[slot.key], day.date)).join('');
      return `
        <div class="day-card ${isToday ? 'today' : ''}">
          <div class="day-head">
            <span class="dow">${dow(day.date)}</span>
            <span class="date">${fmtDate(day.date)}</span>
          </div>
          ${rows}
        </div>
      `;
    }).join('');

    root.innerHTML = `
      <article class="week-card">
        <header class="week-head">
          <h2>${week.label}</h2>
          <span class="week-dates">${fmtDate(start)} – ${fmtDate(end)}</span>
        </header>
        <p class="week-stage">${week.stage}</p>
        ${targets}
        <div class="week-focus"><strong>This week:</strong> ${week.focus} <em>(${ROTATION})</em></div>
        <div class="day-grid">${daysHtml}</div>
      </article>
    `;

    root.querySelectorAll('input[data-meal-id]').forEach((input) => {
      input.addEventListener('change', (e) => {
        const id = e.target.getAttribute('data-meal-id');
        state.meals[id] = e.target.checked;
        saveState(state);
        e.target.closest('.meal').classList.toggle('done', e.target.checked);
      });
    });
  };

  const KNOWN_FOODS = [
    'oats', 'rice', 'pasta',
    'apple', 'pear', 'banana', 'mango', 'peach', 'blueberry', 'avocado',
    'sweet potato', 'butternut squash', 'pumpkin', 'parsnip', 'zucchini',
    'broccoli', 'cauliflower', 'peas',
    'red lentils', 'eggs', 'smooth peanut butter',
    'chicken', 'cod', 'salmon', 'beef', 'lamb',
  ];

  const ingredientsForWeek = (week) => {
    const present = new Set();
    week.days.forEach((day) => {
      MEAL_SLOTS.forEach((slot) => {
        const meal = day.meals[slot.key];
        if (!meal) return;
        const t = meal.text.toLowerCase();
        KNOWN_FOODS.forEach((k) => {
          const needle = {
            'red lentils': 'red lentil',
            'eggs': 'egg',
            'smooth peanut butter': 'peanut butter',
            'peas': 'pea',
            'oats': 'oat',
          }[k] || k;
          if (t.includes(needle)) present.add(k);
        });
      });
    });
    return Array.from(present).sort();
  };

  const titleCase = (s) => s.replace(/\b\w/g, (c) => c.toUpperCase());

  const renderShoppingList = (weekIdx) => {
    const ul = document.getElementById('shoppingList');
    const items = ingredientsForWeek(PLAN[weekIdx]);
    ul.innerHTML = items.map((i) => `<li>${titleCase(i)}</li>`).join('');
  };

  const findCurrentWeekIdx = () => {
    const today = todayISO();
    for (let i = 0; i < PLAN.length; i++) {
      const end = PLAN[i].days[PLAN[i].days.length - 1].date;
      if (today <= end) return i;
    }
    return 0;
  };

  const render = (weekIdx) => {
    renderWeekNav(weekIdx);
    renderWeek(weekIdx);
    renderShoppingList(weekIdx);
  };

  document.getElementById('resetBtn').addEventListener('click', () => {
    if (!confirm('Clear all meal ticks? This cannot be undone.')) return;
    state.meals = {};
    saveState(state);
    render(findCurrentWeekIdx());
  });

  renderProfile();
  render(findCurrentWeekIdx());
})();
