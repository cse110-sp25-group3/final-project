// pages/app.js

import { createHeader }       from '../components/header.js';
import { renderFeed }         from './feed/feed.js';
import { renderApplications } from './view-applications/view-applications.js';   // hyphen, not space
import { renderPreferences }  from './job-preferences/job-preferences.js';      // hyphen, not space
import { renderDocuments }    from './documents/documents.js';

const pageMap = {
  'feed.html':              { render: renderFeed,         title: 'Job Feed' },
  'view-applications.html': { render: renderApplications, title: 'Your Applications' },
  'job-preferences.html':   { render: renderPreferences,  title: 'Job Preferences' },
  'documents.html':         { render: renderDocuments,    title: 'Documents' },
};

function loadPage() {
  const file = window.location.pathname.split('/').pop() || 'feed.html';
  const pageInfo = pageMap[file] || pageMap['feed.html'];

  const app = document.getElementById('app');
  app.innerHTML = '';
  app.prepend(createHeader(pageInfo.title));

  const content = document.createElement('div');
  content.id = 'content';
  content.style.margin = '25px';
  app.append(content);

  console.log(`Rendering ${file}`);
  pageInfo.render(content);
}

window.addEventListener('DOMContentLoaded', loadPage);
