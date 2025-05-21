import { jobWidget } from "../../components/applications page/job-preview.js";
import { createHeader } from "../../components/header.js";
//leave this, is what gives it the header
const app = document.getElementById('app');
app.prepend(createHeader());

export function renderApplications(container) {
    container.innerHTML = `
      <h2>Your Applications</h2>
    `;

    //for loop through all applied jobs or shown jobs
        //use jobWidget to construct element for each
  }