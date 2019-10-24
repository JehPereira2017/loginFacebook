import React, { Component } from 'react';
import './App.css';
import FacebookLogin from 'react-facebook-login';

class App extends Component {

  render() {

    const responseFacebook = (response) => {
      console.log(response);
    }

    return (
      <div className="App">
        <h1>LOGIN FACEBOOK</h1>

      <FacebookLogin
        appId="813120665809974"
        fields="name,email,picture"
        callback={responseFacebook}
      />
      <br />
      <br />
      </div>
    );
  }
}

export default App;