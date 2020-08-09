import React from "react";
import ReactDOM from "react-dom";
import AntdContainer from "./AntdContainer";
class App extends React.Component {
  render() {
    return <AntdContainer />;
  }
}

ReactDOM.render(<App />, document.getElementById("app"));
