import {
  places
} from "../api/places";
import {
  getLoggedInUser
} from "../sessionStorage";
import {
  addInterest,
} from "../addInterest";
import {
  editInterest
} from "../editInterest";

export function showMainContentArea() {
  let rootDiv = document.querySelector("#root");
  let wrapper = document.createElement("div");
  let cardContainer = document.createElement("div");
  cardContainer.id = "card-container";
  wrapper.classList.add("wrapper");
  let h1 = document.createElement("h1");
  h1.textContent = "Oh the Places You'll Go...";
  wrapper.appendChild(h1);
  rootDiv.appendChild(wrapper);

  places.getPlacesWithInterests()
    .then(places => {
      places.forEach(place => {
        cardContainer.appendChild(buildCard(place));
      });
    });
  wrapper.appendChild(cardContainer);


  wrapper.addEventListener("click", (event) => {
    let element = event.target.localName;
    if (element === "ion-icon") element = event.target.parentNode.id;
    else element = event.target.id;
    console.log(element);
    let idSplit = element.split("-");
    if (idSplit[1] === "showMoreBtn") {
      editInterest(element);
      // do something
    } else if (idSplit[1] === "addInterestButton") {
      console.log("Add an interest");
      addInterest(idSplit[2]);
    }
  });

}


export function refresh() {
  let root = document.querySelector("#root");
  root.innerHTML = "";
  showMainContentArea();
}

function buildCard(place) {
  let loggedIn = !!getLoggedInUser(),
    button = "",
    div = document.createElement("article");
  div.classList.add("card");
  let interests = `
  <div class="card-no-interests">
    <p>Find some places to go!</p>
  </div>`;




  if (place.interests.length > 0) {
    interests = "";
    place.interests.forEach(interest => {

      if (loggedIn) button = `
      <button class="card-interests-button pure-button" id="card-showMoreBtn-${place.id}-${interest.id}">
        <ion-icon name="create" />
      </button>`;

      interests += `
        <li>
          <div class="card-interest-name" id="card-${interest.id}">
            <p id="card-name-${interest.id}">Name: ${interest.name}</p>
            ${button}
          </div>
          <p id="card-description-${interest.id}">Description: ${interest.description}</p>
          <p id="card-cost-${interest.id}">Cost: ${interest.cost}</p>
          <p id="card-review-${interest.id}">Review: ${interest.review}</p>

        </li>`;
    });
  }


  div.innerHTML = `
    <div class="card-icon">
      <ion-icon name="airplane"></ion-icon>
    </div>
    <h4 class="card-title">${place.name}</h4>
    <p>Visa Required: ${place.visa_required}</p>
    <section class="card-interests">
      <ul class="card-interest-list">
        ${interests}
      </ul>
    </section>
    <div class="card-buttonContainer">
      <button class="card-button pure-button" id="card-addInterestButton-${place.id}">Add an interest</button>
    </div>
  `;
  return div;
}

function addIcon(iconName) {
  let div = document.createElement("div");
  let icon = document.createElement("ion-icon");
  icon.setAttribute("name", iconName);
  div.appendChild(icon);
  return div;
}