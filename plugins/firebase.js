import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/storage'
import 'firebase/auth'

if (!firebase.apps.length) {
  const config = {
    apiKey: 'AIzaSyCpyrHkDo5nwZNp3TeMogW82FXxy4AIfZA',
    authDomain: 'ssr-webicultores.firebaseapp.com',
    databaseURL: 'https://ssr-webicultores.firebaseio.com',
    projectId: 'ssr-webicultores',
    storageBucket: 'ssr-webicultores.appspot.com',
    messagingSenderId: '125769161612'
  }
  firebase.initializeApp(config)
}

export const db = firebase.firestore()
export const auth = firebase.auth()
export const storage = firebase.storage()
