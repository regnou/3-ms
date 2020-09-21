/*

<!-- Insert these scripts at the bottom of the HTML, but before you use any Firebase services -->

<!-- Firebase App (the core Firebase SDK) is always required and must be listed first -->
<script src="/__/firebase/6.6.1/firebase-app.js"></script>

<!-- Add Firebase products that you want to use -->
<script src="/__/firebase/6.6.1/firebase-auth.js"></script>
<script src="/__/firebase/6.6.1/firebase-firestore.js"></script>
*/

// this file will run once on extension load
var config = {
  apiKey: "[insert api key]",
  authDomain: "[insert auth domain]",
  databaseURL: "[insert database url]",
  projectId: "[insert project id]",
  storageBucket: "[insert storage bucket]",
  messagingSenderId: "[insert message sender id]"
};
const app = firebase.initializeApp(config);
const appDb = app.database().ref();

// instantiate global application state object for Chrome Storage and feed in firebase data
// Chrome Storage will store our global state as a a JSON stringified value.

const applicationState = { values: [] };

appDb.on("child_added", snapshot => {
  applicationState.values.push({
    id: snapshot.key,
    value: snapshot.val()
  });
  updateState(applicationState);
});

appDb.on("child_removed", snapshot => {
  const childPosition = getChildIndex(applicationState, snapshot.key);
  if (childPosition === -1) return;
  applicationState.values.splice(childPosition, 1);
  updateState(applicationState);
});

appDb.on("child_changed", snapshot => {
  const childPosition = getChildIndex(applicationState, snapshot.key);
  if (childPosition === -1) return;
  applicationState.values[childPosition] = snapshot.val();
  updateState(applicationState);
});

// updateState is a function that writes the changes to Chrome Storage
function updateState(applicationState) {
  chrome.storage.local.set({ state: JSON.stringify(applicationState) });
}

// getChildIndex will return the matching element in the object
function getChildIndex(appState, id) {
  return appState.values.findIndex(element => element.id == id);
}

// if your Chrome Extension requires any content scripts that will manipulate data,
// add a message listener here to access appDb:

chrome.runtime.onMessage.addListener((msg, sender, response) => {
  switch (msg.type) {
    case "updateValue":
      appDb.child(msg.opts.id).set({ value: msg.opts.value });
      response("success");
      break;
    default:
      response("unknown request");
      break;
  }
});
