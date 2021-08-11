import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Header from './res/Header';
import RealEstate from './res/RealEstate';
import Advertise from './res/Advertise';
import Profile from './res/Profile';
import PrivateRoute from './res/PrivateRoute';
import Login from './res/Login';
import Register from './res/Register';
import Error from './res/Error';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { AuthProvider } from './res/contexts/AuthContext';
import "./_content-area.scss";
import "./_grid.scss";
import "./_reset.scss";
import "./_variables.scss";


ReactDOM.render(
  <React.StrictMode>
    <AuthProvider>
    <Router>
      <Header />
      <Switch>
        <Route path="/" exact component={RealEstate} />  
        <Route path="/advertise" component={Advertise} />
        <PrivateRoute path="/profile" component={Profile} />
        {/* <Route path="/profile" component={Profile} /> */}
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
        <Route path="*" component={Error} />
      </Switch>
    </Router>
    </AuthProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
