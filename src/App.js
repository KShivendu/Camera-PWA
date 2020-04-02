import React, { Component } from "react";
// import logo from "./logo.png";
import "./App.css";
import ClCamera from "./components/ClCamera";
import Notifier from "./components/Notifier";
class App extends Component {
  constructor() {
    super();
    this.state = {
      offline: false
    };
  }
  componentDidMount() {
    window.addEventListener("online", () => {
      this.setState({ offline: false });
    });

    window.addEventListener("offline", () => {
      this.setState({ offline: true });
    });
  }

  componentDidUpdate() {
    let offlineStatus = !navigator.onLine;
    if (this.state.offline !== offlineStatus) {
      this.setState({ offline: offlineStatus });
    }
  }

  render() {
    return (
      <div className="App">
        <Notifier offline={this.state.offline} />
        {/* <h1>CloudyCam</h1> */}

        {/* <header className="App-header">
          <img src={logo} className="App-logo" alt="Cloudinary Logo" />
        </header> */}
        <ClCamera offline={this.state.offline} />
      </div>
    );
  }
}

export default App;
