import React from 'react'
import { BrowserRouter, Route, Switch, useLocation } from 'react-router-dom';

import {AnimatePresence} from 'framer-motion/dist/framer-motion';
import Home from './pages/Home/Home';
import Intro from './pages/Intro/Intro';
import Overview from './pages/Overview/Overview';
import Gallery from './pages/Gallery/GalleryContainer';


function AnimatedRoutes() {
    const location = useLocation();
  return (
    <AnimatePresence>
      <Switch location={location} key={location.pathname}>
        <Route exact path="/" component = {Home}/>
        <Route exact path="/intro" component={Intro} />
        <Route exact path="/overview" component={Overview} />
        <Route exact path="/gallery" component={Gallery}/>
      </Switch>
    </AnimatePresence>
  )
}

export default AnimatedRoutes