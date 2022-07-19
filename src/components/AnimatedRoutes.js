import React from 'react'
import { BrowserRouter, Route, Switch, useLocation } from 'react-router-dom';

import {AnimatePresence} from 'framer-motion/dist/framer-motion';
import Home from './pages/Home/Home';
import Intro from './pages/Intro/Intro';
import Overview from './pages/Overview/Overview';
import Gallery from './pages/Gallery/GalleryContainer';

import { SliderData } from './Slider/SliderData'
import Contact from './pages/Contact/Contact';


function AnimatedRoutes() {
    const location = useLocation();
  return (
    <AnimatePresence>
      <Switch location={location} key={location.pathname}>
        <Route exact path="/" component = {Home}/>
        <Route exact path="/intro" component={Intro} />
        <Route path="/overview/:id" component={Overview} />
        <Route exact path="/gallery" component={Gallery}/>
        <Route exact path= "/contactme" component={Contact}/>
      </Switch>
    </AnimatePresence>
  )
}

export default AnimatedRoutes