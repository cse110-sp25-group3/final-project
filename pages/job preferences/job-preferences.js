import { generateCheckboxes } from "../../components/job preference page/checkbox.js";
import { generateTags } from "../../components/job preference page/select-tags.js";
import { createHeader } from "../../components/header.js";
//leave this, is what gives it the header
const app = document.getElementById('app');
app.prepend(createHeader());

export function renderPreferences(container) {
    container.innerHTML = `<h2>Preferences</h2>`;

    //append generateTags and generateCheckboxes for each one
    //can make another function to autoformat each section (placing title next to the tag box) to keep spacing accurate

    //also needs preferred salary (just an input for a number)

    //needs Save Preferences button --> unless clicked, do not finalize selectedTags array, keep original
  }