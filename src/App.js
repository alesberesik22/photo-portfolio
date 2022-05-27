import React, { Component } from 'react';
import './App.css';
import { BrowserRouter, Route, Switch, useLocation } from 'react-router-dom';
import {TransitionGroup } from 'react-transition-group';

import AnimatedRoutes from './components/AnimatedRoutes';

function App() {
  return (
    <>
    <TransitionGroup>
      <BrowserRouter>
      <AnimatedRoutes/>
      </BrowserRouter>
    </TransitionGroup>
    </>
  );
}

export default App;
