import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyCXMLf3xBh7-IT6eQjmPrL2V82XDgiVnv4',
  authDomain: 'react-project-dashboard.firebaseapp.com',
  databaseURL: 'https://react-project-dashboard.firebaseio.com',
  projectId: 'react-project-dashboard',
  storageBucket: 'react-project-dashboard.appspot.com',
  messagingSenderId: '1083931586909',
  appId: '1:1083931586909:web:efb804ad2d25bd6fa7f8b4',
  measurementId: 'G-36E4YP8RHG',
};

firebase.initializeApp(firebaseConfig);
firebase.firestore().settings({ timestampsInSnapshots: true });

export default firebase;
