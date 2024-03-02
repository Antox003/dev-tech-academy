import {initializeApp} from 'firebase/app';
import {getDownloadURL, getStorage, ref} from 'firebase/storage';

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

getDownloadURL(videoRef)
    .then((url)=>{
        const vid = document.getElementById('video1');
        vid.setAttribute('src', url);
        vid.style.display="block";
    });