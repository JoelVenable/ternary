import "./style.css";
import "./modules/show/header";
import "../node_modules/ionicons/dist/ionicons";

import {
  getLoggedInUser
} from "./modules/sessionStorage";
import {
  showLogin,
  showLogout
} from "./modules/show/header";
import {
  showMainContentArea
} from "./modules/show/card";

if (!getLoggedInUser()) {
  showLogin();
} else {
  showLogout();
}

showMainContentArea();