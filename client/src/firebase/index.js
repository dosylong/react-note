import firebase from 'firebase/app';
import 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyAg97GK1IVAZ3vbLlEaWPe99B5cb_1L0ng',
  authDomain: 'react-todolist-8f610.firebaseapp.com',
  projectId: 'react-todolist-8f610',
  storageBucket: 'react-todolist-8f610.appspot.com',
  messagingSenderId: '943392686674',
  appId: '1:943392686674:web:96e360ac92d6851ef1158b',
  measurementId: 'G-D74JGF632G',
};

firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();

export { auth, firebase as default };
