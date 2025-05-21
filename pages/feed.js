import {createCard} from "../components/feed page/job-card.js";
//idk guys this makes sense in my head, i can do this part - nat

//also include a filter button in header to shortcut to job preference settings


//handle logic for skip and apply buttons
function createButtons(){
}

export function renderFeed(container) {
  container.innerHTML = `
    job feed
  `;

  

  //TODO: for every job, need to pass in the parameters to show a diff card
  container.appendChild(createCard());
  
}