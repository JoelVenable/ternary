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
  let link = showLink("Login");
}

export function showLogout() {
  let link = showLink("Logout");
}

function showLink(linkText) {
  let btnContainer = document.createElement("div");
  btnContainer.classList.add("main-header__link-container");
  let p = document.createElement("p");
  p.textContent = linkText;
  btnContainer.appendChild(p);
  header.appendChild(btnContainer);
}