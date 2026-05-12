(() => {
  'use strict';

  const PROFILE = {
    birthDate: '2025-11-15',
    startDate: '2026-05-18',
    endDate: '2026-07-15',
  };

  const PLAN = [
    {
      label: 'Week 1',
      stage: 'First tastes — single-ingredient purées, 1 meal/day',
      focus: 'Tiny amounts (1–2 tsp). Watch nappies and skin for 3 days after each new food. Keep purées very smooth.',
      days: [
        { date: '2026-05-18', meals: { breakfast: null, lunch: { text: 'Pear purée', isNew: 'Pear' }, dinner: null } },
        { date: '2026-05-19', meals: { breakfast: null, lunch: { text: 'Pear purée' }, dinner: null } },
        { date: '2026-05-20', meals: { breakfast: null, lunch: { text: 'Pear purée' }, dinner: null } },
        { date: '2026-05-21', meals: { breakfast: null, lunch: { text: 'Sweet potato purée', isNew: 'Sweet potato' }, dinner: null } },
        { date: '2026-05-22', meals: { breakfast: null, lunch: { text: 'Sweet potato purée' }, dinner: null } },
        { date: '2026-05-23', meals: { breakfast: null, lunch: { text: 'Sweet potato purée' }, dinner: null } },
        { date: '2026-05-24', meals: { breakfast: null, lunch: { text: 'Apple purée (cooked)', isNew: 'Apple' }, dinner: null } },
      ],
    },
    {
      label: 'Week 2',
      stage: 'Building variety — still single-ingredient, smooth',
      focus: 'One new food every 3 days. Cook fruit until soft to be gentle on the tummy.',
      days: [
        { date: '2026-05-25', meals: { breakfast: null, lunch: { text: 'Apple purée (cooked)' }, dinner: null } },
        { date: '2026-05-26', meals: { breakfast: null, lunch: { text: 'Apple purée (cooked)' }, dinner: null } },
        { date: '2026-05-27', meals: { breakfast: null, lunch: { text: 'Banana mash', isNew: 'Banana' }, dinner: null } },
        { date: '2026-05-28', meals: { breakfast: null, lunch: { text: 'Banana mash' }, dinner: null } },
        { date: '2026-05-29', meals: { breakfast: null, lunch: { text: 'Banana mash' }, dinner: null } },
        { date: '2026-05-30', meals: { breakfast: null, lunch: { text: 'Butternut squash purée', isNew: 'Butternut squash' }, dinner: null } },
        { date: '2026-05-31', meals: { breakfast: null, lunch: { text: 'Butternut squash purée' }, dinner: null } },
      ],
    },
    {
      label: 'Week 3',
      stage: 'Adding a 2nd meal — breakfast joins lunch',
      focus: 'Oat porridge cooked with water (no cow’s milk). Start simple two-food combos.',
      days: [
        { date: '2026-06-01', meals: { breakfast: { text: 'Oat porridge (water)', isNew: 'Oats' }, lunch: { text: 'Butternut squash' }, dinner: null } },
        { date: '2026-06-02', meals: { breakfast: { text: 'Oat porridge (water)' }, lunch: { text: 'Apple + pear purée' }, dinner: null } },
        { date: '2026-06-03', meals: { breakfast: { text: 'Oat porridge (water)' }, lunch: { text: 'Avocado mash', isNew: 'Avocado' }, dinner: null } },
        { date: '2026-06-04', meals: { breakfast: { text: 'Oat porridge with banana' }, lunch: { text: 'Avocado mash' }, dinner: null } },
        { date: '2026-06-05', meals: { breakfast: { text: 'Oat porridge with pear' }, lunch: { text: 'Avocado mash' }, dinner: null } },
        { date: '2026-06-06', meals: { breakfast: { text: 'Oat porridge (water)' }, lunch: { text: 'Parsnip purée', isNew: 'Parsnip' }, dinner: null } },
        { date: '2026-06-07', meals: { breakfast: { text: 'Oat porridge with apple' }, lunch: { text: 'Parsnip purée' }, dinner: null } },
      ],
    },
    {
      label: 'Week 4',
      stage: 'First proteins — iron focus',
      focus: 'Iron is critical from 6 months. Start with finely pureed chicken and red lentils.',
      days: [
        { date: '2026-06-08', meals: { breakfast: { text: 'Oat porridge (water)' }, lunch: { text: 'Pureed chicken + sweet potato', isNew: 'Chicken' }, dinner: null } },
        { date: '2026-06-09', meals: { breakfast: { text: 'Oat porridge with pear' }, lunch: { text: 'Chicken + sweet potato purée' }, dinner: null } },
        { date: '2026-06-10', meals: { breakfast: { text: 'Oat porridge (water)' }, lunch: { text: 'Chicken + butternut squash' }, dinner: null } },
        { date: '2026-06-11', meals: { breakfast: { text: 'Oat porridge with banana' }, lunch: { text: 'Red lentil + pumpkin purée', isNew: 'Red lentils' } , dinner: null } },
        { date: '2026-06-12', meals: { breakfast: { text: 'Oat porridge (water)' }, lunch: { text: 'Red lentil + pumpkin purée', isNew: 'Pumpkin' }, dinner: null } },
        { date: '2026-06-13', meals: { breakfast: { text: 'Oat porridge with apple' }, lunch: { text: 'Red lentil + butternut squash' }, dinner: null } },
        { date: '2026-06-14', meals: { breakfast: { text: 'Oat porridge (water)' }, lunch: { text: 'Chicken + parsnip purée' }, dinner: null } },
      ],
    },
    {
      label: 'Week 5',
      stage: 'Greens & first allergens',
      focus: 'Introduce peanut (smooth, thinned) and white fish. Small amounts at home, on a weekday morning.',
      days: [
        { date: '2026-06-15', meals: { breakfast: { text: 'Oat porridge (water)' }, lunch: { text: 'Pea purée + chicken', isNew: 'Peas' }, dinner: null } },
        { date: '2026-06-16', meals: { breakfast: { text: 'Oat porridge with mango', isNew: 'Mango' }, lunch: { text: 'Pea + chicken purée' }, dinner: null } },
        { date: '2026-06-17', meals: { breakfast: { text: 'Oat porridge with mango' }, lunch: { text: 'Zucchini + sweet potato purée', isNew: 'Zucchini' }, dinner: null } },
        { date: '2026-06-18', meals: { breakfast: { text: 'Oat porridge + thinned smooth peanut butter (~1 tsp)', isNew: 'Peanut' }, lunch: { text: 'Zucchini + chicken' }, dinner: null } },
        { date: '2026-06-19', meals: { breakfast: { text: 'Oat porridge + thinned peanut butter' }, lunch: { text: 'Red lentil + zucchini purée' }, dinner: null } },
        { date: '2026-06-20', meals: { breakfast: { text: 'Oat porridge with mango' }, lunch: { text: 'Cod purée + sweet potato', isNew: 'Cod (white fish)' }, dinner: null } },
        { date: '2026-06-21', meals: { breakfast: { text: 'Oat porridge (water)' }, lunch: { text: 'Cod + butternut squash purée' }, dinner: null } },
      ],
    },
    {
      label: 'Week 6',
      stage: 'Lumpier textures — dinner joins the day',
      focus: 'Move from purées to mashes. Add a small dinner. Introduce egg yolk first.',
      days: [
        { date: '2026-06-22', meals: { breakfast: { text: 'Oat porridge with banana' }, lunch: { text: 'Hard-boiled egg yolk mashed with avocado', isNew: 'Egg yolk' }, dinner: { text: 'Chicken + parsnip mash' } } },
        { date: '2026-06-23', meals: { breakfast: { text: 'Oat porridge with mango' }, lunch: { text: 'Egg yolk + avocado mash' }, dinner: { text: 'Pea + sweet potato mash' } } },
        { date: '2026-06-24', meals: { breakfast: { text: 'Oat porridge + peanut butter' }, lunch: { text: 'Egg yolk + butternut squash' }, dinner: { text: 'Red lentil + pumpkin mash' } } },
        { date: '2026-06-25', meals: { breakfast: { text: 'Oat porridge with banana' }, lunch: { text: 'Broccoli florets mashed with chicken', isNew: 'Broccoli' }, dinner: { text: 'Cod + sweet potato mash' } } },
        { date: '2026-06-26', meals: { breakfast: { text: 'Oat porridge with apple' }, lunch: { text: 'Broccoli + red lentil mash' }, dinner: { text: 'Chicken + zucchini mash' } } },
        { date: '2026-06-27', meals: { breakfast: { text: 'Oat porridge + peanut butter' }, lunch: { text: 'Cauliflower mash + chicken', isNew: 'Cauliflower' }, dinner: { text: 'Cod + pumpkin mash' } } },
        { date: '2026-06-28', meals: { breakfast: { text: 'Oat porridge with pear' }, lunch: { text: 'Cauliflower + red lentil mash' }, dinner: { text: 'Egg yolk + sweet potato mash' } } },
      ],
    },
    {
      label: 'Week 7',
      stage: 'Whole egg, salmon & first finger foods',
      focus: 'Soft, palm-sized strips and toast fingers. Wheat introduction. Keep meat finely shredded.',
      days: [
        { date: '2026-06-29', meals: { breakfast: { text: 'Scrambled whole egg', isNew: 'Whole egg' }, lunch: { text: 'Chicken + pumpkin mash' }, dinner: { text: 'Salmon + sweet potato mash', isNew: 'Salmon' } } },
        { date: '2026-06-30', meals: { breakfast: { text: 'Whole egg + soft pear' }, lunch: { text: 'Salmon + butternut squash mash' }, dinner: { text: 'Red lentil + zucchini mash' } } },
        { date: '2026-07-01', meals: { breakfast: { text: 'Oat porridge with banana' }, lunch: { text: 'Salmon + pea mash' }, dinner: { text: 'Chicken + parsnip mash' } } },
        { date: '2026-07-02', meals: { breakfast: { text: 'Toast fingers + smooth peanut butter', isNew: 'Wheat' }, lunch: { text: 'Cauliflower + chicken mash' }, dinner: { text: 'Egg + avocado mash' } } },
        { date: '2026-07-03', meals: { breakfast: { text: 'Toast fingers + avocado' }, lunch: { text: 'Cod + broccoli mash' }, dinner: { text: 'Red lentil + sweet potato mash' } } },
        { date: '2026-07-04', meals: { breakfast: { text: 'Banana pancake (oat flour + egg + banana)' }, lunch: { text: 'Chicken + butternut squash mash' }, dinner: { text: 'Salmon + pea mash' } } },
        { date: '2026-07-05', meals: { breakfast: { text: 'Oat porridge with peach', isNew: 'Peach' }, lunch: { text: 'Egg + zucchini mash' }, dinner: { text: 'Red lentil + pumpkin mash' } } },
      ],
    },
    {
      label: 'Week 8',
      stage: 'More textures, more iron, more finger foods',
      focus: 'Introduce beef and quinoa. Offer soft finger foods alongside spoon-fed mashes.',
      days: [
        { date: '2026-07-06', meals: { breakfast: { text: 'Oat porridge with mashed blueberry', isNew: 'Blueberry' }, lunch: { text: 'Beef purée + sweet potato', isNew: 'Beef' }, dinner: { text: 'Chicken + broccoli mash' } } },
        { date: '2026-07-07', meals: { breakfast: { text: 'Toast + smooth peanut butter' }, lunch: { text: 'Beef + pumpkin mash' }, dinner: { text: 'Red lentil + zucchini mash' } } },
        { date: '2026-07-08', meals: { breakfast: { text: 'Whole egg + avocado on toast' }, lunch: { text: 'Salmon + cauliflower mash' }, dinner: { text: 'Beef + parsnip mash' } } },
        { date: '2026-07-09', meals: { breakfast: { text: 'Oat porridge with blueberry' }, lunch: { text: 'Quinoa + chicken + pea', isNew: 'Quinoa' }, dinner: { text: 'Cod + sweet potato mash' } } },
        { date: '2026-07-10', meals: { breakfast: { text: 'Banana pancake' }, lunch: { text: 'Quinoa + red lentil + zucchini' }, dinner: { text: 'Salmon + butternut squash mash' } } },
        { date: '2026-07-11', meals: { breakfast: { text: 'Oat porridge with peach' }, lunch: { text: 'Beef + cauliflower mash' }, dinner: { text: 'Egg + avocado on toast' } } },
        { date: '2026-07-12', meals: { breakfast: { text: 'Toast + peanut butter + banana' }, lunch: { text: 'Chicken + broccoli + quinoa' }, dinner: { text: 'Red lentil + pumpkin mash' } } },
      ],
    },
    {
      label: 'Week 9',
      stage: 'Approaching 8 months — three settled meals',
      focus: 'Three balanced meals a day with iron-rich protein, a starch and a soft veg/fruit.',
      days: [
        { date: '2026-07-13', meals: { breakfast: { text: 'Oat porridge + blueberry + peanut butter' }, lunch: { text: 'Beef + sweet potato + pea mash' }, dinner: { text: 'Salmon + zucchini mash' } } },
        { date: '2026-07-14', meals: { breakfast: { text: 'Whole egg + toast soldiers' }, lunch: { text: 'Chicken + cauliflower + quinoa' }, dinner: { text: 'Red lentil + pumpkin + parsnip mash' } } },
        { date: '2026-07-15', meals: { breakfast: { text: 'Banana pancake + peach' }, lunch: { text: 'Beef + butternut squash + broccoli' }, dinner: { text: 'Cod + sweet potato mash' } } },
      ],
    },
  ];

  const STORAGE_KEY = 'babyFoodTracker.v1';

  const parseDate = (iso) => {
    const [y, m, d] = iso.split('-').map(Number);
    return new Date(y, m - 1, d);
  };

  const fmtDate = (iso) => {
    const d = parseDate(iso);
    return d.toLocaleDateString(undefined, { day: '2-digit', month: 'short' });
  };

  const fmtLongDate = (iso) => {
    const d = parseDate(iso);
    return d.toLocaleDateString(undefined, { weekday: 'short', day: '2-digit', month: 'short', year: 'numeric' });
  };

  const todayISO = () => {
    const d = new Date();
    const y = d.getFullYear();
    const m = String(d.getMonth() + 1).padStart(2, '0');
    const day = String(d.getDate()).padStart(2, '0');
    return `${y}-${m}-${day}`;
  };

  const ageString = (fromISO, toISO) => {
    const from = parseDate(fromISO);
    const to = parseDate(toISO);
    let months = (to.getFullYear() - from.getFullYear()) * 12 + (to.getMonth() - from.getMonth());
    let days = to.getDate() - from.getDate();
    if (days < 0) {
      months -= 1;
      const prev = new Date(to.getFullYear(), to.getMonth(), 0);
      days += prev.getDate();
    }
    return `${months} months, ${days} day${days === 1 ? '' : 's'}`;
  };

  const loadState = () => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      return raw ? JSON.parse(raw) : { meals: {}, trials: {} };
    } catch {
      return { meals: {}, trials: {} };
    }
  };

  const saveState = (state) => {
    try { localStorage.setItem(STORAGE_KEY, JSON.stringify(state)); } catch { /* ignore */ }
  };

  const state = loadState();
  if (!state.meals) state.meals = {};
  if (!state.trials) state.trials = {};

  const dow = (iso) => parseDate(iso).toLocaleDateString(undefined, { weekday: 'short' });

  const renderProfile = () => {
    document.getElementById('birthDate').textContent = fmtLongDate(PROFILE.birthDate);
    document.getElementById('ageToday').textContent = ageString(PROFILE.birthDate, todayISO());
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

  const mealRow = (label, meal, mealKey, date) => {
    if (!meal) return '';
    const id = `${date}__${mealKey}`;
    const checked = state.meals[id] ? 'checked' : '';
    const doneClass = state.meals[id] ? 'done' : '';
    const newTag = meal.isNew
      ? `<span class="new-tag" title="First time trying ${meal.isNew}">NEW · ${meal.isNew}</span>`
      : '';
    return `
      <label class="meal ${doneClass}">
        <input type="checkbox" data-meal-id="${id}" ${checked} />
        <span>
          <span class="meal-label">${label}</span>
          <span class="meal-text">${meal.text}${newTag}</span>
        </span>
      </label>
    `;
  };

  const renderWeek = (weekIdx) => {
    const week = PLAN[weekIdx];
    const root = document.getElementById('planRoot');
    const today = todayISO();
    const startDate = week.days[0].date;
    const endDate = week.days[week.days.length - 1].date;

    const daysHtml = week.days.map((day) => {
      const isToday = day.date === today;
      return `
        <div class="day-card ${isToday ? 'today' : ''}">
          <div class="day-head">
            <span class="dow">${dow(day.date)}</span>
            <span class="date">${fmtDate(day.date)}</span>
          </div>
          ${mealRow('Breakfast', day.meals.breakfast, 'b', day.date)}
          ${mealRow('Lunch', day.meals.lunch, 'l', day.date)}
          ${mealRow('Dinner', day.meals.dinner, 'd', day.date)}
        </div>
      `;
    }).join('');

    root.innerHTML = `
      <article class="week-card">
        <header class="week-head">
          <h2>${week.label}</h2>
          <span class="week-dates">${fmtDate(startDate)} – ${fmtDate(endDate)} · age ${ageString(PROFILE.birthDate, startDate)}</span>
        </header>
        <p class="week-stage">${week.stage}</p>
        <div class="week-focus"><strong>This week:</strong> ${week.focus}</div>
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

  const collectTrials = () => {
    const trials = [];
    PLAN.forEach((week) => {
      week.days.forEach((day) => {
        ['breakfast', 'lunch', 'dinner'].forEach((mk) => {
          const m = day.meals[mk];
          if (m && m.isNew) trials.push({ food: m.isNew, date: day.date });
        });
      });
    });
    return trials;
  };

  const renderTrialLog = () => {
    const wrap = document.getElementById('trialList');
    const trials = collectTrials();
    wrap.innerHTML = trials.map((t) => {
      const key = `${t.food}__${t.date}`;
      const saved = state.trials[key] || { d1: false, d2: false, d3: false, note: '' };
      return `
        <div class="trial-card" data-trial-key="${key}">
          <h4>${t.food}</h4>
          <div class="intro-date">First tried ${fmtLongDate(t.date)}</div>
          <div class="trial-days">
            <label><input type="checkbox" data-day="d1" ${saved.d1 ? 'checked' : ''} /> Day 1</label>
            <label><input type="checkbox" data-day="d2" ${saved.d2 ? 'checked' : ''} /> Day 2</label>
            <label><input type="checkbox" data-day="d3" ${saved.d3 ? 'checked' : ''} /> Day 3</label>
          </div>
          <textarea data-note placeholder="Notes (stools, skin, sleep, mood)…">${saved.note.replace(/&/g, '&amp;').replace(/</g, '&lt;')}</textarea>
        </div>
      `;
    }).join('');

    wrap.querySelectorAll('.trial-card').forEach((card) => {
      const key = card.getAttribute('data-trial-key');
      const ensure = () => { state.trials[key] = state.trials[key] || { d1: false, d2: false, d3: false, note: '' }; };
      card.querySelectorAll('input[type="checkbox"]').forEach((cb) => {
        cb.addEventListener('change', (e) => {
          ensure();
          state.trials[key][e.target.getAttribute('data-day')] = e.target.checked;
          saveState(state);
        });
      });
      const ta = card.querySelector('textarea[data-note]');
      ta.addEventListener('input', (e) => {
        ensure();
        state.trials[key].note = e.target.value;
        saveState(state);
      });
    });
  };

  const KNOWN_FOODS = [
    'oats', 'apple', 'pear', 'banana', 'mango', 'peach', 'blueberry',
    'avocado', 'sweet potato', 'butternut squash', 'pumpkin', 'parsnip',
    'zucchini', 'broccoli', 'cauliflower', 'peas',
    'chicken', 'beef', 'salmon', 'cod', 'egg', 'red lentil',
    'quinoa', 'peanut butter', 'dairy-free bread (for toast)',
  ];

  const ingredientsForWeek = (week) => {
    const present = new Set();
    week.days.forEach((day) => {
      ['breakfast', 'lunch', 'dinner'].forEach((mk) => {
        const m = day.meals[mk];
        if (!m) return;
        const t = m.text.toLowerCase();
        KNOWN_FOODS.forEach((k) => {
          const needle = k === 'dairy-free bread (for toast)' ? 'toast' : k;
          if (t.includes(needle)) present.add(k);
        });
      });
    });
    return Array.from(present).sort();
  };

  const renderShoppingList = (weekIdx) => {
    const ul = document.getElementById('shoppingList');
    const items = ingredientsForWeek(PLAN[weekIdx]);
    const titleCase = (s) => s.replace(/\b\w/g, (c) => c.toUpperCase());
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
    if (!confirm('Clear all ticks and notes? This cannot be undone.')) return;
    state.meals = {};
    state.trials = {};
    saveState(state);
    render(findCurrentWeekIdx());
    renderTrialLog();
  });

  renderProfile();
  renderTrialLog();
  render(findCurrentWeekIdx());
})();
