import firebase from 'firebase/app'

const firebaseConfig = {
    apiKey: "AIzaSyCL3b4l_kbA5OHRl3DxVJCERAnGZzCVx-A",
    authDomain: "florerias-1e5bb.firebaseapp.com",
    projectId: "florerias-1e5bb",
    storageBucket: "florerias-1e5bb.appspot.com",
    messagingSenderId: "838635501948",
    appId: "1:838635501948:web:abeeee25d36c668f9f4cf9"
}

export const firebaseApp = firebase.initializeApp(firebaseConfig)