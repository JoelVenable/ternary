import {
  showModal
} from "./showModal";



export function showInterestModal(placeId) {
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
      <div class="modal-button-container">
        <button type="submit" class="modal-button pure-button pure-button-primary" id="submitBtn">Submit</button>
      </div>
    </fieldset>
  </form>
  `;

  return showModal("Add an article", innerText, `outer-modal-${placeId}`);

}