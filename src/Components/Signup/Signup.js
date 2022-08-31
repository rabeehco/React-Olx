/* b6 import use context */
import React, { useState, useContext } from 'react';
/*a1 It's for redirecting to another page */
import { useHistory } from 'react-router-dom';
import Logo from '../../olx-logo.png';
import { FirebaseContext } from '../../store/Context';
import './Signup.css';

export default function Signup() {
  /* a2 we declare a variable */
  const history = useHistory()
  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [password, setPassword] = useState('')
  /* b7 destructuring firebase content */
  const {firebase} = useContext(FirebaseContext)

  const handleSubmit = (e) => {
    e.preventDefault()
    firebase.auth().createUserWithEmailAndPassword(email, password).then((result) => {
      result.user.updateProfile({displayName:username}).then(() => {
        firebase.firestore().collection('users').add({
          id:result.user.uid,
          username: username,
          phone: phone          
        }).then(() => {
          /*a3 this is where we redirect */
          history.push('/login')
        })
          
      })
    })
  }
  return (
    <div>
      <div className="signupParentDiv">
        <img width="150px" height="150px" src={Logo} alt='olx-logo'></img>
        <form onSubmit={handleSubmit}>
          <label className='label' htmlFor="fname">Username</label>
          <br />
          <input
            className="input"
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            id="fname"
            name="name"
            // defaultValue="John"
          />
          <br />
          <label htmlFor="fname">Email</label>
          <br />
          <input
            className="input"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            id="fname"
            name="email"
            // defaultValue="John@m.com"
          />
          <br />
          <label htmlFor="lname">Phone</label>
          <br />
          <input
            className="input"
            type="number"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            id="lname"
            name="phone"
            // defaultValue="34343434"
          />
          <br />
          <label htmlFor="lname">Password</label>
          <br />
          <input
            className="input"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            id="lname"
            name="password"
            // defaultValue="asdfsdfd"
          />
          <br />
          <br />
          <button>Signup</button>
        </form>
        <a className='login-btn'>Login</a>
      </div>
    </div>
  );
}
