import React from "react";
import ReactDOM from "react-dom";
import AntdContainer from "./AntdContainer";
import "./app.less";
class App extends React.Component {
  render() {
    return <AntdContainer />;
  }
}
// 接收热更新输出，只有accept才能被更新
// if (module.hot) {
//   module.hot.accept();
// }
ReactDOM.render(<App />, document.getElementById("app"));
