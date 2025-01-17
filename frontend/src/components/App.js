import React from 'react';
import { HashRouter, Route, Routes } from 'react-router-dom';
import Login from './Login';
import Register from './Register';
import Dashboard from './Dashboard';

const App = () => {
  return (
    <HashRouter>
      <Routes>
        <Route path="/login" component={<Login/>} />
        <Route path="/register" component={<Register/>} />
        <Route path="/dashboard" component={<Dashboard/>} />
        <Route path="/" exact component={<Login/>} />
      </Routes>
    </HashRouter>
  );
};

export default App;
