import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import 'firebase/storage';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyD1vAfze0pxZzd_t8ZMBpx4KkaMEgPIX7Q',
  authDomain: 'dojo-management-a6235.firebaseapp.com',
  projectId: 'dojo-management-a6235',
  storageBucket: 'dojo-management-a6235.appspot.com',
  messagingSenderId: '266617889247',
  appId: '1:266617889247:web:5afeb44df884b8b851646a',
};

// init firebase
firebase.initializeApp(firebaseConfig);

// init services
const projectFirestore = firebase.firestore();
const projectAuth = firebase.auth();
const projectStorage = firebase.storage();

// timestamp
const timestamp = firebase.firestore.Timestamp;

export { projectFirestore, projectAuth, projectStorage, timestamp };
