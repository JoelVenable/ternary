import {
  showModal
} from "./show/showModal";
import {
  interests
} from "./api/interests";
import {
  refresh
} from "./show/card";

export function confirmDelete(interestName, interestId) {

  let deleteText = `
  <p>Do you want to delete ${interestName}?</p>
  <div class="modal-button-container">
    <button type="submit" class="modal-button pure-button pure-button-primary" id="goBackBtn">No, Go back</button>
    <button type="submit" class="modal-button modal-button-warning pure-button pure-button-primary" id="deleteBtn">Yes, Delete</button>
  </div>`;
  let modal = showModal("Are you sure?", deleteText, `outer-modal-${interestId}`);
  modal.addEventListener("click", (event => {
    let clickedItem = event.target.id;
    console.log(clickedItem);
    event.preventDefault();
    if (clickedItem === `outer-modal-${interestId}` || clickedItem === "closeModal" || clickedItem === "goBackBtn") modal.remove();
    if (clickedItem === "deleteBtn") {
      interests.deleteInterest(interestId).then(refresh);
    }
  }));
}