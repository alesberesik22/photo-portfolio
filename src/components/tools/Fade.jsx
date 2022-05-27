import React from 'react'
import { BrowserRouter, Route, Switch, useLocation } from 'react-router-dom';

import Home from './components/pages/Home/Home';
import Intro from './components/pages/Intro/Intro';

function Fade() {
    const location = useLocation();
  return (
      <Switch>
        <Route exact path="/" component = {Home}/>
        <Route exact path="/intro" component = {Intro}/>
      </Switch>
  )
}

export default Fade