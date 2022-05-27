import React, { Component } from 'react'
import Header from '../../Header/Header'
import ImageSlider from '../../Slider/ImageSlider'
import { SliderData } from '../../Slider/SliderData'

export default class Overview extends Component {
  render() {
    return (
        <div>
            <Header />
            <ImageSlider slides={SliderData}/>
      </div>
    )
  }
}
