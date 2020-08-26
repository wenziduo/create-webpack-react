import React from 'react';
import ReactDOM from 'react-dom';
import AntdContainer from '@/container/AntdContainer';
import './app.less';
class App extends React.Component {
  render() {
    return <AntdContainer />;
  }
}
ReactDOM.render(<App />, document.getElementById('app'));
