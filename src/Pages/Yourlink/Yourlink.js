import React, { Component, Fragment } from 'react';
import ReactFacebookLogin from 'react-facebook-login';
import { Route, BrowserRouter, Routes, Link } from 'react-router-dom';
import ReactWhatsapp from 'react-whatsapp';


 


export class Yourlink extends Component {
   

    
    render() {
        return <Fragment>
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
                <a class="navbar-brand" href="#">AnonTextMe</a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>

                <div class=" container your text-center">
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav mr-auto">
                            <li class="nav-item active">
                                <Link to="/Yourlink" class="nav-link" ><i class="fas fa-home"></i> <span class="sr-only">(current)</span></Link>
                            </li>
                            <li class="nav-item">
                                <Link to="/Notificitions" class="nav-link" href="#"><i class="fas fa-bell"></i></Link>
                            </li>
                            <li class="nav-item">
                                <Link to="/Account" class="nav-link" href="#">      <i class="fas fa-user"></i>
                                </Link>
                            </li>
                        </ul>

                    </div>
                </div>
            </nav>



            <div class="container mt-5 text-center">
                <h1>Share Your Link </h1>
                <h5> https.............</h5>

                         </div>

        </Fragment>;
    };
}

export default Yourlink;
