// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  url_api: 'http://esiea-spotymike.eu-4.evennode.com/v1',
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore/lite";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA3PXCxVBMeWeko2KPANI3wDIkajGiYfwE",
  authDomain: "spotymike-21010.firebaseapp.com",
  projectId: "spotymike-21010",
  storageBucket: "spotymike-21010.appspot.com",
  messagingSenderId: "630085102412",
  appId: "1:630085102412:web:f61280226ae8f13528fde9"
};
 
// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);