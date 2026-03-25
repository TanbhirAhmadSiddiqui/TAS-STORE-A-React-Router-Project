// this function is create for getting item in the local storage
const getStoredApps = () => {
  // get items from local Storage
  const storedAppsString = localStorage.getItem("appsList");
  //   if condition true then convert json.parse and return. first time condition must be false
  if (storedAppsString) {
    const storeAppsList = JSON.parse(storedAppsString);
    return storeAppsList;
  }
  //   only first time else works and return an empty array
  else {
    return [];
  }
};

// This function create to add the local storage
const addToLocalStorage = (id) => {
  // getting already stored local storage items
  const storeAppsList = getStoredApps();
  //   to check item includes in the local storage or not. if here then show alert
  if (storeAppsList.includes(id)) {
    alert("Apps Already Stored");
  }
  //   if not here to local storage then convert to json.stringify and set to local storage
  else {
    storeAppsList.push(id);
    const app = JSON.stringify(storeAppsList);
    localStorage.setItem("appsList", app);
  }
};
// export functions for access any components
export { addToLocalStorage, getStoredApps };
