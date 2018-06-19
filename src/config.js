import firebase from 'firebase';

export const appName = 'react-redux-noname';
export const firebaseConfig = {
    apiKey: "AIzaSyAdMzqM1yNim-GD1J5FrVmQVZMvAUB5-zI",
    authDomain: `${appName}.firebaseapp.com`,
    databaseURL: `https://${appName}.firebaseio.com`,
    projectId: appName,
    storageBucket: `${appName}.appspot.com`,
    messagingSenderId: "965632538832"
};

firebase.initializeApp(firebaseConfig);
