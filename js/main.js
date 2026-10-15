/* Shared behaviour: header/footer, cart, helpers, WhatsApp links */

const CART_KEY = "bellas_cart_v1";

const fmt = (n) => SITE.currency + Number(n).toLocaleString("en-GB");
const esc = (s) => String(s).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
const findItem = (id) => MENU.find((m) => m.id === id);

/* ---------- Cart (saved in localStorage) ---------- */
function getCart() {
  try {
    const raw = JSON.parse(localStorage.getItem(CART_KEY)) || [];
    return raw.filter((l) => findItem(l.id) && l.qty > 0);
  } catch (e) { return []; }
}
function saveCart(cart) {
  try { localStorage.setItem(CART_KEY, JSON.stringify(cart)); } catch (e) { /* storage blocked */ }
  updateCartCount();
}
function addToCart(id, qty = 1) {
  const cart = getCart();
  const line = cart.find((l) => l.id === id);
  if (line) line.qty += qty; else cart.push({ id, qty });
  saveCart(cart);
  toast(findItem(id).name + " added to cart");
}
function setQty(id, qty) {
  let cart = getCart();
  cart = qty <= 0 ? cart.filter((l) => l.id !== id) : cart.map((l) => (l.id === id ? { ...l, qty } : l));
  saveCart(cart);
}
function cartTotal(cart = getCart()) {
  return cart.reduce((sum, l) => sum + findItem(l.id).price * l.qty, 0);
}
function cartCount() { return getCart().reduce((n, l) => n + l.qty, 0); }
function updateCartCount() {
  document.querySelectorAll("[data-cart-count]").forEach((el) => { el.textContent = cartCount(); });
}

/* ---------- WhatsApp ---------- */
function waLink(text) {
  return "https://wa.me/" + SITE.whatsapp + "?text=" + encodeURIComponent(text);
}

/* ---------- Toast ---------- */
let toastTimer;
function toast(msg) {
  let el = document.querySelector(".toast");
  if (!el) {
    el = document.createElement("div");
    el.className = "toast"; el.setAttribute("role", "status");
    document.body.appendChild(el);
  }
  el.textContent = msg; el.classList.add("show");
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => el.classList.remove("show"), 2200);
}

/* ---------- Header and footer ---------- */
function renderChrome() {
  const page = document.body.dataset.page;
  const links = [
    ["index.html", "Home", "home"],
    ["menu.html", "Menu", "menu"],
    ["packages.html", "Party packages", "packages"],
    ["book.html", "Book an event", "book"]
  ];
  const nav = links.map(([href, label, key]) =>
    `<a href="${href}"${page === key ? ' aria-current="page"' : ""}>${label}</a>`).join("");

  document.getElementById("site-header").outerHTML = `
    <header class="site-header">
      <div class="container header-row">
        <a class="brand" href="index.html">${esc(SITE.name)}<small>${esc(SITE.location)}</small></a>
        <button class="menu-toggle" aria-expanded="false" aria-controls="nav">Menu</button>
        <nav class="nav" id="nav" aria-label="Main">
          ${nav}
          <a class="cart-link" href="cart.html"${page === "cart" || page === "checkout" ? ' aria-current="page"' : ""}>Cart <span class="cart-count" data-cart-count>0</span></a>
        </nav>
      </div>
    </header>`;

  document.getElementById("site-footer").outerHTML = `
    <footer class="site-footer">
      <div class="container">
        <div class="footer-grid">
          <div>
            <h4>${esc(SITE.name)}</h4>
            <p>${esc(SITE.tagline)}.</p>
          </div>
          <div>
            <h4>Explore</h4>
            <a href="menu.html">Menu</a><a href="packages.html">Party packages</a>
            <a href="book.html">Book an event</a><a href="cart.html">Your cart</a>
          </div>
          <div>
            <h4>Contact</h4>
            <a href="${waLink("Hello, I would like to ask about catering.")}" target="_blank" rel="noopener">WhatsApp ${esc(SITE.phoneDisplay)}</a>
            <a href="mailto:${esc(SITE.email)}">${esc(SITE.email)}</a>
            <a href="${esc(SITE.instagram)}" target="_blank" rel="noopener">Instagram</a>
            <span>${esc(SITE.hours)}</span>
          </div>
        </div>
        <div class="footer-base">&copy; ${new Date().getFullYear()} ${esc(SITE.name)}. All rights reserved.</div>
      </div>
    </footer>
    <a class="wa-float" href="${waLink("Hello, I would like to ask about catering.")}" target="_blank" rel="noopener" aria-label="Chat on WhatsApp">WA</a>`;

  const btn = document.querySelector(".menu-toggle");
  const navEl = document.getElementById("nav");
  btn.addEventListener("click", () => {
    const open = navEl.classList.toggle("open");
    btn.setAttribute("aria-expanded", String(open));
  });
  updateCartCount();
}

/* ---------- Menu item card (used on home and menu pages) ---------- */
function itemCard(m) {
  const art = m.image
    ? `<img src="${esc(m.image)}" alt="${esc(m.name)}" loading="lazy">`
    : esc(m.name.charAt(0));
  return `
    <article class="item">
      <div class="item-art" style="background:${m.art}">${art}</div>
      <div class="item-body">
        <h3>${esc(m.name)}</h3>
        <p>${esc(m.desc)}</p>
        <div class="item-foot">
          <span class="price">${fmt(m.price)} <small>${esc(m.unit)}</small></span>
          <button class="btn btn-sm" data-add="${m.id}" aria-label="Add ${esc(m.name)} to cart">Add to cart</button>
        </div>
      </div>
    </article>`;
}
document.addEventListener("click", (e) => {
  const b = e.target.closest("[data-add]");
  if (b) addToCart(b.dataset.add);
});

/* ---------- Package helper ---------- */
function packageFor(guests) {
  return PACKAGES.find((p) => guests >= p.min && guests <= p.max) || PACKAGES[PACKAGES.length - 1];
}

document.addEventListener("DOMContentLoaded", () => {
  renderChrome();
  if (typeof initPage === "function") initPage();
});
