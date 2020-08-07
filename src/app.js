import React from "react";
import ReactDOM from 'react-dom';
import RooterContainer from './RooterContainer'
class App extends React.Component {
  render() {
    return (
      <RooterContainer />
    );
  }
}

ReactDOM.render(<App />, document.getElementById("app"));