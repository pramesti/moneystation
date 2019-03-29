import React, { Component } from 'react';
import './App.css';
import Home from './Components/Home/index.js';
import {BrowserRouter} from 'react-router-dom'
import Login from './Components/Home/login'
import Register from './Components/Home/register'


class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Home />
         {/* <InputAdornments /> */}
         {/* <Login /> */}
        {/* <Register/> */}
      </BrowserRouter>
    );
  }
}

export default App;
