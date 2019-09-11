import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Login from './components/login/';
import Register from './components/register/';
import Chatroom from './components/chatroom/';
import 'antd/dist/antd.css';
class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <React.Fragment>
        <div className='container'>
          <Switch>
            <Route exact path='/' component={Login} />
            <Route exact path='/register' component={Register} />
            <Route exact path='/chatroom' component={Chatroom} />
          </Switch>
        </div>
      </React.Fragment>
    );
  }
}

export default App;