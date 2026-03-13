async function loadComponent(selector, url) {
  try {
    const res = await fetch(url);
    if (!res.ok) throw new Error(`Failed to load ${url}`);
    const html = await res.text();
    document.querySelector(selector).innerHTML = html;
  } catch (err) {
    console.error(err);
  }
}

function setActiveNavLink() {
  const currentPath = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('#nav-placeholder .nav-link').forEach(link => {
    const linkPath = link.getAttribute('href').split('/').pop();
    if (linkPath === currentPath) {
      link.classList.add('active');
      link.setAttribute('aria-current', 'page');
    }
  });
}

document.addEventListener('DOMContentLoaded', async () => {
  await loadComponent('#nav-placeholder', './components/nav.html');
  setActiveNavLink();
  await loadComponent('#footer-placeholder', './components/footer.html');
});