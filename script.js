
/* ════════════════════════════════
   DATA
════════════════════════════════ */
const posts = [
  {
    id: 0,
    slug: 'local-llms-workflow',
    title: 'Why I\'m Rebuilding My Entire Workflow Around Local LLMs',
    category: 'Programming',
    date: 'April 22, 2025',
    readTime: '5 min read',
    image: 'https://images.unsplash.com/photo-1677442135703-1787eea5ce01?w=900&q=80',
    excerpt: 'After months of relying on cloud-based AI APIs, I made the switch to running models locally. Here\'s what changed, what broke, and why I\'m never going back.',
    content: `
      <p>A few months ago, I hit my API rate limit for the third time in a week. My entire morning workflow — code review, doc drafting, log summarization — ground to a halt. That was the moment I started seriously exploring local language models.</p>
      <h2>The Problem With Cloud Dependency</h2>
      <p>Don't get me wrong — services like OpenAI and Anthropic produce phenomenal models. But as a developer who builds workflows <em>on top</em> of these APIs, I kept running into three fundamental problems:</p>
      <ul>
        <li>Rate limits and unpredictable latency during peak hours</li>
        <li>Data privacy concerns when processing sensitive code or documents</li>
        <li>Cost unpredictability at scale — especially for batch processing jobs</li>
      </ul>
      <blockquote>The best AI tool is one you actually control. Everything else is just infrastructure risk you've outsourced to someone else.</blockquote>
      <h2>Entering the Local LLM World</h2>
      <p>My first stop was <strong>Ollama</strong> — an incredibly simple way to pull and run quantized models locally. Within 20 minutes, I had <code class="code-block">llama3 running on my M2 Mac, outputting at ~35 tokens/second. For most writing and reasoning tasks, that's genuinely fast enough.</code></p>
      <p>From there, I layered in <strong>Open WebUI</strong> as a local chat interface, and connected everything to my code editor via a custom LSP bridge. The result? A completely offline, zero-cost AI development assistant that processes my internal codebase without ever leaving my machine.</p>
      <h2>What I Use Today</h2>
      <ul>
        <li><strong>Llama 3.1 8B (Q5_K_M):</strong> Daily coding assistant, doc generation</li>
        <li><strong>Mistral 7B:</strong> Fast first-pass code review and refactoring suggestions</li>
        <li><strong>Phi-3 Mini:</strong> Lightweight summarization of long log files</li>
        <li><strong>Nomic Embed:</strong> Local embeddings for semantic search across my notes</li>
      </ul>
      <h3>The Trade-offs Are Real, But Manageable</h3>
      <p>I won't pretend local models match GPT-4o on complex reasoning. They don't. For tasks like multi-step architectural planning or nuanced technical writing, I still reach for cloud APIs. But for the 80% of daily AI interactions — quick lookups, code completions, draft generation — local models are not just adequate. They're <em>liberating</em>.</p>
      <hr class="divider"/>
      <p>If you're a developer spending $50–$200/month on AI API costs, I genuinely think you owe it to yourself to spend one afternoon setting up Ollama. The workflow shift is smaller than you'd expect, and the upside is significant: full control, zero latency anxiety, and complete data sovereignty.</p>
    `
  },
  {
    id: 1,
    slug: 'magic-system-architecture',
    title: 'The Architecture of a Magic System: Building Rules That Feel Real',
    category: 'Writing',
    date: 'March 14, 2025',
    readTime: '8 min read',
    image: 'https://images.unsplash.com/photo-1455390582262-044cdead277a?w=900&q=80',
    excerpt: 'A deep dive into how I designed the "Resonance" magic system for Echoes of the Shattered Sky — balancing wonder with internal logic that never breaks immersion.',
    content: `
      <p>Every light novel reader has experienced it: that moment when a magic system that felt awe-inspiring suddenly becomes arbitrary. A character pulls a new power from nowhere. A rule established in chapter three is conveniently ignored in chapter twenty. The wonder evaporates, replaced by suspicion.</p>
      <p>I spent three months designing the <strong>Resonance System</strong> for <em>Echoes of the Shattered Sky</em> before writing a single chapter. Here's the framework I developed — and why I believe it's the most important pre-writing work any fantasy author can do.</p>
      <h2>Brandon Sanderson's Laws (And Why I Added a Fourth)</h2>
      <p>If you're not familiar with Sanderson's Three Laws of Magic, they're worth studying:</p>
      <ul>
        <li><strong>First Law:</strong> An author's ability to solve conflict with magic is proportional to how well the reader understands said magic</li>
        <li><strong>Second Law:</strong> Limitations are more interesting than powers</li>
        <li><strong>Third Law:</strong> Expand what you have before adding something new</li>
      </ul>
      <p>These laws are excellent — but they're about what magic can <em>do</em>. I added a Fourth Law for my own work:</p>
      <blockquote>Magic must cost something the reader cares about. Not just stamina or mana points — something with emotional weight.</blockquote>
      <h2>Designing Resonance: The Core Mechanic</h2>
      <p>In the Velanthar universe, all living things emit a faint energetic signature — their <strong>Resonance</strong>. Trained practitioners can attune to these signatures and manipulate the physical world by harmonizing or dissonating with the frequencies around them.</p>
      <h3>The Cost Structure</h3>
      <p>This is where the design gets interesting. Resonance doesn't cost stamina. It costs <em>memory</em>. Specifically, the emotional significance of memories. A practitioner pulling maximum power in combat might permanently lose the sensory memory of their mother's voice, or the feeling of their first love.</p>
      <ul>
        <li>Minor spells cost trivial sensory details (the color of a childhood door)</li>
        <li>Moderate spells cost meaningful emotional associations</li>
        <li>Major abilities risk core identity memories — who you <em>are</em></li>
      </ul>
      <h3>Why This Cost Works Narratively</h3>
      <p>The memory cost structure means every powerful scene is also an emotional scene. When my protagonist Kael uses his full Resonance capacity to save his sister in chapter 14, the reader understands that he pays for it by forgetting exactly why he was trying to save her in the first place. The victory and the tragedy are inseparable.</p>
      <hr class="divider"/>
      <p>A magic system built on meaningful costs forces the author to think about character motivation at every turn. It also means your readers will never feel cheated — because the price is always visible, always real, and always something they can feel.</p>
    `
  },
  {
    id: 2,
    slug: 'techfest-post-mortem',
    title: 'TechFest Post-Mortem: 10 Lessons From Directing 2,000 People',
    category: 'Directing',
    date: 'February 28, 2025',
    readTime: '6 min read',
    image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=900&q=80',
    excerpt: 'Everything that went right, everything that collapsed spectacularly, and the single decision that saved the main stage on Day 2. An honest reflection.',
    content: `
      <p>I've directed smaller events before — campus showcases, product launches, a couple of film premieres. But TechFest 2024 was a different scale entirely. Three days. Twelve stages. Forty-seven speakers. 2,300 registered attendees. And a main stage AV system that decided to partially fail at 8:47 AM on Day 2, forty-three minutes before doors opened.</p>
      <p>This is my honest post-mortem. Not the polished recap we posted on social media — the real one.</p>
      <h2>What Went Right</h2>
      <h3>1. The 72-Hour Pre-Event War Room</h3>
      <p>Three days before the event, I locked my core team (6 people) in a single shared workspace with one rule: every decision gets made in the room, not over Slack. This single practice eliminated the coordination lag that had plagued my previous events. Response time to problems dropped from 20+ minutes to under 3.</p>
      <h3>2. The Redundancy Stack</h3>
      <p>For every single technical system, we had a documented fallback:</p>
      <ul>
        <li>Primary PA system → Backup portable rig with 48-hour battery</li>
        <li>Main stream encoder → Secondary laptop pre-configured and tested</li>
        <li>Presenter clicker → Physical cue cards + a designated slide operator</li>
        <li>Digital registration → Printed alphabetical guest lists per table</li>
      </ul>
      <blockquote>The best directors aren't the ones who prevent every disaster. They're the ones whose disasters are invisible to the audience.</blockquote>
      <h2>The Day 2 Crisis</h2>
      <p>At 8:47 AM, our HDMI distribution matrix — the nerve center routing all stage visuals — lost two of its four output channels. This meant the main confidence monitor and the livestream feed were both dead.</p>
      <p>Here's what saved us: six weeks earlier, I had insisted we rent one extra 4K monitor "just in case" and leave it pre-configured backstage. Nobody thought we'd use it. We used it in twelve minutes flat, physically repositioning it as a confidence monitor for the first speaker while our AV tech diagnosed the matrix.</p>
      <h3>What Failed</h3>
      <ul>
        <li>Our speaker green room ran out of coffee by 10 AM on Day 1 (rookie mistake, never again)</li>
        <li>One panel ran 22 minutes over, cascading into a 15-minute delay across the afternoon</li>
        <li>Our volunteer radio frequency conflicted with the venue's own system on Day 3</li>
      </ul>
      <h2>The Single Most Important Lesson</h2>
      <p>After three days and roughly 70 hours of active directing, the lesson I'm keeping tattooed in my brain is this: <strong>the event schedule is a living document, not a contract.</strong> The directors who cling to the printed schedule when reality diverges are the ones whose events fall apart. You have to know when to adapt — and have a team trained to follow you into the adaptation without breaking stride.</p>
      <hr class="divider"/>
      <p>TechFest 2024 got a 4.7/5 average audience rating and every speaker confirmed for next year. By external metrics, it was a success. Internally, I know exactly the 8 decisions I'd make differently. That gap — between how it looked and what I know — is where the next event gets built.</p>
    `
  }
];

/* ════════════════════════════════
   RENDER BLOG CARDS
════════════════════════════════ */
function renderCards() {
  const grid = document.getElementById('blog-cards');
  grid.innerHTML = posts.map((p, i) => `
    <article class="blog-card fade-in ${i>0?'fade-in-delay-'+i:''}" onclick="openBlog(${p.id})">
      <div class="blog-thumb"><img src="${p.image}" alt="${p.title}" loading="lazy"/></div>
      <div class="blog-body">
        <div class="blog-meta">
          <span class="blog-cat">${p.category}</span>
          <span class="dot"></span>
          <span>${p.date}</span>
          <span class="dot"></span>
          <span>${p.readTime}</span>
        </div>
        <h3 class="blog-title">${p.title}</h3>
        <p class="blog-excerpt">${p.excerpt}</p>
        <button class="blog-read">Read More <span>→</span></button>
      </div>
    </article>
  `).join('');
  observeFadeIns();
}

/* ════════════════════════════════
   BLOG OPEN / CLOSE
════════════════════════════════ */
let currentPost = null;

function openBlog(id) {
  const p = posts[id];
  currentPost = id;

  // populate
  document.getElementById('bv-img').src = p.image;
  document.getElementById('bv-img').alt = p.title;
  document.getElementById('bv-title').textContent = p.title;
  document.getElementById('bv-date').textContent = p.date;
  document.getElementById('bv-cat').textContent = p.category;
  document.getElementById('bv-time').textContent = '🕐 ' + p.readTime;
  document.getElementById('bv-badges').innerHTML = `<span class="bv-pill">${p.category}</span>`;
  document.getElementById('bv-content').innerHTML = p.content;

  // related posts (exclude current)
  const related = posts.filter(r => r.id !== id);
  document.getElementById('bv-related').innerHTML = related.map(r => `
    <div class="bv-rel-card" onclick="openBlog(${r.id})">
      <div class="bv-rel-thumb"><img src="${r.image}" alt="${r.title}" loading="lazy"/></div>
      <div class="bv-rel-body">
        <div class="bv-rel-cat">${r.category}</div>
        <div class="bv-rel-title">${r.title}</div>
      </div>
    </div>
  `).join('');

  // open
  const view = document.getElementById('blog-view');
  view.scrollTop = 0;
  view.classList.add('open');
  document.body.style.overflow = 'hidden';
  document.getElementById('read-progress').style.width = '0%';

  // progress bar
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
  const p = posts[currentPost];
  navigator.clipboard.writeText(window.location.origin + '#' + p.slug).catch(() => {});
  showToast('🔗 Link copied to clipboard!');
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
   PORTFOLIO FILTER
════════════════════════════════ */
document.querySelectorAll('.filter-tab').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.filter-tab').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    const f = btn.dataset.filter;
    document.querySelectorAll('.port-card').forEach(card => {
      const show = f === 'all' || card.dataset.cat === f;
      card.style.display = show ? '' : 'none';
    });
  });
});

/* ════════════════════════════════
   SCROLL FADE-IN
════════════════════════════════ */
function observeFadeIns() {
  const obs = new IntersectionObserver(entries => {
    entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('visible'); obs.unobserve(e.target); } });
  }, { threshold: 0.1 });
  document.querySelectorAll('.fade-in:not(.visible)').forEach(el => obs.observe(el));
}
observeFadeIns();

/* ════════════════════════════════
   CONTACT FORM
════════════════════════════════ */
function handleSubmit(e) {
  e.preventDefault();
  showToast('✦ Message sent! I\'ll be in touch soon.');
  e.target.reset();
}

function showToast(msg) {
  const t = document.getElementById('toast');
  t.textContent = msg;
  t.classList.add('show');
  setTimeout(() => t.classList.remove('show'), 4000);
}

/* ════════════════════════════════
   INIT
════════════════════════════════ */
renderCards();