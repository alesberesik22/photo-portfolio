import React from "react";
import { useHistory } from "react-router-dom";

import "./Home.css";

import Center from "../../tools/Center";
import introVideo from "../../../asserts/introVideo/intro.MOV";

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showClickText: false,
    };
  }
  componentDidMount() {
    setTimeout(() => {
      this.setState({ showClickText: true });
    }, 5000);
  }
  render() {
    const { history } = this.props;
    const enterStyle = {
      color: "purple",
      marginTop: "4rem",
      fontFamily: "raleway",
      textAlign: "center",
      fontWeight: 300,
      fontSize: 12,
      textTransform: "uppercase",
      letterSpacing: 2,
      position: "absolute",
      zIndex: 10,
    };

    if (!this.state.showClickText) {
      enterStyle.display = "none";
    }
    return (
      <Center
        key="image"
        onClick={() => history.push("/intro")}
        style={{
          width: "100vw",
          height: "100vh",
          background: "transparent",
          position: "absolute",
          top: 0,
          left: 0,
          cursor: "pointer",
        }}
      >
        <video
          loop
          autoPlay
          style={{
            objectFit: "cover",
            position: "fixed",
            width: "100%",
            height: "100%",
            top: 0,
            left: 0,
            zIndex: 0,
          }}
        >
          <source src={introVideo} type="video/mp4" />
        </video>
        <div>
          <h1
            style={{
              color: "#eee",
              marginBottom: 2,
              fontFamily: "raleway",
              textAlign: "center",
              fontWeight: 300,
              fontSize: 36,
              textTransform: "uppercase",
              letterSpacing: 2,
              position: "absolute",
              zIndex: 10,
            }}
          >
            Photograph
          </h1>
          <h2
            style={{
              color: "#eee",
              marginTop: 2,
              fontFamily: "raleway",
              textAlign: "center",
              fontWeight: 300,
              fontSize: 21.5,
              textTransform: "uppercase",
              letterSpacing: 2,
              position: "absolute",
              zIndex: 10,
            }}
          >
            Filip Lulek
          </h2>
          <h4 style={enterStyle}>Click to Enter</h4>
        </div>
      </Center>
    );
  }
}

export default Home;
