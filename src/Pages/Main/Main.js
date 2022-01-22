import React, { Component, Fragment } from 'react';
import Navbar from '../Navbar/Navbar';
import Google from '../Google/Google';
import Login from '../Login/Login';
import Signup from '../Signup';
import { Route,  BrowserRouter, Routes, Link } from 'react-router-dom';
export class Main extends Component {
  render() {
    return <div>
        <Navbar/>
        <br/>
        <br/>

        <br/>

        <br/>

        <br/>
        <div class="main">
        <Google/>
        
        <Link to="/Login" type="button" class="btn btn-primary btn-lg text-center butt">Sign in </Link>
        <br/>
        <Link to="/Signup" type="button" class="btn btn-primary btn-lg text-center butt">Create account  </Link>

        </div>

         
     
       

    </div>
  }
}

export default Main;
