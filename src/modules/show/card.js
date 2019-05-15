import {
  places
} from "../api/places";
import {
  getLoggedInUser
} from "../sessionStorage";

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


}



function buildCard(place) {
  let loggedIn = getLoggedInUser();
  console.log(place);
  console.log(!!loggedIn);

  let div = document.createElement("article");
  div.classList.add("card");
  let interests = "";
  console.log(place.interests.length);


  if (place.interests.length > 0) {
    place.interests.forEach(interest => {

      interests += `
        <li>
          ${interest.name}
          <button class="card-interests-button pure-button" id="card-button-${place.id}-${interest.id}">Show more</button>
        </li>`;
    });
  }
  div.innerHTML = `
    <h4 class="card-title">${place.name}</h4>
      <p>Visa Required: ${place.visa_required}</p>
      <section class="card-interests">
        <ul class="card-interest-list">
          ${interests}
        </ul>
      </section>
  `;
  return div;
}