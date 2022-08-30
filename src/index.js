import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
/* b5 import firebasecontext and firebase. Then wrap 
<App /> with <FirebaseContext.Provider value={value you want to pass}> now we can access 
it anywhere  :Signup.js*/
import {FirebaseContext} from './store/FirebaseContext'
import firebase from './firebase/config'


ReactDOM.render(
    <FirebaseContext.Provider value={{firebase}}>
        <App />
    </FirebaseContext.Provider>
, document.getElementById('root'));
