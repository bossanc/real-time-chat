import React, { Component } from 'react';
import { Redirect, withRouter  } from 'react-router-dom';
import firebase from './../../firebase'
import InputBar from './../inputbar/'
import Message from './../message/'
import moment from 'moment';
class App extends Component {
  state = { listMsg: [] }
  constructor(props) {
    super(props)
    var that  = this;
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        firebase.database().ref('message/').on('value', function(snapshot) {
          if(snapshot.val() != null) { 
             that.setState({
              listMsg:snapshot.val()
             })
           }
        });
      } else {
        this.props.history.push('');
      }
    });
  }

  onClickButtonHandlerData = (msg) => {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        const listMsgData = this.state.listMsg.concat({
          key: Math.random().toString().replace('.',''),
          date: moment().add().format(),
          message: msg,
          user: user.email,
          uid: user.uid,
         })
         console.log(listMsgData)
        firebase.database().ref('message/').set(listMsgData);
      } else {

      }
    })
  }

  render() {
    const listMsg = this.state.listMsg.map( msg => {
      return <p>{msg.message}</p>
    })
    return (
      <div className='container'>
        <Message
            listMsg = {this.state.listMsg} />
        <InputBar
            onClickButtonHandler = {this.onClickButtonHandlerData}
        />
      </div>
    );
  }
}

export default App;
