const menu = window.LEON_MENU || [];
const featured = window.LEON_FEATURED || [];

const categoryGridEl = document.getElementById('category-grid');
const featuredStripEl = document.getElementById('featured-strip');

const formatPrice = (price) => `${Number(price).toLocaleString('tr-TR')} TL`;

function getItemCount(category) {
  return category.groups.reduce((total, group) => total + group.items.length, 0);
}

function getPriceRange(category) {
  const prices = category.groups.flatMap((group) =>
    group.items.map((item) => item.price ?? group.price).filter((price) => price !== undefined)
  );
  const min = Math.min(...prices);
  const max = Math.max(...prices);
  return min === max ? formatPrice(min) : `${formatPrice(min)} - ${formatPrice(max)}`;
}

function renderCategoryCards() {
  categoryGridEl.innerHTML = menu
    .map(
      (category) => `
        <a class="category-card ${category.accent}" href="menu.html?cat=${encodeURIComponent(category.id)}">
          <div class="category-image" style="background-image:url('${category.image}'); background-position:${category.imagePosition || 'center'};"></div>
          <div class="category-overlay"></div>
          <div class="category-copy">
            <p>${category.kicker}</p>
            <h3>${category.title}</h3>
            <span>${category.description}</span>
            <div class="card-meta">
              <strong>${getItemCount(category)} ürün</strong>
              <strong>${getPriceRange(category)}</strong>
            </div>
          </div>
        </a>
      `
    )
    .join('');
}

function renderFeatured() {
  featuredStripEl.innerHTML = featured
    .map(
      (item) => `
        <a class="featured-card" href="${item.href}">
          <p>${item.subtitle}</p>
          <h3>${item.title}</h3>
          <span>${item.text}</span>
          <strong>${formatPrice(item.price)}</strong>
        </a>
      `
    )
    .join('');
}

renderCategoryCards();
renderFeatured();
