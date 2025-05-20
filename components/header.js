export function createHeader() {
    const header = document.createElement('header');
    header.className = 'site-header';
    header.innerHTML = `
      <link rel="stylesheet" href="components/header.css">
      <button id="menu-toggle" class="hamburger-btn" aria-label="Toggle menu">☰</button>
      <span class="site-title">JobSwipe</span>
      <nav id="nav-menu" class="nav-menu hidden">
        <ul>
          <li><a href="#feed">Feed</a></li>
          <li><a href="#view-applications">Applications</a></li>
          <li><a href="#job-preferences">Preferences</a></li>
          <li><a href="#documents">Documents</a></li>
        </ul>
      </nav>
    `;
    
    const btn  = header.querySelector('#menu-toggle');
    const menu = header.querySelector('#nav-menu');
  
    // 1) Spin logic (you already have this)
    btn.addEventListener('click', () => {
      const menuIsHidden = menu.classList.toggle('hidden');
      btn.classList.toggle('rotated', !menuIsHidden);
      if (!menuIsHidden) {
        btn.textContent = '✕';
        btn.setAttribute('aria-label', 'Close menu');
      } else {
        btn.textContent = '☰';
        btn.setAttribute('aria-label', 'Open menu');
      }
    });
  
    // 2) Highlight current page
    function highlightCurrent() {
      const links = header.querySelectorAll('.nav-menu a');
      // use hash; if you’re using real paths, swap in location.pathname
      const current = window.location.hash || '#feed';
      links.forEach(link => {
        link.classList.toggle(
          'active',
          link.getAttribute('href') === current
        );
      });
    }
    // run on load…
    highlightCurrent();
    // …and whenever the hash changes
    window.addEventListener('hashchange', highlightCurrent);
  
    return header;
  }
  