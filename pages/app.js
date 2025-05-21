// pages/app.js
import { createHeader } from '../components/header.js';
import { renderFeed } from './feed.js';
import { renderApplications } from './view-applications.js';
import { renderPreferences } from './job-preferences.js';
import { renderDocuments } from './documents.js';
import { renderAutoApply } from './auto-apply-settings.js';

const routes = {
  '#feed':              renderFeed,
  '#view-applications': renderApplications,
  '#job-preferences':   renderPreferences,
  '#documents':         renderDocuments,
  '#auto-apply-settings': renderAutoApply,
};

// pages/app.js
function loadPage() {
  const app = document.getElementById('app');
  app.innerHTML = '';             // clear old header+content
  app.prepend(createHeader());    // mount header

  // create a spot just for page‐specific content
  const content = document.createElement('div');
  content.style.margin = "25px";
  content.id = 'content';
  app.append(content);

  const key = window.location.hash || '#feed';
  const renderFn = routes[key] || renderFeed;
  renderFn(content);              // pass ONLY the content div
}


window.addEventListener('DOMContentLoaded', () => {
  window.addEventListener('hashchange', loadPage);
  loadPage();
});
