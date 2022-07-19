import React from 'react'
import Gallery from 'react-photo-gallery'
import {useHistory} from "react-router-dom"

import Header from '../../Header/Header'
import { photos } from './Photos'
import {actions} from './Actions'
import ImageSlider from '../../Slider/ImageSlider'
import Overview from '../Overview/Overview'

function GalleryContainer() {
  let history = useHistory();

  const handleClick = (event,index) => {
    history.push(`/overview/${index.index}}`);
  }
  return (
      <div>
          <Header />
      <Gallery photos={photos} direction={"column"} onClick={handleClick}/>
    </div>
  )
}

export default GalleryContainer 