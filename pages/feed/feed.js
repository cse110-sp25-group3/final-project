import {createCard} from "../../components/feed page/job-card.js";
import { createHeader } from "../../components/header.js";
//idk guys this makes sense in my head, i can do this part - nat

//also include a filter button in header to shortcut to job preference settings


const app = document.getElementById('app');
app.prepend(createHeader());

export function renderFeed(container) {
  console.log('renderFeed called');
  container.innerHTML = '<h2>Job Feed</h2>';
  // … your card logic here …
}

  

  //TODO: for every job, need to pass in the parameters to show a diff card
  