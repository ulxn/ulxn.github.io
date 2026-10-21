const header = document.querySelector('[data-header]');
const year = document.querySelector('[data-year]');
const themeToggle = document.querySelector('[data-theme-toggle]');
const themeMeta = document.querySelector('meta[name="theme-color"]');

if (year) {
  year.textContent = new Date().getFullYear();
}

const getTheme = () => document.documentElement.dataset.theme || 'light';

const applyTheme = (theme) => {
  const isDark = theme === 'dark';
  document.documentElement.dataset.theme = theme;
  themeToggle?.setAttribute('aria-pressed', String(isDark));
  themeToggle?.setAttribute('aria-label', `Switch to ${isDark ? 'light' : 'dark'} mode`);
  themeMeta?.setAttribute('content', isDark ? '#141412' : '#f2f0e9');
};

applyTheme(getTheme());

themeToggle?.addEventListener('click', () => {
  const nextTheme = getTheme() === 'dark' ? 'light' : 'dark';
  applyTheme(nextTheme);
  try { localStorage.setItem('ulxn-theme', nextTheme); } catch (_) {}
});

const systemTheme = matchMedia('(prefers-color-scheme: dark)');
systemTheme.addEventListener('change', (event) => {
  try { if (localStorage.getItem('ulxn-theme')) return; } catch (_) {}
  applyTheme(event.matches ? 'dark' : 'light');
});

const secret = document.querySelector('[data-hero-secret]');
if (secret) {
  let pinned = false;
  const chars = [...secret.querySelectorAll('.flip-char')];
  const measureChars = () => {
    chars.forEach((char) => {
      const front = char.querySelector('.flip-char-front');
      const back = char.querySelector('.flip-char-back');
      char.style.setProperty('--from-w', `${front.offsetWidth}px`);
      char.style.setProperty('--to-w', `${back.offsetWidth}px`);
    });
  };

  measureChars();
  document.fonts?.ready.then(measureChars);
  if (typeof ResizeObserver !== 'undefined') {
    new ResizeObserver(measureChars).observe(secret.closest('h1'));
  }

  const showSecret = (active) => {
    if (secret.classList.contains('headline--hovered') === active) return;
    secret.classList.toggle('headline--hovered', active);
    secret.setAttribute('aria-pressed', String(active));
    secret.setAttribute('aria-label', active
      ? 'Turning odd ideas into unpaid labour.'
      : 'Turning odd ideas into useful things.');
  };
  secret.querySelectorAll('.word-switch').forEach((word) => {
    word.addEventListener('pointerenter', (event) => {
      if (event.pointerType === 'mouse') showSecret(true);
    });
    word.addEventListener('pointerleave', (event) => {
      if (event.pointerType === 'mouse') showSecret(false);
    });
  });
  secret.addEventListener('focus', () => showSecret(true));
  secret.addEventListener('blur', () => {
    pinned = false;
    showSecret(false);
  });
  secret.addEventListener('click', (event) => {
    if (event.pointerType === 'mouse') return;
    pinned = !pinned;
    showSecret(pinned);
  });
  secret.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
      pinned = false;
      showSecret(false);
    }
  });
}

const updateHeader = () => {
  header?.classList.toggle('is-scrolled', window.scrollY > 18);
};

updateHeader();
window.addEventListener('scroll', updateHeader, { passive: true });
