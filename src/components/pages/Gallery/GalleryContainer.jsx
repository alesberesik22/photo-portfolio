import React from 'react'
import Gallery from 'react-photo-gallery'
import {useHistory} from "react-router-dom"

import Header from '../../Header/Header'
import { photos } from './Photos'

function GalleryContainer() {
  let history = useHistory();

  const handleClick = (event,index) => {
    console.log(index.index);
  }
  return (
      <div>
          <Header />
      <Gallery photos={photos} direction={"column"} onClick={handleClick}/>
    </div>
  )
}

export default GalleryContainer 