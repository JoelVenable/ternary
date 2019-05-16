import {
  interests
} from "./api/interests";
import {
  showInterestModal
} from "./show/showInterestModal";
import {
  refresh
} from "./show/card";
import {
  confirmDelete
} from "./confirmDelete";


export function editInterest(buttonClicked) {
  let idSplit = buttonClicked.split("-"),
    placeId = idSplit[2],
    interestId = idSplit[3],
    modal = showInterestModal(interestId),
    cardDiv = document.querySelector(`card-${interestId}`),
    name = document.querySelector("#name"),
    description = document.querySelector("#description"),
    cost = document.querySelector("#cost"),
    review = document.querySelector("#review"),
    buttonDiv = document.querySelector(".modal-button-container");
  buttonDiv.innerHTML += `
    <button type="submit" class="modal-button modal-button-warning pure-button pure-button-primary" id="deleteBtn">Delete</button>`;

  // Prefill the fields with existing content.
  name.value = document.querySelector(`#card-name-${interestId}`).textContent.split(": ")[1];
  description.value = document.querySelector(`#card-description-${interestId}`).textContent.split(": ")[1];
  cost.value = document.querySelector(`#card-cost-${interestId}`).textContent.split(": ")[1];
  review.value = document.querySelector(`#card-review-${interestId}`).textContent.split(": ")[1];


  modal.addEventListener("click", (event => {
    console.log(event);
    event.preventDefault();
    if (event.target.id === `outer-modal-${interestId}` || event.target.id === "closeModal") modal.remove();
    if (event.target.id === "submitBtn") {
      interests.editInterest({
          name: document.querySelector("#name").value,
          description: document.querySelector("#description").value,
          cost: document.querySelector("#cost").value,
          review: document.querySelector("#review").value,
          placeId: parseInt(placeId)
        }, interestId)
        .then(refresh);
      modal.remove();
    }
    if (event.target.id === "deleteBtn") {
      confirmDelete(name.value, interestId);
    }

  }));


}