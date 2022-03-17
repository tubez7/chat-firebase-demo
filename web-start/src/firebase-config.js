import { initializeApp } from "firebase/app";


/**
 * To find your Firebase config object:
 * 
 * 1. Go to your [Project settings in the Firebase console](https://console.firebase.google.com/project/_/settings/general/)
 * 2. In the "Your apps" card, select the nickname of the app for which you need a config object.
 * 3. Select Config from the Firebase SDK snippet pane.
 * 4. Copy the config object snippet, then add it here.
 */
const config = {
  apiKey: "AIzaSyC9HlZ5l_CnJqsplmg7wtnUSXUhETskFFE",
  authDomain: "friendlychat-3e3b3.firebaseapp.com",
  projectId: "friendlychat-3e3b3",
  storageBucket: "friendlychat-3e3b3.appspot.com",
  messagingSenderId: "310573999582",
  appId: "1:310573999582:web:40f417de92091a3640294f"
};
  /* TODO: ADD YOUR FIREBASE CONFIGURATION OBJECT HERE */

  
const app = initializeApp(config);


export function getFirebaseConfig() {
  if (!config || !config.apiKey) {
    throw new Error('No Firebase configuration object provided.' + '\n' +
    'Add your web app\'s configuration object to firebase-config.js');
  } else {
    return config;
  }
}