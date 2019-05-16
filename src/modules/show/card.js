import {
  places
} from "../api/places";
import {
  getLoggedInUser
} from "../sessionStorage";
import {
  addInterest
} from "../addInterest";

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
    let idSplit = event.target.id.split("-");
    if (idSplit[1] === "showMoreBtn") {


      console.log("Show more");
      console.log("id", idSplit[3]);
      // do something
    } else if (idSplit[1] === "addInterestButton") {
      console.log("Add an interest");
      addInterest(idSplit[2]);
    }
  });

}



function buildCard(place) {
  let loggedIn = getLoggedInUser();
  console.log(place);
  console.log(!!loggedIn);

  let div = document.createElement("article");
  div.classList.add("card");
  let interests = `
  <div class="card-no-interests">
    <p>You don't have any interests yet!</p>
    
  </div>`;




  console.log(place.interests.length);


  if (place.interests.length > 0) {
    interests = "";
    place.interests.forEach(interest => {

      interests += `
        <li>
          ${interest.name}
          <button class="card-interests-button pure-button" id="card-showMoreBtn-${place.id}-${interest.id}">Show more</button>
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