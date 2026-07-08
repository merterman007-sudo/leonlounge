const MENU_SECTIONS = [
  {
    id: 'espresso-kahveler',
    title: 'Espresso Kahve Çeşitleri',
    kicker: 'Kahve Barı',
    description: 'Gün boyu sıcak veya soğuk aynı fiyatla servis edilen espresso bazlı favoriler.',
    tone: 'espresso',
    notes: ['Soğuk ve sıcak servis fiyatları aynıdır.'],
    groups: [
      {
        title: 'Espresso Bazlı Seçimler',
        layout: 'list',
        items: [
          { name: 'Americano', price: 250 },
          { name: 'Latte', price: 275 },
          { name: 'Cappuccino', price: 275 },
          { name: 'Mocha', price: 275 },
          { name: 'Macchiato', price: 275 },
          { name: 'Flat White', price: 275 },
          { name: 'Nescafe', price: 175 },
          { name: 'Sütlü Nescafe', price: 200 },
          { name: 'Türk Kahvesi', price: 120 },
          { name: 'Filtre Kahve', price: 250 },
          { name: 'Sütlü Filtre Kahve', price: 275 }
        ]
      }
    ]
  },
  {
    id: 'serinleten-lezzetler',
    title: 'Serinleten Lezzetler',
    kicker: 'Buz Gibi',
    description: 'Milkshake, frozen ve frappe çeşitleri ile ferah ve yoğun aromalı yudumlar.',
    tone: 'refresh',
    groups: [
      {
        title: 'Milkshake',
        price: 300,
        note: 'Yoğun kıvamlı klasik lezzetler.',
        layout: 'chips',
        items: [
          { name: 'Çikolata' },
          { name: 'Vanilya' },
          { name: 'Muz' },
          { name: 'Çilek' },
          { name: 'Karamel' },
          { name: 'Oreo' },
          { name: 'Lotus' }
        ]
      },
      {
        title: 'Frozen',
        price: 300,
        note: 'Meyve ağırlıklı buzlu karışımlar.',
        layout: 'chips',
        items: [
          { name: 'Çilek' },
          { name: 'Mango' },
          { name: 'Şeftali' },
          { name: 'Karpuz' },
          { name: 'Kavun' },
          { name: 'Passion Fruit' },
          { name: 'Yeşil Elma' },
          { name: 'Kivi' },
          { name: 'Nane Limon' }
        ]
      },
      {
        title: 'Frozen Special',
        price: 300,
        note: 'İkili meyve kombinleri.',
        layout: 'chips',
        items: [
          { name: 'Çilek - Muz' },
          { name: 'Mango - Passion' },
          { name: 'Orman Meyveleri' },
          { name: 'Yeşil Elma - Kivi' },
          { name: 'Karpuz - Kavun' }
        ]
      },
      {
        title: 'Frappe',
        price: 300,
        layout: 'chips',
        items: [
          { name: 'Vanilya' },
          { name: 'Çikolata' },
          { name: 'Karamel' },
          { name: 'Lotus' },
          { name: 'Oreo' }
        ]
      }
    ]
  },
  {
    id: 'soguk-mesrubatlar',
    title: 'Soğuk Meşrubatlar',
    kicker: 'Günlük Ferahlık',
    description: 'Gazlı içecekler, su ve limonata çeşitleriyle sade ya da aromalı seçenekler.',
    tone: 'spark',
    groups: [
      {
        title: 'Meşrubatlar',
        layout: 'list',
        items: [
          { name: 'Kola', price: 150 },
          { name: 'Fanta', price: 150 },
          { name: 'Soğuk Çay', price: 150 },
          { name: 'Soda', price: 80 },
          { name: 'Su', price: 40 }
        ]
      },
      {
        title: 'Limonata',
        layout: 'list',
        items: [{ name: 'Klasik Limonata', price: 220 }]
      },
      {
        title: 'Aromalı Limonata',
        price: 250,
        layout: 'chips',
        items: [
          { name: 'Çilek' },
          { name: 'Mango' },
          { name: 'Nane' },
          { name: 'Böğürtlen' },
          { name: 'Tropikal' },
          { name: 'Blue Curaçao' }
        ]
      }
    ]
  },
  {
    id: 'redbull-signature',
    title: 'Red Bull & Signature Karışımlar',
    kicker: 'Enerji Serisi',
    description: 'Red Bull bazlı karışımlar ve Léon imzalı ferah kokteyl dokunuşları.',
    tone: 'energy',
    groups: [
      {
        title: 'Red Bull Kokteyl',
        price: 450,
        layout: 'chips',
        items: [
          { name: 'Tropical' },
          { name: 'Green Apple' },
          { name: 'Red Bull Mojito' },
          { name: 'Peach' },
          { name: 'Passion' },
          { name: 'Strawberry' },
          { name: 'Léon Special', note: 'Çilek & Mango' }
        ]
      },
      {
        title: 'Red Bull Special',
        price: 450,
        layout: 'chips',
        items: [
          { name: 'Fresh Léon', note: 'Ananas & Limon' },
          { name: 'Green Léon', note: 'Yeşil Elma & Kivi' },
          { name: 'Tropic Léon', note: 'Mango & Passion' },
          { name: '50-50 Léon', note: 'Kavun & Limon' }
        ]
      },
      {
        title: 'Léon Signature Mixler',
        layout: 'list',
        items: [
          { name: 'Pink Sunset', note: 'Çilek, şeftali ve limonata', price: 450 },
          { name: 'Golden Mango', note: 'Mango ve portakal', price: 450 },
          { name: 'Galaxy', note: 'Blue Curaçao, böğürtlen, Sprite ve limon', price: 450 }
        ]
      }
    ]
  },
  {
    id: 'alkollu-kokteyller',
    title: 'Alkollü Kokteyller',
    kicker: 'Bar Menüsü',
    description: 'Klasik kokteyl repertuvarı ile imza karışımlar aynı başlık altında.',
    tone: 'cocktail',
    groups: [
      {
        title: 'Kokteyller',
        layout: 'list',
        items: [
          { name: 'Mojito', price: 500 },
          { name: 'Margarita', price: 600 },
          { name: 'Long Island Iced Tea', price: 600 },
          { name: 'Lynchburg Lemonade', price: 600 },
          { name: 'Mimosa', price: 550 },
          { name: 'Cuba Libre', price: 500 },
          { name: 'Daiquiri', price: 500 },
          { name: 'Aperol Spritz', price: 700 },
          { name: 'French 75', price: 600 },
          { name: 'Blue Lagoon', price: 500 },
          { name: 'Gin Tonic', price: 500 },
          { name: 'Tom Collins', price: 500 },
          {
            name: 'Mathilda',
            note: 'Yeşil elma, kivi, ananas, limon suyu, votka ve portakal',
            price: 550
          }
        ]
      }
    ]
  },
  {
    id: 'biralar-frozen',
    title: 'Biralar & Alkollü Frozen',
    kicker: 'Soğuk Servis',
    description: 'Şişe bira seçenekleri ve alkollü frozen aromaları tek bölümde.',
    tone: 'beer',
    groups: [
      {
        title: 'Biralar',
        layout: 'list',
        items: [
          { name: 'Tuborg Gold', price: 275 },
          { name: 'Carlsberg', price: 300 },
          { name: 'Corona', price: 325 }
        ]
      },
      {
        title: 'Alkollü Frozen',
        price: 450,
        layout: 'chips',
        items: [
          { name: 'Çilek' },
          { name: 'Mango' },
          { name: 'Şeftali' },
          { name: 'Karpuz' },
          { name: 'Kavun' },
          { name: 'Passion Fruit' },
          { name: 'Yeşil Elma' },
          { name: 'Kivi' },
          { name: 'Nane Limon' }
        ]
      }
    ]
  }
];

const FEATURED_ITEMS = [
  {
    title: 'Fresh Léon',
    subtitle: 'Red Bull Special',
    detail: 'Ananas ve limon ile aydınlık, canlı ve ferah bir imza karışım.',
    price: 450
  },
  {
    title: 'Mathilda',
    subtitle: 'House Cocktail',
    detail: 'Yeşil elma, kivi, ananas, limon suyu, votka ve portakal.',
    price: 550
  },
  {
    title: 'Frozen Special',
    subtitle: 'Serinleten Lezzetler',
    detail: 'Çilek-muz ve mango-passion gibi ikili kombinlerle buz gibi servis.',
    price: 300
  }
];

const navEl = document.getElementById('category-nav');
const featuredGridEl = document.getElementById('featured-grid');
const sectionCardsEl = document.getElementById('section-cards');
const menuSectionsEl = document.getElementById('menu-sections');
const searchInputEl = document.getElementById('search-input');
const clearBtnEl = document.getElementById('clear-btn');
const emptyStateEl = document.getElementById('empty-state');
const resultsSummaryEl = document.getElementById('results-summary');
const statCategoriesEl = document.getElementById('stat-categories');
const statItemsEl = document.getElementById('stat-items');

const searchNormalizer = (value) =>
  value
    .toLocaleLowerCase('tr-TR')
    .replace(/ı/g, 'i')
    .replace(/İ/g, 'i')
    .replace(/ç/g, 'c')
    .replace(/ğ/g, 'g')
    .replace(/ö/g, 'o')
    .replace(/ş/g, 's')
    .replace(/ü/g, 'u')
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '');

const formatPrice = (price) => `${Number(price).toLocaleString('tr-TR')} TL`;

function getSectionItemCount(section) {
  return section.groups.reduce((sectionTotal, group) => sectionTotal + group.items.length, 0);
}

function getMenuItemCount() {
  return MENU_SECTIONS.reduce((total, section) => total + getSectionItemCount(section), 0);
}

function getPriceBounds(section) {
  const prices = section.groups.flatMap((group) =>
    group.items.map((item) => (item.price ?? group.price ?? null)).filter((price) => price !== null)
  );

  const min = Math.min(...prices);
  const max = Math.max(...prices);
  return min === max ? formatPrice(min) : `${formatPrice(min)} - ${formatPrice(max)}`;
}

function groupOrItemMatches(section, group, item, query) {
  const haystack = [
    section.title,
    section.kicker,
    section.description,
    group.title,
    group.note || '',
    item.name,
    item.note || ''
  ]
    .join(' ')
    .trim();

  return searchNormalizer(haystack).includes(query);
}

function filterSections(queryValue) {
  const query = searchNormalizer(queryValue.trim());
  if (!query) return MENU_SECTIONS;

  return MENU_SECTIONS.map((section) => {
    const sectionMatches = searchNormalizer(
      [section.title, section.kicker, section.description, ...(section.notes || [])].join(' ')
    ).includes(query);

    const groups = section.groups
      .map((group) => {
        const groupMatches = searchNormalizer([group.title, group.note || ''].join(' ')).includes(query);
        const items = sectionMatches || groupMatches
          ? group.items
          : group.items.filter((item) => groupOrItemMatches(section, group, item, query));

        return { ...group, items };
      })
      .filter((group) => group.items.length > 0);

    return { ...section, groups };
  }).filter((section) => section.groups.length > 0);
}

function createNav() {
  navEl.innerHTML = MENU_SECTIONS.map(
    (section) => `
      <a class="nav-pill" href="#${section.id}" data-target="${section.id}">
        <span>${section.title}</span>
      </a>
    `
  ).join('');
}

function createFeaturedCards() {
  featuredGridEl.innerHTML = FEATURED_ITEMS.map(
    (item) => `
      <article class="featured-card">
        <p class="featured-subtitle">${item.subtitle}</p>
        <h3>${item.title}</h3>
        <p class="featured-detail">${item.detail}</p>
        <div class="featured-price">${formatPrice(item.price)}</div>
      </article>
    `
  ).join('');
}

function createSectionCards() {
  sectionCardsEl.innerHTML = MENU_SECTIONS.map(
    (section) => `
      <a class="section-card tone-${section.tone}" href="#${section.id}">
        <p>${section.kicker}</p>
        <h3>${section.title}</h3>
        <span>${section.description}</span>
        <strong>${getPriceBounds(section)}</strong>
      </a>
    `
  ).join('');
}

function renderGroup(group) {
  const priceTag = group.price ? `<div class="group-price">${formatPrice(group.price)}</div>` : '';
  const noteMarkup = group.note ? `<p class="group-note">${group.note}</p>` : '';

  if (group.layout === 'chips') {
    const itemsMarkup = group.items
      .map((item) => {
        const itemNote = item.note ? `<span>${item.note}</span>` : '';
        return `
          <div class="flavor-chip">
            <strong>${item.name}</strong>
            ${itemNote}
          </div>
        `;
      })
      .join('');

    return `
      <section class="group-card group-chip-card">
        <div class="group-head">
          <div>
            <h4>${group.title}</h4>
            ${noteMarkup}
          </div>
          ${priceTag}
        </div>
        <div class="flavor-grid">${itemsMarkup}</div>
      </section>
    `;
  }

  const itemsMarkup = group.items
    .map((item) => {
      const note = item.note ? `<p class="item-note">${item.note}</p>` : '';
      const itemPrice = item.price ?? group.price;
      const priceMarkup = itemPrice ? `<div class="item-price">${formatPrice(itemPrice)}</div>` : '';

      return `
        <div class="menu-item">
          <div class="item-copy">
            <h5>${item.name}</h5>
            ${note}
          </div>
          ${priceMarkup}
        </div>
      `;
    })
    .join('');

  return `
    <section class="group-card">
      <div class="group-head">
        <div>
          <h4>${group.title}</h4>
          ${noteMarkup}
        </div>
        ${priceTag}
      </div>
      <div class="menu-item-list">${itemsMarkup}</div>
    </section>
  `;
}

function renderSections(queryValue = '') {
  const filteredSections = filterSections(queryValue);
  const visibleItemCount = filteredSections.reduce((total, section) => total + getSectionItemCount(section), 0);

  resultsSummaryEl.textContent = queryValue.trim()
    ? `${visibleItemCount} sonuç listeleniyor.`
    : `Toplam ${getMenuItemCount()} çeşit listeleniyor.`;

  emptyStateEl.classList.toggle('is-hidden', filteredSections.length > 0);

  menuSectionsEl.innerHTML = filteredSections
    .map((section) => {
      const notesMarkup = (section.notes || [])
        .map((note) => `<li>${note}</li>`)
        .join('');

      return `
        <article id="${section.id}" class="menu-section tone-${section.tone}">
          <div class="section-heading-row">
            <div>
              <p class="section-kicker">${section.kicker}</p>
              <h3>${section.title}</h3>
              <p class="section-description">${section.description}</p>
            </div>
            <div class="section-meta">
              <span>${getSectionItemCount(section)} çeşit</span>
              <span>${getPriceBounds(section)}</span>
            </div>
          </div>
          ${notesMarkup ? `<ul class="section-notes">${notesMarkup}</ul>` : ''}
          <div class="group-grid">
            ${section.groups.map((group) => renderGroup(group)).join('')}
          </div>
        </article>
      `;
    })
    .join('');
}

function updateStats() {
  statCategoriesEl.textContent = String(MENU_SECTIONS.length);
  statItemsEl.textContent = String(getMenuItemCount());
}

function updateActiveNav() {
  const navLinks = [...navEl.querySelectorAll('.nav-pill')];
  const sections = [...document.querySelectorAll('.menu-section')];
  const offset = 160;
  let activeSection = null;

  for (let index = sections.length - 1; index >= 0; index -= 1) {
    const section = sections[index];
    if (section.getBoundingClientRect().top - offset <= 0) {
      activeSection = section;
      break;
    }
  }

  const activeId = activeSection ? activeSection.id : '';

  navLinks.forEach((link) => {
    link.classList.toggle('is-active', link.dataset.target === activeId);
  });
}

searchInputEl.addEventListener('input', (event) => {
  const target = event.target;
  if (!(target instanceof HTMLInputElement)) return;
  renderSections(target.value);
  updateActiveNav();
});

clearBtnEl.addEventListener('click', () => {
  searchInputEl.value = '';
  renderSections('');
  updateActiveNav();
});

window.addEventListener('scroll', updateActiveNav, { passive: true });
window.addEventListener('load', updateActiveNav);

createNav();
createFeaturedCards();
createSectionCards();
updateStats();
renderSections();
updateActiveNav();
