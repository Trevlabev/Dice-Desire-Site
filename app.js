(() => {
  const gate = document.getElementById('ageGate');
  const enter = document.getElementById('enterSite');
  const body = document.body;
  if (!localStorage.getItem('dd-age-confirmed')) {
    gate.hidden = false;
    body.classList.add('no-scroll');
  }
  enter?.addEventListener('click', () => {
    localStorage.setItem('dd-age-confirmed', 'yes');
    gate.hidden = true;
    body.classList.remove('no-scroll');
  });

  const navToggle = document.getElementById('navToggle');
  const nav = document.getElementById('siteNav');
  navToggle?.addEventListener('click', () => {
    const open = nav.classList.toggle('open');
    navToggle.setAttribute('aria-expanded', String(open));
  });
  nav?.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
    nav.classList.remove('open');
    navToggle?.setAttribute('aria-expanded', 'false');
  }));

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });
  document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
})();
