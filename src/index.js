import React from "react";
import ReactDOM from "react-dom";

import { parabola } from "./parabola";
import "./styles.css";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isVisible: false,
      count: 0
    };
  }

  onAnimate = () => {
    return new Promise(resolve => {
      const config = {
        ballWrapper: this.$wrapper,
        origin: this.$origin,
        target: this.$target,
        time: 600,
        a: 0.02,
        callback: this.updateLocation,
        finish: animationDone.bind(this),
        offset: 8
      };
      parabola(config);

      function animationDone() {
        this.setState({
          isVisible: false
        });
        resolve();
      }
    });
  };

  updateLocation = (x, y) => {
    this.setState({
      x,
      y,
      isVisible: true
    });
  };

  onAdd = () => {
    this.onAnimate().then(() => {
      this.setState({ count: this.state.count + 1 });
    });
  };

  render() {
    const animateStyle = {
      transform: `translate(${this.state.x}px, ${this.state.y}px)`,
      opacity: this.state.isVisible ? 1 : 0
    };

    return (
      <div
        className="App"
        ref={dom => {
          this.$wrapper = dom;
        }}
      >
        <div
          className="origin"
          ref={dom => {
            this.$origin = dom;
          }}
          onClick={this.onAdd}
        >
          +
        </div>
        <div
          className="target"
          ref={dom => {
            this.$target = dom;
          }}
        >
          {this.state.count}
        </div>
        <div className="ball" style={animateStyle} />
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
