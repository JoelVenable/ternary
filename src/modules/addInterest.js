import {
  interests
} from "./api/interests";
import {
  showInterestModal
} from "./show/showInterestModal";
import {
  refresh
} from "./show/card";



export function addInterest(placeId) {
  let modal = showInterestModal(placeId);
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
        })
        .then(refresh);
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