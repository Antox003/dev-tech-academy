import {initializeApp} from 'firebase/app';
import { getStorage, ref, getDownloadURL } from "firebase/storage";

const firebaseApp = initializeApp({
    apiKey: "AIzaSyB9L-TC7iscLbJj1Mte64EGPKFhtZdIW_Y",
    authDomain: "dev-tech-academy.firebaseapp.com",
    projectId: "dev-tech-academy",
    storageBucket: "dev-tech-academy.appspot.com",
    messagingSenderId: "681484711643",
    appId: "1:681484711643:web:41879861769210d209befe",
    measurementId: "G-1FVS3ZNHMH"
});

const app = initializeApp(firebaseConfig);
const storage = getStorage();
const videoRef = ref(storage, 'video_base/strumenti.mp4');

// Get the download URL
getDownloadURL(videoRef)
  .then((url) => {
    
  })
  .catch((error) => {
    // A full list of error codes is available at
    // https://firebase.google.com/docs/storage/web/handle-errors
    switch (error.code) {
      case 'storage/object-not-found':
        // File doesn't exist
        break;
      case 'storage/unauthorized':
        // User doesn't have permission to access the object
        break;
      case 'storage/canceled':
        // User canceled the upload
        break;

      // ...

      case 'storage/unknown':
        // Unknown error occurred, inspect the server response
        break;
    }
  });