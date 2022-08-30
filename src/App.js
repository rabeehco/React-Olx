import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route} from 'react-router-dom'

/**
 * ?  =====Import Components=====
 */
import Home from './Pages/Home';
import Signup from './Pages/Signup'

function App() { 
    return (
        <div>
            <Router>
                <Route exact path='/'>
                    <Home/>
                </Route>
                <Route path='/signup'>
                    <Signup/>
                </Route>
            </Router>

        </div>
    );
}

export default App;
/* Pause at 34:00 */