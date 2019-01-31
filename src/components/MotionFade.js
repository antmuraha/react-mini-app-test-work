import React from "react";
import { Motion, spring } from "react-motion";

export const MotionContext = React.createContext("page");

const hidden = {
  width: "0px",
  height: "0px",
  borderWidth: 0,
  opacity: 0
};

class MotionFade extends React.Component {
  constructor(props) {
    super(props);
    this.myRef = React.createRef();
    this.startX = 0.5;
    this.endX = 1;
    this.trigger = false;
    this.state = { run: true };
    this.startMotion = this.startMotion.bind(this);
  }
  setStyle(value) {
    if (this.myRef.current) {
      this.myRef.current.parentNode.style.opacity = value;
      if (this.state.run) {
        if (value === this.endX && this.trigger) {
          this.setState({ run: false });
        }
      } else {
        if (value === this.startX) {
          this.trigger = false;
          this.setState({ run: true });
        }
      }
    }
  }
  startMotion() {
    this.trigger = true;
    this.setState({ run: false });
  }
  render() {
    return (
      <Motion
        defaultStyle={{ x: 0 }}
        style={{ x: spring(this.state.run ? this.endX : this.startX) }}
      >
        {value => {
          this.setStyle(value.x);
          return (
            <React.Fragment>
              <div ref={this.myRef} style={hidden} onClick={this.startMotion}>
                111
              </div>
              <MotionContext.Provider value={{ startMotion: this.startMotion }}>
                {this.props.children}
              </MotionContext.Provider>
            </React.Fragment>
          );
        }}
      </Motion>
    );
  }
}

export default MotionFade;
