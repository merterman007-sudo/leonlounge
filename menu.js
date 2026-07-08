const menu = window.LEON_MENU || [];

const heroEl = document.getElementById('menu-hero');
const navListEl = document.getElementById('category-nav-list');
const menuRootEl = document.getElementById('menu-root');
const relatedGridEl = document.getElementById('related-grid');
const searchInputEl = document.getElementById('search-input');
const clearBtnEl = document.getElementById('clear-btn');
const emptyStateEl = document.getElementById('empty-state');
const resultsLabelEl = document.getElementById('results-label');

const formatPrice = (price) => `${Number(price).toLocaleString('tr-TR')} TL`;

const normalize = (value) =>
  value
    .toLocaleLowerCase('tr-TR')
    .replace(/ı/g, 'i')
    .replace(/ğ/g, 'g')
    .replace(/ü/g, 'u')
    .replace(/ş/g, 's')
    .replace(/ö/g, 'o')
    .replace(/ç/g, 'c');

function getCategoryFromUrl() {
  const params = new URLSearchParams(window.location.search);
  const id = params.get('cat');
  return menu.find((category) => category.id === id) || menu[0];
}

function getItemCount(category) {
  return category.groups.reduce((total, group) => total + group.items.length, 0);
}

function filterGroups(category, query) {
  if (!query) return category.groups;

  const needle = normalize(query.trim());

  return category.groups
    .map((group) => {
      const items = group.items.filter((item) => {
        const haystack = normalize(
          [category.title, group.title, group.note || '', item.name, item.note || ''].join(' ')
        );
        return haystack.includes(needle);
      });

      return { ...group, items };
    })
    .filter((group) => group.items.length > 0);
}

function renderNav(activeCategory) {
  navListEl.innerHTML = menu
    .map(
      (category) => `
        <a
          class="category-pill ${category.id === activeCategory.id ? 'is-active' : ''}"
          href="menu.html?cat=${encodeURIComponent(category.id)}"
        >
          ${category.shortTitle}
        </a>
      `
    )
    .join('');
}

function renderHero(category) {
  document.body.classList.remove(
    'accent-coffee',
    'accent-fresh',
    'accent-cold',
    'accent-energy',
    'accent-cocktail',
    'accent-beer'
  );
  document.body.classList.add(category.accent);

  const notesMarkup = (category.notes || []).map((note) => `<span>${note}</span>`).join('');
  const highlightsMarkup = (category.highlights || []).map((item) => `<li>${item}</li>`).join('');

  heroEl.className = `hero hero-detail ${category.accent}`;
  heroEl.innerHTML = `
    <div class="hero-copy glass-panel">
      <a class="back-link hero-back" href="index.html">Tum kategoriler</a>
      <p class="eyebrow">${category.kicker}</p>
      <h1>${category.title}</h1>
      <p class="hero-text">${category.description}</p>
      <div class="hero-chips">
        <span>${getItemCount(category)} ürün</span>
        ${notesMarkup}
      </div>
      <ul class="highlight-list">
        ${highlightsMarkup}
      </ul>
    </div>
    <div class="detail-visual">
      <div
        class="detail-visual-image"
        style="background-image:url('${category.image}'); background-position:${category.imagePosition || 'center'};"
      ></div>
    </div>
  `;
}

function renderGroup(group) {
  const groupPrice = group.price ? `<div class="group-price">${formatPrice(group.price)}</div>` : '';
  const noteMarkup = group.note ? `<p class="group-note">${group.note}</p>` : '';

  if (group.layout === 'chips') {
    const chips = group.items
      .map((item) => {
        const itemNote = item.note ? `<span>${item.note}</span>` : '';
        return `
          <article class="flavor-tile">
            <strong>${item.name}</strong>
            ${itemNote}
          </article>
        `;
      })
      .join('');

    return `
      <section class="group-card">
        <div class="group-head">
          <div>
            <h3>${group.title}</h3>
            ${noteMarkup}
          </div>
          ${groupPrice}
        </div>
        <div class="flavor-grid">${chips}</div>
      </section>
    `;
  }

  const itemsMarkup = group.items
    .map((item) => {
      const price = item.price ?? group.price;
      const itemNote = item.note ? `<p class="item-note">${item.note}</p>` : '';
      return `
        <article class="menu-item">
          <div class="item-copy">
            <h4>${item.name}</h4>
            ${itemNote}
          </div>
          <div class="item-price">${formatPrice(price)}</div>
        </article>
      `;
    })
    .join('');

  return `
    <section class="group-card">
      <div class="group-head">
        <div>
          <h3>${group.title}</h3>
          ${noteMarkup}
        </div>
        ${groupPrice}
      </div>
      <div class="menu-item-list">${itemsMarkup}</div>
    </section>
  `;
}

function renderMenu(category, query = '') {
  const groups = filterGroups(category, query);
  const visibleCount = groups.reduce((total, group) => total + group.items.length, 0);

  resultsLabelEl.textContent = query.trim()
    ? `${visibleCount} sonuç listeleniyor`
    : `${getItemCount(category)} ürün listeleniyor`;

  emptyStateEl.classList.toggle('is-hidden', groups.length > 0);
  menuRootEl.innerHTML = groups.map((group) => renderGroup(group)).join('');
}

function renderRelated(activeCategory) {
  relatedGridEl.innerHTML = menu
    .filter((category) => category.id !== activeCategory.id)
    .map(
      (category) => `
        <a class="related-card ${category.accent}" href="menu.html?cat=${encodeURIComponent(category.id)}">
          <div class="related-image" style="background-image:url('${category.image}'); background-position:${category.imagePosition || 'center'};"></div>
          <div class="related-copy">
            <p>${category.kicker}</p>
            <h3>${category.title}</h3>
          </div>
        </a>
      `
    )
    .join('');
}

const activeCategory = getCategoryFromUrl();

renderHero(activeCategory);
renderNav(activeCategory);
renderMenu(activeCategory);
renderRelated(activeCategory);

searchInputEl.addEventListener('input', (event) => {
  const target = event.target;
  if (!(target instanceof HTMLInputElement)) return;
  renderMenu(activeCategory, target.value);
});

clearBtnEl.addEventListener('click', () => {
  searchInputEl.value = '';
  renderMenu(activeCategory, '');
});
