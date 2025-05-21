// js/app.js

import { createHeader } from '../components/header.js';
import { renderFeed }           from './feed/feed.js';
import { renderApplications }   from './view applications/view-applications.js';
import { renderPreferences }    from './job preferences/job-preferences.js';
import { renderDocuments }      from './documents/documents.js';

// Map each HTML filename → its renderer + title
const pageMap = {
  '/pages/feed/feed.html': {
    render: renderFeed,
    title: 'Job Feed'
  },
  'view-applications.html': {
    render: renderApplications,
    title: 'Your Applications'
  },
  'job-preferences.html': {
    render: renderPreferences,
    title: 'Job Preferences'
  },
  'documents.html': {
    render: renderDocuments,
    title: 'Documents'
  },
};

document.addEventListener('DOMContentLoaded', () => {
  // 1) Figure out which HTML file we’re on
  const file = window.location.pathname.split('/').pop() || 'feed.html';
  const page = pageMap[file] || pageMap['feed.html'];

  // 2) Grab your app container
  const app = document.getElementById('app');
  app.innerHTML = '';

  // 3) Mount a dynamic header
  app.prepend(createHeader());

  // 4) Create & style a “content” wrapper (same as before)
  const content = document.createElement('div');
  content.id = 'content';
  content.style.margin = '25px';
  app.append(content);

  // 5) Call the page’s render function
  page.render(content);
});
