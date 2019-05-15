import "./style.css";
import "./modules/header";


import {
  getLoggedInUser
} from "./modules/sessionStorage";
import {
  showLogin,
  showLogout
} from "./modules/header";

if (!getLoggedInUser()) {
  showLogin();
} else {
  showLogout();
}