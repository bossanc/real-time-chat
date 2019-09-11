import * as firebase from 'firebase';

const config = {
    apiKey: 'AIzaSyCjRLSMHZvuds7HDi992LunA8GoVacRq-0',
    authDomain: 'bosswrk-pg-real-time-chat.firebaseapp.com',
    databaseURL: 'https://bosswrk-pg-real-time-chat.firebaseio.com',
    projectId: 'bosswrk-pg-real-time-chat',
    storageBucket: '',
    messagingSenderId: '808388647533',
};

firebase.initializeApp(config);

export default firebase