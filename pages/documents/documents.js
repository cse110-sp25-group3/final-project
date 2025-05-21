import { createHeader } from "../../components/header.js";
import { documentWidget } from "../../components/documents page/doc-preview.js";
import { docUpload } from "../../components/documents page/doc-upload.js";

//leave this, is what gives it the header
const app = document.getElementById('app');
app.prepend(createHeader());

export function renderDocuments(container) {
    container.innerHTML = `<h2>Documents</h2>`;

    //use documentWidget for each resume/cover letter 
    //also needs to track what doc is being used for auto-apply 
        //probably export that to be used for auto-apply feature


    //connect docUpload to upload buttons 
  }