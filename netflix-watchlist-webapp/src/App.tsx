import React, { Component } from 'react';
import { BrowserRouter, Link, NavLink, Routes, useRoutes } from 'react-router-dom';
import { Route, Router } from 'react-router-dom';
import './App.css';
import { AppConstants } from './common/constants';
import Dashboard from './components/dashboard/dashborad';
import Login from './components/login/login';
import RegisterUser from './components/register-user/register';
import TvShow from './components/tv-show/tvshow';
import "bootstrap/dist/css/bootstrap.min.css";
import authService from './services/auth-service';

type Props = {};

class App extends Component<Props> {
  constructor(props: Props) {
    super(props);
  }

  render(): React.ReactNode {
    return (

      <div>
        <header >
          <nav className="navbar navbar-expand navbar-dark bg-dark">
            <NavLink to='/' className="navbar-brand">
              {AppConstants.AppName}
            </NavLink>
            <div className="navbar-nav mr-auto">
              <li className="nav-item">
                <NavLink to='/watched-show' className="navbar-brand">
                  Your Show's
                </NavLink>
              </li>
            </div>
            <div className="navbar-nav ml-auto">
              <li className="nav-item">
                <NavLink to='/register' className="navbar-brand">
                  Register User
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to='/login' className="navbar-brand">
                  Login
                </NavLink>
              </li>
            </div>
          </nav>
        </header>
        <main>
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/watched-show" element={<TvShow />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<RegisterUser />} />
          </Routes>
        </main>
      </div>

    );
  }
}

export default App;
