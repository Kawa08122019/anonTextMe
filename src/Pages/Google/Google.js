import React, { Component } from 'react';
import GoogleLogin from 'react-google-login';
import reactDom from 'react-dom';



const responseGoogle = (response) => {
    console.log(response);
  }


export class Google extends Component {
    render() {
        return <div className='text-center '>


            <GoogleLogin
                clientId="498434400503-hahhmev24jsfa696mlbgl8suirskq91q.apps.googleusercontent.com"
                buttonText="Login with Google"
                onSuccess={responseGoogle}
                onFailure={responseGoogle}
                cookiePolicy={'single_host_origin'}
                className='butt '
            />
        </div>
    }
}

export default Google;
