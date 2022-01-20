import React, { Component } from 'react';

export class Navbar extends Component {
  render() {
    return <div>
      
  <nav class="navbar fixed-top  navbar-expand-lg navbar-light bg-light">
  <a class="navbar-brand" href="#">AnonTextMe</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav mr-auto">
      <li class="nav-item active">
        <a class="nav-link" href="#">Info <span class="sr-only">(current)</span></a>
      </li>
      
      <li class="nav-item dropdown">
        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Sprache
        </a>
        <div class="dropdown-menu" aria-labelledby="navbarDropdown">
          <a class="dropdown-item" href="#">Deutsch <img
  src="https://flagcdn.com/16x12/de.png"
  srcset="https://flagcdn.com/32x24/de.png 2x,
    https://flagcdn.com/48x36/de.png 3x"
  width="16"
  height="12"
  alt="Germany"/></a>
          <a class="dropdown-item" href="#">English  
          
          <img
  src="https://flagcdn.com/16x12/us.png"
  srcset="https://flagcdn.com/32x24/us.png 2x,
    https://flagcdn.com/48x36/us.png 3x"
  width="16"
  height="12"
  alt="United States"></img>
          </a>

          
        </div>
      </li>
      
    </ul>
    
  </div>
</nav>
  


    </div>
  }
}

export default Navbar;
