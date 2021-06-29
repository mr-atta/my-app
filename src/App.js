import React from "react";
import "./App.css";

import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";
import SelectedBeast from "./components/SelectedBeast";
import ArrayPh from "./components/photoArray";

// class App
class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      showmodle: false,
      elObj: {},
    };
  }
  // //////////////////////
  handleClose = () => {
    this.setState({
      showmodle: false,
      // elObj: {},
    });
  };

  dataOfModle = (title) => {
    const foundData = ArrayPh.find((element) => {
      if (element.title === title) {
        return element;
      }
    });
    this.setState({
      showmodle: true,
      elObj: foundData,
    });
  };

  render() {
    return (
      <>
        <Header />
        <Main
          passFunhandleClose={this.handleClose}
          passFundataOfModlee={this.dataOfModle}
        />
        <SelectedBeast
          show={this.state.showmodle}
          passFunhandleClose={this.handleClose}
          passFundataOfModle={this.state.elObj}
        />
        <Footer />
      </>
    );
  }
}

export default App;
