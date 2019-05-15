import {
  setSessionStorage
} from "../sessionStorage";
import {
  users
} from "../api/users";


let header = document.createElement("div");
header.classList.add("main-header");
let root = document.querySelector("#root");

root.innerHTML = "";
root.appendChild(header);

let h2 = document.createElement("h2");
h2.textContent = "The Ternary Traveler";
header.appendChild(h2);
h2.classList.add("main-header__heading");


export function showLogin() {
  let btnContainer = showLink("Login");
  btnContainer.addEventListener("click", (event => {
    users.getUserByID(1)
      .then(setSessionStorage);
  }));
}

export function showLogout() {
  let btnContainer = showLink("Logout");
}

function showLink(linkText) {
  let btnContainer = document.createElement("div");
  btnContainer.classList.add("main-header__link-container");
  let p = document.createElement("p");
  p.textContent = linkText;
  btnContainer.appendChild(p);
  header.appendChild(btnContainer);
  return btnContainer;
}