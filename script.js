/* ════════════════════════════════════════════════════
   AXIS — script.js  (Supabase Edition)
   Ganti SUPABASE_URL dan SUPABASE_ANON_KEY dengan
   nilai dari dashboard Supabase kamu.
════════════════════════════════════════════════════ */

// ── KONFIGURASI SUPABASE ──────────────────────────
const SUPABASE_URL  = 'https://mdlqqerdfclaffruacnd.supabase.co'; // ← ganti ini
const SUPABASE_KEY  = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1kbHFxZXJkZmNsYWZmcnVhY25kIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Nzc3NDgyMzEsImV4cCI6MjA5MzMyNDIzMX0.Pi31EB8rC9grEn8XDHQgD1tgqZ8RaK4ZeQJMgo_ZMpI'; // ← ganti ini

const headers = {
  'apikey':        SUPABASE_KEY,
  'Authorization': 'Bearer ' + SUPABASE_KEY,
  'Content-Type':  'application/json'
};

// Helper: fetch dari Supabase REST API
async function sb(path, options = {}) {
  const res = await fetch(SUPABASE_URL + '/rest/v1/' + path, {
    headers,
    ...options
  });
  if (!res.ok) {
    const err = await res.text();
    throw new Error('Supabase error: ' + err);
  }
  // DELETE tidak ada body
  if (res.status === 204) return null;
  return res.json();
}

/* ════════════════════════════════
   STATE
════════════════════════════════ */
let posts        = [];   // artikel dari DB
let portfolioItems = []; // portfolio dari DB
let currentPost  = 0;

/* ════════════════════════════════
   RENDER BLOG CARDS
════════════════════════════════ */
function renderCards() {
  const grid = document.getElementById('blog-cards');
  if (!posts.length) {
    grid.innerHTML = '<p style="color:var(--muted);text-align:center;padding:2rem">Belum ada artikel.</p>';
    return;
  }
  grid.innerHTML = posts.map((p, i) => `
    <article class="blog-card fade-in ${i > 0 ? 'fade-in-delay-' + i : ''}" onclick="openBlog(${p.id})">
      <div class="blog-thumb"><img src="${p.image_url}" alt="${p.title}" loading="lazy"/></div>
      <div class="blog-body">
        <div class="blog-meta">
          <span class="blog-cat">${p.category}</span>
          <span class="dot"></span>
          <span>${p.date}</span>
          <span class="dot"></span>
          <span>${p.read_time}</span>
        </div>
        <h3 class="blog-title">${p.title}</h3>
        <p class="blog-excerpt">${p.excerpt}</p>
        <span class="blog-read-more">Read More →</span>
      </div>
    </article>
  `).join('');
  observeFadeIns();
}

/* ════════════════════════════════
   RENDER PORTFOLIO CARDS
════════════════════════════════ */
function renderPortfolio(filter = 'all') {
  const grid = document.querySelector('.portfolio-grid');
  if (!grid) return;

  const filtered = filter === 'all'
    ? portfolioItems
    : portfolioItems.filter(p => p.category === filter);

  if (!filtered.length) {
    grid.innerHTML = '<p style="color:var(--muted);text-align:center;padding:2rem;grid-column:1/-1">Tidak ada proyek di kategori ini.</p>';
    return;
  }

  grid.innerHTML = filtered.map((p, i) => `
    <div class="port-card fade-in ${i > 0 ? 'fade-in-delay-' + (i % 3) : ''}" data-cat="${p.category}">
      <div class="port-thumb">
        <img src="${p.image_url}" alt="${p.title}" loading="lazy"/>
        <div class="port-overlay">
          <span class="port-cat-badge">${capitalize(p.category)}</span>
        </div>
      </div>
      <div class="port-body">
        <div class="port-title">${p.title}</div>
        <div class="port-desc">${p.description}</div>
        <div class="port-tags">
          ${p.tags.map(t => `<span class="port-tag">${t}</span>`).join('')}
        </div>
        ${p.link ? `<a href="${p.link}" target="_blank" rel="noopener" class="blog-read-more" style="margin-top:.5rem;display:inline-block">View Project →</a>` : ''}
      </div>
    </div>
  `).join('');
  observeFadeIns();
}

function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

/* ════════════════════════════════
   OPEN / CLOSE BLOG POST
════════════════════════════════ */
function openBlog(id) {
  const p = posts.find(x => x.id === id);
  if (!p) return;
  currentPost = id;

  document.getElementById('bv-img').src        = p.image_url;
  document.getElementById('bv-img').alt        = p.title;
  document.getElementById('bv-title').textContent = p.title;
  document.getElementById('bv-date').textContent  = p.date;
  document.getElementById('bv-cat').textContent   = p.category;
  document.getElementById('bv-time').textContent  = '🕐 ' + p.read_time;
  document.getElementById('bv-badges').innerHTML  = `<span class="bv-pill">${p.category}</span>`;
  document.getElementById('bv-content').innerHTML = p.content;

  // Related posts
  const related = posts.filter(r => r.id !== id);
  document.getElementById('bv-related').innerHTML = related.map(r => `
    <div class="bv-rel-card" onclick="openBlog(${r.id})">
      <div class="bv-rel-thumb"><img src="${r.image_url}" alt="${r.title}" loading="lazy"/></div>
      <div class="bv-rel-body">
        <div class="bv-rel-cat">${r.category}</div>
        <div class="bv-rel-title">${r.title}</div>
      </div>
    </div>
  `).join('');

  const view = document.getElementById('blog-view');
  view.scrollTop = 0;
  view.classList.add('open');
  document.body.style.overflow = 'hidden';
  document.getElementById('read-progress').style.width = '0%';

  view.onscroll = () => {
    const max = view.scrollHeight - view.clientHeight;
    const pct = max > 0 ? (view.scrollTop / max) * 100 : 0;
    document.getElementById('read-progress').style.width = pct + '%';
  };
}

function closeBlog() {
  const view = document.getElementById('blog-view');
  view.classList.remove('open');
  document.body.style.overflow = '';
  document.getElementById('read-progress').style.width = '0%';
  view.onscroll = null;
}

function goHome() {
  closeBlog();
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function copyLink() {
  const p = posts.find(x => x.id === currentPost);
  if (!p) return;
  navigator.clipboard.writeText(window.location.origin + '#' + p.slug).catch(() => {});
  showToast('🔗 Link copied to clipboard!');
}

/* ════════════════════════════════
   CONTACT FORM → Supabase
════════════════════════════════ */
async function handleSubmit(e) {
  e.preventDefault();
  const form   = e.target;
  const inputs = form.querySelectorAll('input, textarea');
  const [firstName, lastName, email, subject, message] = inputs;

  const btn = form.querySelector('button[type="submit"]');
  btn.disabled    = true;
  btn.textContent = 'Mengirim…';

  try {
    await sb('messages', {
      method: 'POST',
      body: JSON.stringify({
        first_name: firstName.value.trim(),
        last_name:  lastName.value.trim() || null,
        email:      email.value.trim(),
        subject:    subject.value.trim() || null,
        message:    message.value.trim()
      })
    });
    showToast('✦ Pesan terkirim! Saya akan membalas dalam 48 jam.');
    form.reset();
  } catch (err) {
    console.error(err);
    showToast('❌ Gagal mengirim. Coba lagi nanti.');
  } finally {
    btn.disabled    = false;
    btn.textContent = 'Send Message ✦';
  }
}

/* ════════════════════════════════
   NAVBAR SCROLL
════════════════════════════════ */
window.addEventListener('scroll', () => {
  document.getElementById('navbar').classList.toggle('scrolled', window.scrollY > 40);
});

/* ════════════════════════════════
   MOBILE MENU
════════════════════════════════ */
function toggleMenu() {
  document.getElementById('mobile-menu').classList.toggle('open');
}

/* ════════════════════════════════
   TYPING EFFECT
════════════════════════════════ */
const words = ['Programmer.', 'Novelist.', 'Director.'];
let wIdx = 0, cIdx = 0, deleting = false;
const typedEl = document.getElementById('typed-text');

function type() {
  const w = words[wIdx];
  typedEl.textContent = deleting ? w.slice(0, cIdx--) : w.slice(0, cIdx++);
  let delay = deleting ? 60 : 110;
  if (!deleting && cIdx === w.length + 1) { delay = 1800; deleting = true; }
  else if (deleting && cIdx === 0) { deleting = false; wIdx = (wIdx + 1) % words.length; delay = 300; }
  setTimeout(type, delay);
}
type();

/* ════════════════════════════════
   PORTFOLIO FILTER TABS
════════════════════════════════ */
document.querySelectorAll('.filter-tab').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.filter-tab').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    renderPortfolio(btn.dataset.filter);
  });
});

/* ════════════════════════════════
   SCROLL FADE-IN
════════════════════════════════ */
function observeFadeIns() {
  const obs = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) { e.target.classList.add('visible'); obs.unobserve(e.target); }
    });
  }, { threshold: 0.1 });
  document.querySelectorAll('.fade-in:not(.visible)').forEach(el => obs.observe(el));
}
observeFadeIns();

/* ════════════════════════════════
   TOAST
════════════════════════════════ */
function showToast(msg) {
  const t = document.getElementById('toast');
  t.textContent = msg;
  t.classList.add('show');
  setTimeout(() => t.classList.remove('show'), 4000);
}

/* ════════════════════════════════
   LOADING STATE HELPERS
════════════════════════════════ */
function showSkeleton(containerId, count = 3) {
  const el = document.getElementById(containerId);
  if (!el) return;
  el.innerHTML = Array(count).fill(`
    <div class="blog-card" style="opacity:.4;pointer-events:none">
      <div class="blog-thumb" style="background:var(--card);border-radius:12px"></div>
      <div class="blog-body">
        <div style="height:12px;background:var(--card);border-radius:6px;width:40%;margin-bottom:1rem"></div>
        <div style="height:20px;background:var(--card);border-radius:6px;margin-bottom:.5rem"></div>
        <div style="height:14px;background:var(--card);border-radius:6px;width:80%"></div>
      </div>
    </div>
  `).join('');
}

/* ════════════════════════════════
   INIT — Fetch dari Supabase
════════════════════════════════ */
async function init() {
  // Tampilkan skeleton saat loading
  showSkeleton('blog-cards', 3);

  try {
    // Fetch artikel (hanya yang published, urut terbaru)
    const articleData = await sb(
      'articles?select=id,slug,title,category,date,read_time,image_url,excerpt,content&published=eq.true&order=created_at.desc'
    );
    posts = articleData || [];

    // Fetch portfolio (urut sort_order)
    const portData = await sb(
      'portfolio?select=id,title,description,category,image_url,tags,link&order=sort_order.asc'
    );
    portfolioItems = portData || [];

  } catch (err) {
    console.error('Gagal memuat data dari Supabase:', err);
    showToast('⚠️ Koneksi ke database gagal. Pastikan konfigurasi Supabase sudah benar.');
  }

  renderCards();
  renderPortfolio('all');
}

init();