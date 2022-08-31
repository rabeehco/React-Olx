import React,  {useState, useContext} from 'react';

import Logo from '../../olx-logo.png';
import { FirebaseContext } from '../../store/Context';
import { useHistory } from 'react-router-dom';
import './Login.css';



function Login() {

const history = useHistory()
const [email, setEmail] = useState('')
const [password, setPassword] = useState('')
const {firebase} = useContext(FirebaseContext)

  function handleSubmit(e){
    e.preventDefault()
    firebase.auth().signInWithEmailAndPassword(email, password).then((result) => {
      history.push('/')
    }).catch((error) => alert(error))
  }


  return (
    <div>
      <div className="loginParentDiv">
        <img width="200px" height="200px" src={Logo}></img>
        <form onSubmit={handleSubmit}>
          <label htmlFor="fname">Email</label>
          <br />
          <input
            className="input"
            type="email"
            id="fname"
            value={email}
            onChange={e => setEmail(e.target.value)}
            name="email"
            defaultValue="John"
          />
          <br />
          <label htmlFor="lname">Password</label>
          <br />
          <input
            className="input"
            type="password"
            id="lname"
            value={password}
            onChange={e => setPassword(e.target.value)}
            name="password"
            defaultValue="Doe"
          />
          <br />
          <br />
          <button>Login</button>
        </form>
        <a className='signup-btn'>Signup</a>
      </div>
    </div>
  );
}

export default Login;
