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
  let sequence = 0;
  let timers = [];
  const words = [...secret.querySelectorAll('.word-switch')];
  const still = matchMedia('(prefers-reduced-motion: reduce)');

  const changeWords = (active) => {
    sequence += 1;
    const currentSequence = sequence;
    timers.forEach(clearTimeout);
    timers = [];

    words.forEach((word) => {
      const live = word.querySelector('.word-live');
      const target = active ? word.dataset.secret : word.dataset.normal;
      if (still.matches) {
        live.textContent = target;
        word.classList.remove('is-glitching');
        return;
      }

      const letters = [...live.textContent];
      word.classList.remove('is-glitching');
      void word.offsetWidth;
      word.classList.add('is-glitching');

      [...target].forEach((letter, index) => {
        if (letters[index] === letter) return;
        timers.push(setTimeout(() => {
          if (sequence !== currentSequence) return;
          letters[index] = letter === '.' ? '.' : '#';
          live.textContent = letters.join('');
        }, index * 25));
        timers.push(setTimeout(() => {
          if (sequence !== currentSequence) return;
          letters[index] = letter;
          live.textContent = letters.join('');
        }, index * 25 + 32));
      });
      timers.push(setTimeout(() => {
        if (sequence !== currentSequence) return;
        live.textContent = target;
        word.classList.remove('is-glitching');
      }, target.length * 25 + 38));
    });
  };

  const showSecret = (active) => {
    if (secret.classList.contains('is-secret') === active) return;
    secret.classList.toggle('is-secret', active);
    secret.setAttribute('aria-pressed', String(active));
    secret.setAttribute('aria-label', active
      ? 'Turning odd ideas into unpaid labour.'
      : 'Turning odd ideas into useful things.');
    changeWords(active);
  };
  secret.addEventListener('pointerenter', (event) => {
    if (event.pointerType === 'mouse') showSecret(true);
  });
  secret.addEventListener('pointerleave', (event) => {
    if (event.pointerType === 'mouse') showSecret(pinned);
  });
  secret.addEventListener('focus', () => showSecret(true));
  secret.addEventListener('blur', () => {
    pinned = false;
    showSecret(false);
  });
  secret.addEventListener('click', () => {
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
