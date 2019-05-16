import {
  showModal
} from "./show/showModal";
import {
  interests
} from "./api/interests";

export function addInterest(placeId) {
  console.log("hello from addInterest");
  let innerText = `
  <form class="pure-form pure-form-aligned">
    <fieldset>
      <div class="pure-control-group">
        <label for="name">What's interesting?</label>
        <input id="name" type="text" placeholder="Name of point of Interest">
      </div>
      <div class="pure-control-group">
        <label for="description">Description:</label>
        <textarea id="description" placeholder="Describe the awesomeness" rows="4"></textarea>
      </div>
      <div class="pure-control-group">
        <label for="cost">Event cost:</label>
        <input id="cost" type="text" placeholder="49.95">
      </div>
      <div class="pure-control-group">
        <label for="review">Review:</label>
        <textarea id="review" placeholder="Review your experience" rows="4"></textarea>
      </div>

      <button type="submit" class="modal-button pure-button pure-button-primary" id="submitBtn">Submit</button>
    </fieldset>
  </form>
  `;


  let modal = showModal("Add an article", innerText, `outer-modal-${placeId}`);

  modal.addEventListener("click", (event => {
    console.log(event.target.id);
    event.preventDefault();
    if (event.target.id === `outer-modal-${placeId}` || event.target.id === "closeModal") modal.remove();
    if (event.target.id === "submitBtn") {
      interests.addNewInterest({
        name: document.querySelector("#name").value,
        description: document.querySelector("#description").value,
        cost: document.querySelector("#cost").value,
        review: document.querySelector("#review").value,
        placeId: parseInt(placeId)
      });
      modal.remove();
    }

  }));
}


// "id": 1,
// "placeId": 1,
// "name": "Local Market",
// "description": "Local market where you can try purchase local products and try the local food",
// "cost": 0.00,
// "review": ""