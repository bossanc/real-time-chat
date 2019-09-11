import React, { Component } from 'react';
import { withRouter  } from 'react-router-dom';
import firebase from './../../firebase'

export default class Register extends Component {
  constructor(props) {
    super(props);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      redirect: false,
      userName: '',
      isLoading: false,
      error: ''
    };
  }

  onSubmit = e => {
    e.preventDefault()
    const { email, password } = this.state
    console.log(email,password)
    firebase.auth().createUserWithEmailAndPassword(email, password)
      .then(response => {
        const listMsgData = this.state.listMsg.concat({
          email: response.email
         })
        firebase.database().ref('users').push(listMsgData);
      })
      .catch(error => {
        this.setState({
          message: error.message
        })
      })
  }

  onLogin = () => {
    this.props.history.push('');
  }

  onChange = e => {
    const { name, value } = e.target

    this.setState({
      [name]: value
    })
  }

  render() {
    return (
      <React.Fragment>
        <div className='login'>
          <h3>Register Page</h3>
          <div>
            <form onSubmit={this.onSubmit}>
              <div>
                <input
                  className='groupname'
                  placeholder='Enter Your Email'
                  onChange={this.onChange}
                />
              </div>
              <div>
                <input
                  className='groupname'
                  placeholder='Enter Your Password'
                  onChange={this.onChange}
                />
              </div>
              <div>
                <input
                  className='groupname'
                  placeholder='Enter Your Confirm Password'
                  onChange={this.onChange}
                />
              </div>
              <button className='button modalbutton'>Register</button>
              <button  onClick={this.onLogin}>Login</button >
            </form>
            <div className='error'>{this.state.error}</div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}