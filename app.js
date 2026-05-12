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
      stage: '2 meals · 1 fruit + 1 veggie',
      focus: 'Ease in. One smooth fruit purée in the morning, one smooth veggie purée at midday. No new proteins this week — just settle the rhythm.',
      daily: { meals: '2 meals', portion: '~2–3 tbsp per meal', total: '~40–60 g solids/day', milk: '600–800 ml milk' },
      days: [
        { date: '2026-05-18', meals: {
          breakfast: m('Pear purée (cooked, smooth)', '2–3 tbsp'),
          lunch: m('Sweet potato purée', '2–3 tbsp'),
        }},
        { date: '2026-05-19', meals: {
          breakfast: m('Apple purée (cooked, smooth)', '2–3 tbsp'),
          lunch: m('Butternut squash purée', '2–3 tbsp'),
        }},
        { date: '2026-05-20', meals: {
          breakfast: m('Banana mash', '2–3 tbsp'),
          lunch: m('Pumpkin purée', '2–3 tbsp'),
        }},
        { date: '2026-05-21', meals: {
          breakfast: m('Pear purée', '2–3 tbsp'),
          lunch: m('Parsnip purée', '2–3 tbsp'),
        }},
        { date: '2026-05-22', meals: {
          breakfast: m('Mango purée (very ripe, smooth)', '2–3 tbsp'),
          lunch: m('Zucchini purée', '2–3 tbsp'),
        }},
        { date: '2026-05-23', meals: {
          breakfast: m('Apple purée', '2–3 tbsp'),
          lunch: m('Broccoli purée (soft-steamed)', '2–3 tbsp'),
        }},
        { date: '2026-05-24', meals: {
          breakfast: m('Banana mash', '2–3 tbsp'),
          lunch: m('Cauliflower purée (soft-steamed)', '2–3 tbsp'),
        }},
      ],
    },
    {
      label: 'Week 2',
      stage: '3 meals · more variety, still plant-based',
      focus: 'Rotate vegetables and grains. Keep portions gentle; watch nappies after new combos.',
      daily: { meals: '3 meals', portion: '~2–3 tbsp per meal', total: '~90–110 g solids/day', milk: '500–700 ml milk' },
      days: [
        { date: '2026-05-25', meals: {
          breakfast: m('Scrambled egg with mango', '1 small egg + 2 tbsp mango'),
          lunch: m('Red lentil + sweet potato + pea purée', '3 tbsp'),
          dinner: m('Rice porridge with banana', '3 tbsp'),
        }},
        { date: '2026-05-26', meals: {
          breakfast: m('Scrambled egg with soft pear', '1 small egg + 2 tbsp pear'),
          lunch: m('Red lentil + zucchini + parsnip purée', '3 tbsp'),
          dinner: m('Oat porridge with apple', '3 tbsp'),
        }},
        { date: '2026-05-27', meals: {
          breakfast: m('Egg + avocado on soft toast', '1 small egg + 1 tbsp avocado + 1 toast finger'),
          lunch: m('Red lentil + butternut + broccoli purée', '3 tbsp'),
          dinner: m('Rice porridge with pear', '3 tbsp'),
        }},
        { date: '2026-05-28', meals: {
          breakfast: m('Oat porridge with peanut butter + banana', '3 tbsp + 1 tsp PB'),
          lunch: m('Red lentil + pumpkin + cauliflower purée', '3 tbsp'),
          dinner: m('Rice porridge with mango', '3 tbsp'),
        }},
        { date: '2026-05-29', meals: {
          breakfast: m('Toast finger + peanut butter + sliced banana', '1 finger + 1 tsp PB + ¼ banana'),
          lunch: m('Red lentil + sweet potato + zucchini purée', '3 tbsp'),
          dinner: m('Oat porridge with apple', '3 tbsp'),
        }},
        { date: '2026-05-30', meals: {
          breakfast: m('Rice porridge with peanut butter + apple', '3 tbsp + 1 tsp PB'),
          lunch: m('Red lentil + parsnip + pea purée', '3 tbsp'),
          dinner: m('Oat porridge with banana', '3 tbsp'),
        }},
        { date: '2026-05-31', meals: {
          breakfast: m('Oat porridge with mango + banana', '4 tbsp'),
          lunch: m('Red lentil + cauliflower + sweet potato purée', '3 tbsp'),
          dinner: m('Rice porridge with pear', '3 tbsp'),
        }},
      ],
    },
    {
      label: 'Week 3',
      stage: '3 meals · add berries and stone fruit',
      focus: 'Introduce blueberry and peach. Begin offering small soft finger pieces alongside spoon feeds.',
      daily: { meals: '3 meals', portion: '~3 tbsp per meal', total: '~110–130 g solids/day', milk: '500–700 ml milk' },
      days: [
        { date: '2026-06-01', meals: {
          breakfast: m('Scrambled egg with blueberry mash', '1 small egg + 2 tbsp blueberry', 'Blueberry'),
          lunch: m('Red lentil + butternut + pea purée', '3–4 tbsp'),
          dinner: m('Rice porridge with peach', '3 tbsp', 'Peach'),
        }},
        { date: '2026-06-02', meals: {
          breakfast: m('Scrambled egg with avocado', '1 small egg + 2 tbsp avocado'),
          lunch: m('Red lentil + sweet potato + broccoli purée', '3–4 tbsp'),
          dinner: m('Oat porridge with blueberry', '3 tbsp'),
        }},
        { date: '2026-06-03', meals: {
          breakfast: m('Egg + soft toast + pear', '1 small egg + 1 finger + 2 tbsp pear'),
          lunch: m('Red lentil + parsnip + zucchini purée', '3–4 tbsp'),
          dinner: m('Rice porridge with banana', '3 tbsp'),
        }},
        { date: '2026-06-04', meals: {
          breakfast: m('Oat porridge with peanut butter + peach', '3 tbsp + 1 tsp PB + 1 tbsp peach'),
          lunch: m('Red lentil + cauliflower + pumpkin purée', '3–4 tbsp'),
          dinner: m('Rice porridge with apple', '3 tbsp'),
        }},
        { date: '2026-06-05', meals: {
          breakfast: m('Toast finger + peanut butter + banana', '1 finger + 1 tsp PB + ¼ banana'),
          lunch: m('Red lentil + butternut + pea purée', '3–4 tbsp'),
          dinner: m('Oat porridge with peach', '3 tbsp'),
        }},
        { date: '2026-06-06', meals: {
          breakfast: m('Rice porridge with peanut butter + apple', '3 tbsp + 1 tsp PB'),
          lunch: m('Red lentil + sweet potato + zucchini purée', '3–4 tbsp'),
          dinner: m('Oat porridge with blueberry', '3 tbsp'),
        }},
        { date: '2026-06-07', meals: {
          breakfast: m('Banana oat pancake (oat flour + mashed banana, water-cooked)', '1 small pancake'),
          lunch: m('Red lentil + parsnip + cauliflower purée', '3–4 tbsp'),
          dinner: m('Rice porridge with mango', '3 tbsp'),
        }},
      ],
    },
    {
      label: 'Week 4',
      stage: '3 meals · introduce pasta',
      focus: 'Tiny pasta shapes (stelline, orzo) cooked very soft. Still no meat — protein from lentils, egg, PB.',
      daily: { meals: '3 meals', portion: '~3–4 tbsp per meal', total: '~120–140 g solids/day', milk: '500–700 ml milk' },
      days: [
        { date: '2026-06-08', meals: {
          breakfast: m('Scrambled egg with mango', '1 small egg + 3 tbsp mango'),
          lunch: m('Tiny pasta with red lentil + butternut sauce', '4 tbsp', 'Pasta'),
          dinner: m('Rice porridge with peach', '3 tbsp'),
        }},
        { date: '2026-06-09', meals: {
          breakfast: m('Egg + avocado on soft toast', '1 small egg + 1 finger + 1 tbsp avocado'),
          lunch: m('Tiny pasta with red lentil + pea sauce', '4 tbsp'),
          dinner: m('Oat porridge with blueberry', '3 tbsp'),
        }},
        { date: '2026-06-10', meals: {
          breakfast: m('Scrambled egg with soft pear', '1 small egg + 3 tbsp pear'),
          lunch: m('Red lentil + sweet potato + zucchini purée', '4 tbsp'),
          dinner: m('Rice porridge with apple', '3 tbsp'),
        }},
        { date: '2026-06-11', meals: {
          breakfast: m('Oat porridge with peanut butter + peach', '3–4 tbsp + 1–2 tsp PB'),
          lunch: m('Tiny pasta with red lentil + broccoli sauce', '4 tbsp'),
          dinner: m('Oat porridge with banana', '3 tbsp'),
        }},
        { date: '2026-06-12', meals: {
          breakfast: m('Toast finger + peanut butter + banana', '1 finger + 1–2 tsp PB'),
          lunch: m('Red lentil + cauliflower + pumpkin purée', '4 tbsp'),
          dinner: m('Rice porridge with mango', '3 tbsp'),
        }},
        { date: '2026-06-13', meals: {
          breakfast: m('Oat porridge with peanut butter + apple', '3–4 tbsp + 1–2 tsp PB'),
          lunch: m('Tiny pasta + red lentil + butternut + pea', '4 tbsp'),
          dinner: m('Rice porridge with peach', '3 tbsp'),
        }},
        { date: '2026-06-14', meals: {
          breakfast: m('Oat porridge with blueberry + banana', '4 tbsp'),
          lunch: m('Red lentil + sweet potato + pea + parsnip purée', '4 tbsp'),
          dinner: m('Rice porridge with pear', '3 tbsp'),
        }},
      ],
    },
    {
      label: 'Week 5',
      stage: '3 meals · first meat — chicken',
      focus: 'Introduce finely shredded or pureed chicken at lunch. Keep it well-cooked and very soft.',
      daily: { meals: '3 meals', portion: '~4 tbsp per meal', total: '~140–160 g solids/day', milk: '500–700 ml milk' },
      days: [
        { date: '2026-06-15', meals: {
          breakfast: m('Scrambled egg with banana', '1 small egg + 3 tbsp banana'),
          lunch: m('Chicken + sweet potato mash', '4 tbsp', 'Chicken'),
          dinner: m('Rice porridge with peach', '4 tbsp'),
        }},
        { date: '2026-06-16', meals: {
          breakfast: m('Egg + avocado on soft toast', '1 small egg + 1 finger + 1 tbsp avocado'),
          lunch: m('Chicken + butternut + pea mash', '4 tbsp'),
          dinner: m('Oat porridge with blueberry', '4 tbsp'),
        }},
        { date: '2026-06-17', meals: {
          breakfast: m('Scrambled egg with mango', '1 small egg + 3 tbsp mango'),
          lunch: m('Tiny pasta with chicken + zucchini sauce', '4 tbsp'),
          dinner: m('Rice porridge with pear', '4 tbsp'),
        }},
        { date: '2026-06-18', meals: {
          breakfast: m('Oat porridge with peanut butter + peach', '4 tbsp + 1–2 tsp PB'),
          lunch: m('Chicken + parsnip + broccoli mash', '4 tbsp'),
          dinner: m('Rice porridge with apple', '4 tbsp'),
        }},
        { date: '2026-06-19', meals: {
          breakfast: m('Toast finger + peanut butter + banana', '1 finger + 1–2 tsp PB'),
          lunch: m('Chicken + pumpkin + cauliflower mash', '4 tbsp'),
          dinner: m('Oat porridge with blueberry', '4 tbsp'),
        }},
        { date: '2026-06-20', meals: {
          breakfast: m('Oat porridge with peanut butter + apple', '4 tbsp + 1–2 tsp PB'),
          lunch: m('Tiny pasta with chicken + butternut sauce', '4 tbsp'),
          dinner: m('Rice porridge with mango', '4 tbsp'),
        }},
        { date: '2026-06-21', meals: {
          breakfast: m('Banana oat pancake', '1 small pancake'),
          lunch: m('Red lentil + sweet potato + pea + parsnip mash', '4 tbsp'),
          dinner: m('Oat porridge with peach', '4 tbsp'),
        }},
      ],
    },
    {
      label: 'Week 6',
      stage: '3 meals + 1 snack · first fish',
      focus: 'Add a small afternoon snack between lunch and dinner. Introduce cod, then salmon. Watch for any tummy reaction.',
      daily: { meals: '3 meals + 1 snack', portion: '~4–5 tbsp per meal · 2 tbsp snack', total: '~150–170 g solids/day', milk: '500–600 ml milk' },
      days: [
        { date: '2026-06-22', meals: {
          breakfast: m('Scrambled egg with mango', '1 small egg + 3 tbsp mango'),
          lunch: m('Chicken + sweet potato + broccoli mash', '5 tbsp'),
          snack: m('Pear mash', '2 tbsp', 'Snack added'),
          dinner: m('Rice porridge with banana', '4 tbsp'),
        }},
        { date: '2026-06-23', meals: {
          breakfast: m('Egg + avocado on soft toast', '1 small egg + 1 finger + 1 tbsp avocado'),
          lunch: m('Cod + butternut + pea mash', '4 tbsp', 'Cod'),
          snack: m('Blueberry mash', '2 tbsp'),
          dinner: m('Oat porridge with apple', '4 tbsp'),
        }},
        { date: '2026-06-24', meals: {
          breakfast: m('Scrambled egg with soft pear', '1 small egg + 3 tbsp pear'),
          lunch: m('Tiny pasta with chicken + zucchini sauce', '5 tbsp'),
          snack: m('Banana mash', '2 tbsp'),
          dinner: m('Rice porridge with peach', '4 tbsp'),
        }},
        { date: '2026-06-25', meals: {
          breakfast: m('Oat porridge with peanut butter + blueberry', '4 tbsp + 2 tsp PB'),
          lunch: m('Salmon + sweet potato + pea mash', '4 tbsp', 'Salmon'),
          snack: m('Mango', '2 tbsp'),
          dinner: m('Rice porridge with apple', '4 tbsp'),
        }},
        { date: '2026-06-26', meals: {
          breakfast: m('Toast finger + peanut butter + banana', '1 finger + 2 tsp PB'),
          lunch: m('Chicken + pumpkin + cauliflower mash', '5 tbsp'),
          snack: m('Pear', '2 tbsp'),
          dinner: m('Oat porridge with peach', '4 tbsp'),
        }},
        { date: '2026-06-27', meals: {
          breakfast: m('Oat porridge with peanut butter + peach', '4 tbsp + 2 tsp PB'),
          lunch: m('Cod + parsnip + broccoli mash', '4 tbsp'),
          snack: m('Apple', '2 tbsp'),
          dinner: m('Rice porridge with banana', '4 tbsp'),
        }},
        { date: '2026-06-28', meals: {
          breakfast: m('Oat porridge with mango + banana', '5 tbsp'),
          lunch: m('Red lentil + sweet potato + pea + cauliflower mash', '5 tbsp'),
          snack: m('Blueberry', '2 tbsp'),
          dinner: m('Rice porridge with apple', '4 tbsp'),
        }},
      ],
    },
    {
      label: 'Week 7',
      stage: '3 meals + snack · introduce beef',
      focus: 'Beef purée or very finely shredded. Iron rocket fuel. Keep cuts lean and slow-cooked tender.',
      daily: { meals: '3 meals + 1 snack', portion: '~5 tbsp per meal · 3 tbsp snack', total: '~170–190 g solids/day', milk: '500–600 ml milk' },
      days: [
        { date: '2026-06-29', meals: {
          breakfast: m('Scrambled egg with banana', '1 small egg + 3 tbsp banana'),
          lunch: m('Beef + sweet potato + broccoli mash', '5 tbsp', 'Beef'),
          snack: m('Peach', '3 tbsp'),
          dinner: m('Rice porridge with apple', '5 tbsp'),
        }},
        { date: '2026-06-30', meals: {
          breakfast: m('Egg omelet + avocado + soft toast', '1 small egg + 1 finger + 1 tbsp avocado'),
          lunch: m('Tiny pasta with chicken + butternut + pea sauce', '5 tbsp'),
          snack: m('Blueberry', '3 tbsp'),
          dinner: m('Oat porridge with banana', '5 tbsp'),
        }},
        { date: '2026-07-01', meals: {
          breakfast: m('Scrambled egg with mango', '1 small egg + 3 tbsp mango'),
          lunch: m('Salmon + sweet potato + cauliflower mash', '5 tbsp'),
          snack: m('Pear', '3 tbsp'),
          dinner: m('Rice porridge with peach', '5 tbsp'),
        }},
        { date: '2026-07-02', meals: {
          breakfast: m('Oat porridge with peanut butter + blueberry', '4 tbsp + 2 tsp PB'),
          lunch: m('Beef + parsnip + pumpkin mash', '5 tbsp'),
          snack: m('Banana', '3 tbsp'),
          dinner: m('Rice porridge with mango', '5 tbsp'),
        }},
        { date: '2026-07-03', meals: {
          breakfast: m('Toast finger + peanut butter + apple', '1 finger + 2 tsp PB + 1 tbsp apple'),
          lunch: m('Cod + sweet potato + zucchini mash', '5 tbsp'),
          snack: m('Pear', '3 tbsp'),
          dinner: m('Oat porridge with blueberry', '5 tbsp'),
        }},
        { date: '2026-07-04', meals: {
          breakfast: m('Oat porridge with peanut butter + peach', '4 tbsp + 2 tsp PB'),
          lunch: m('Tiny pasta with chicken + butternut + broccoli', '5 tbsp'),
          snack: m('Apple', '3 tbsp'),
          dinner: m('Rice porridge with peach', '5 tbsp'),
        }},
        { date: '2026-07-05', meals: {
          breakfast: m('Oat porridge with apple + blueberry', '5 tbsp'),
          lunch: m('Red lentil + sweet potato + pea + cauliflower mash', '5 tbsp'),
          snack: m('Mango', '3 tbsp'),
          dinner: m('Rice porridge with banana', '5 tbsp'),
        }},
      ],
    },
    {
      label: 'Week 8',
      stage: '3 meals + snack · introduce lamb',
      focus: 'Slow-cooked lamb, finely shredded. Combine 3–4 ingredients per lunch for variety and density.',
      daily: { meals: '3 meals + 1 snack', portion: '~5–6 tbsp per meal · 3 tbsp snack', total: '~190–210 g solids/day', milk: '500–600 ml milk' },
      days: [
        { date: '2026-07-06', meals: {
          breakfast: m('Scrambled egg with mango', '1 small egg + 3 tbsp mango'),
          lunch: m('Lamb + sweet potato + broccoli mash', '6 tbsp', 'Lamb'),
          snack: m('Peach', '3 tbsp'),
          dinner: m('Rice porridge with apple', '5 tbsp'),
        }},
        { date: '2026-07-07', meals: {
          breakfast: m('Egg + avocado on soft toast', '1 small egg + 1 finger + 1 tbsp avocado'),
          lunch: m('Tiny pasta with chicken + butternut + pea', '6 tbsp'),
          snack: m('Blueberry', '3 tbsp'),
          dinner: m('Oat porridge with banana', '5 tbsp'),
        }},
        { date: '2026-07-08', meals: {
          breakfast: m('Scrambled egg with soft pear', '1 small egg + 3 tbsp pear'),
          lunch: m('Salmon + parsnip + cauliflower mash', '6 tbsp'),
          snack: m('Mango', '3 tbsp'),
          dinner: m('Rice porridge with peach', '5 tbsp'),
        }},
        { date: '2026-07-09', meals: {
          breakfast: m('Oat porridge with peanut butter + blueberry', '5 tbsp + 2 tsp PB'),
          lunch: m('Lamb + pumpkin + zucchini mash', '6 tbsp'),
          snack: m('Pear', '3 tbsp'),
          dinner: m('Rice porridge with apple', '5 tbsp'),
        }},
        { date: '2026-07-10', meals: {
          breakfast: m('Toast finger + peanut butter + banana', '1 finger + 2 tsp PB'),
          lunch: m('Beef + sweet potato + pea + cauliflower mash', '6 tbsp'),
          snack: m('Mango', '3 tbsp'),
          dinner: m('Oat porridge with blueberry', '5 tbsp'),
        }},
        { date: '2026-07-11', meals: {
          breakfast: m('Banana oat pancake with peanut butter', '1 small pancake + 1 tsp PB'),
          lunch: m('Tiny pasta with chicken + butternut + broccoli', '6 tbsp'),
          snack: m('Apple', '3 tbsp'),
          dinner: m('Rice porridge with peach', '5 tbsp'),
        }},
        { date: '2026-07-12', meals: {
          breakfast: m('Oat porridge with apple + banana + blueberry', '5 tbsp'),
          lunch: m('Cod + sweet potato + pea + cauliflower mash', '6 tbsp'),
          snack: m('Pear', '3 tbsp'),
          dinner: m('Rice porridge with mango', '5 tbsp'),
        }},
      ],
    },
    {
      label: 'Week 9',
      stage: '3 meals + snack · approaching 8 months',
      focus: 'Three balanced meals plus a snack, with iron-rich protein + carb + soft veg/fruit.',
      daily: { meals: '3 meals + 1 snack', portion: '~6 tbsp per meal · 3 tbsp snack', total: '~200–220 g solids/day', milk: '500–600 ml milk' },
      days: [
        { date: '2026-07-13', meals: {
          breakfast: m('Egg omelet + toast soldiers + avocado', '1 small egg + 1 finger + 1 tbsp avocado'),
          lunch: m('Lamb + sweet potato + broccoli + pasta', '6 tbsp'),
          snack: m('Blueberry + banana mash', '3 tbsp'),
          dinner: m('Rice porridge with peach', '6 tbsp'),
        }},
        { date: '2026-07-14', meals: {
          breakfast: m('Scrambled egg with mango', '1 small egg + 4 tbsp mango'),
          lunch: m('Beef + parsnip + cauliflower + pea mash', '6 tbsp'),
          snack: m('Pear', '3 tbsp'),
          dinner: m('Oat porridge with apple + blueberry', '6 tbsp'),
        }},
        { date: '2026-07-15', meals: {
          breakfast: m('Egg + soft toast + pear', '1 small egg + 1 finger + 3 tbsp pear'),
          lunch: m('Salmon + butternut + broccoli + pasta', '6 tbsp'),
          snack: m('Apple', '3 tbsp'),
          dinner: m('Rice porridge with mango + banana', '6 tbsp'),
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
    'oats', 'rice', 'pasta', 'dairy-free bread (for toast)',
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
            'dairy-free bread (for toast)': 'toast',
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
