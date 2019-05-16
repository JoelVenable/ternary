// This function requires _modal.scss and ionicons to be installed.


export function showModal(modalTitle, innerContent, outerModalId) {
  let rootDiv = document.querySelector("#root");
  let outerModalDiv = document.createElement("div");
  //   innerDiv = document.createElement("div"),
  //   title = document.createElement("h4"),
  //   closeIcon = document.createElement("ion-icon"),
  //   closeIconDiv = document.createElement("div");


  // // Create title structure and close icon
  // let titleContainer = document.createElement("div")
  // titleContainer.classList.add("modal-header");


  // closeIcon.setAttribute("name", "close-circle-outline");
  // closeIconDiv.appendChild(closeIcon);

  // title.textContent = modalTitle;
  // titleContainer.appendChild(title);
  // titleContainer.appendChild(closeIconDiv);

  outerModalDiv.id = outerModalId;
  // innerDiv.classList.add("modal-content");
  // innerDiv

  outerModalDiv.classList.add("modal-container");
  // outerModalDiv.appendChild(innerDiv);



  outerModalDiv.innerHTML = `
  <div class="modal-content">
    <div class="modal-inner">
        <div class="modal-header">
          <span class="modal-title">${modalTitle}</span>
          <div id="closeModalDiv" class="modal-icon-close">
            <ion-icon id="closeModal" name="close"></ion-icon>
          </div>
        </div>
        ${innerContent}
    </div>
  </div>
`;

  rootDiv.appendChild(outerModalDiv);
  return outerModalDiv;
}