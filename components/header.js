export function createHeader() {
    const header = document.createElement('header');
    header.className = 'site-header';
    header.innerHTML = `
      <link rel="stylesheet" href="components/header.css">
      <button id="menu-toggle" class="hamburger-btn" aria-label="Open menu">☰</button>
      <span class="site-title">${document.title}</span>
    `;

    const nav = document.createElement('nav');
    nav.id = 'nav-menu';
    nav.className="nav-menu hidden";
    [
        { path: '/pages/feed/feed.html',         label: 'Feed' },
        { path: '/pages/view applications/view-app.html', label: 'Applications' },
        { path: '/pages/job preferences/job-pref.html',   label: 'Preferences' },
        { path: '/pages/documents/documents.html',         label: 'Documents' },
      ].forEach(({path,label}) => {
        const a = document.createElement('a');
        a.href = path;
        a.textContent = label;
        nav.append(a);
      });
      header.append(nav);
  
    // ── Mobile menu toggle ──
    const btn  = header.querySelector('#menu-toggle');
    const menu = header.querySelector('#nav-menu');
    btn.addEventListener('click', () => {
      const isHidden = menu.classList.toggle('hidden');
      btn.classList.toggle('rotated', !isHidden);
      if (!isHidden) {
        btn.textContent = '✕';
        btn.setAttribute('aria-label', 'Close menu');
      } else {
        btn.textContent = '☰';
        btn.setAttribute('aria-label', 'Open menu');
      }
    });
  
    // ── Highlight “current” link based on filename ──
    const links = header.querySelectorAll('#nav-menu a');

    function highlightCurrent() {
      const currentPath = window.location.pathname; // e.g. "/pages/feed/feed.html"
      links.forEach(link => {
        // Build an absolute URL so pathname is normalized
        const linkPath = new URL(link.getAttribute('href'), window.location.origin).pathname;
        link.classList.toggle('active', linkPath === currentPath);
      });
    }
    
    // Run on initial load
    highlightCurrent();
  
    return header;
  }
  