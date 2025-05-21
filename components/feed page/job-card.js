//Later createCard() should pass these param in
// skills, skillAssessment, companyName, industry, jobTitle, location, pay, companyInfo, requirements, jobDescription

export function createCard() {
    const card = document.createElement('card');
    card.className = 'card';
    card.innerHTML = `
      <div class="header">
        <h1>comp name</h1>
    <div>
    <div class="subheader">
        <h1>job title</h1>
        <span>location</span>
    </div>
    <div class="information">
        <p>description </p>
    </div>

    <div class="skill assessment">
        <h1>skill assessment here</h1>
    </div>

    `;

    return card;
  }
  