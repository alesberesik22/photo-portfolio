import React, { Component } from "react";
import Header from "../../Header/Header";
import ImageSlider from "../../Slider/ImageSlider";
import { SliderData } from "../../Slider/SliderData";
import { actions } from "../Gallery/Actions";
import { withRouter } from "react-router";

export default class Overview extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: null,
    };
  }
  componentDidMount() {
    this.setState({
      id: this.props.match.params,
    });
  }
  render() {
    {
      this.state.id &&
        console.log(actions[parseInt(this.state.id.id.slice(0, -1))]);
    }
    return (
      <div>
        <Header />
        {this.state.id && (
          <ImageSlider
            slides={actions[parseInt(this.state.id.id.slice(0, -1))]}
          />
        )}
      </div>
    );
  }
}
