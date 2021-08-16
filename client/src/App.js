import React, { Component } from 'react';
import {  Route, Switch } from 'react-router-dom';
import './App.css';
import Home from './pages/Home'
import LoginPage from './pages/LoginPage';
import Profile from './pages/Profile';
import Profileadmin from './pages/Profileadmin';
import PrivateRoute from './privateRoutes/PrivateRoute';
import RegisterPage from './pages/RegisterPage'
import Ambassador from './pages/Ambassador'
function App() {

  return (
    <div className="App"  >
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/Ambassador' component={Ambassador} />
          <Route exact path="/LoginPage" component={LoginPage} />
          <Route exact path="/RegisterPage" component={RegisterPage} />
          <PrivateRoute exact path="/Profile" component={Profile}></PrivateRoute>
        <PrivateRoute  path="/Profileadmin" component={Profileadmin}></PrivateRoute> 
          </Switch>
           
    </div>
  );
}

export default App;
