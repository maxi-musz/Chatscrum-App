import React from 'react';
import "./App.css";
import Home from './components/home/Home.jsx';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import SignUp from './components/sign-up/sign-up';
import SignIn from './components/sign-in/sign-in';


class App extends React.Component {

  render() {
    return (

      <BrowserRouter>
        <div className="App">
          <Routes>
              <Route path='/' exact element={<Home />} />
              <Route path='/signin' element={<SignIn />} />
              <Route path='/signup' element={<SignUp />} />
          </Routes>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;































