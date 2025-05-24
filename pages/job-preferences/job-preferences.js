// pages/job-preferences/job-preferences.js

import { generateCheckboxes } from "../../components/job preference page/checkbox.js";
import { generateTags }       from "../../components/job preference page/select-tags.js";
import { createHeader }       from "../../components/header.js";
import { fetchJobs }          from "../fetch-jobs.js";

async function getJobs(){
  let jobs = [];
  try {
    jobs = await fetchJobs();
  } catch (err) {
    container.innerHTML += `<p class="error">Failed to load job data.</p>`;
    return;
  }

}

const app = document.getElementById('app');
app.prepend(createHeader());

export function renderPreferences(container) {
  container.innerHTML = '';  
  
  const jobs = getJobs();

  // 2) Derive unique lists
  const allSkills = [...new Set(jobs.flatMap(j => j.relevantSkills))];
  const allRoles  = [...new Set(jobs.map(j => j.jobRole))];
  const allFields = [...new Set(jobs.map(j => j.industry))];
  const allLocations = [...new Set(jobs.map(j => j.location))];

  // 3) Build each control
  const { element: skillsEl, getSelectedTags: getSkills } = generateTags(allSkills);
  const { element: rolesEl,  getSelectedTags: getRoles  } = generateTags(allRoles);
  const { element: fieldsEl, getSelectedTags: getFields } = generateTags(allFields);

  // If you want checkboxes for locations instead of tags:
  const { element: locEl,     getSelectedOptions: getLocations } = 
      generateCheckboxes(allLocations);

  // 4) Salary input
  const salaryInput = document.createElement('input');
  salaryInput.type        = 'number';
  salaryInput.placeholder = 'Preferred salary';

  // 5) Save button
  const saveBtn = document.createElement('button');
  saveBtn.textContent = 'Save Preferences';
  saveBtn.addEventListener('click', () => {
    const prefs = {
      skills:    getSkills(),
      roles:     getRoles(),
      fields:    getFields(),
      locations: getLocations(),  // or getLocations() if using checkboxes
      salary:    salaryInput.value
    };
    console.log('User preferences:', prefs);
    // TODO: send prefs to your API or store in localStorage
  });

  // 6) Helper to wrap each section with a title
  function makeSection(title, control) {
    const sec = document.createElement('section');
    sec.className = 'pref-section';
    sec.innerHTML = `<h3>${title}</h3>`;
    sec.append(control);
    return sec;
  }

  // 7) Append in order
  container.append(
    makeSection('Preferred Skills', skillsEl),
    makeSection('Preferred Roles', rolesEl),
    makeSection('Preferred Fields', fieldsEl),
    makeSection('Preferred Locations', locEl),
    makeSection('Preferred Salary', salaryInput),
    saveBtn
  );
}
