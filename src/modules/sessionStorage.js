// set session storage for logged in user
export function setSessionStorage(user) {
  sessionStorage.setItem("loggedInUserId", user.id);
  sessionStorage.setItem("loggedInUserName", user.userName);
};

// global call function for referencing current user
export function getLoggedInUser() {
  console.log(sessionStorage);
  if (sessionStorage.hasOwnProperty("loggedInUserId")) {
    let user = {
      id: sessionStorage.getItem("loggedInUserId"),
      userName: sessionStorage.getItem("loggedInUserName"),
    };
    return user;
  } else return false;
};

// remove user from session storage upon log out
export function removeSessionStorage() {
  sessionStorage.clear();
};