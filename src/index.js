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
        console.log("https://firebasestorage.googleapis.com/v0/b/dev-tech-academy.appspot.com/o/video_base%2Fstrumenti.mp4?alt=media&token=a0e8963e-c598-484c-960a-6933008ae75f", url);

        if(url != ""){
            vid.setAttribute("src", url);
            vid.style.display="block";
        }
    });