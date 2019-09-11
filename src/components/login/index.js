import React, { Component } from 'react';
import { Redirect, withRouter  } from 'react-router-dom';
import firebase from 'firebase'

export default class Login extends Component {
  constructor(props) {
    super(props);

    this.isLoggedIn = this.isLoggedIn.bind(this);
    this.renderRedirect = this.renderRedirect.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      redirect: false,
      userName: '',
      password: '',
      isLoading: false,
      error: ''
    };
  }

  onSubmit = e => {
    e.preventDefault()

    const { email, password } = this.state
    firebase
      .signInWithEmailAndPassword(email, password)
      .then(response => {
        this.setState({
          currentUser: response.user
        })
      })
      .catch(error => {
        this.setState({
          message: error.message
        })
      })
  }

  renderRedirect = () => {
    return <Redirect to='/chatroom' />;
  };
  onRegister = () => {
    this.props.history.push('register');
  }

  isLoggedIn() {

  } 

  render() {
    return (
      <React.Fragment>
        <div className='login'>
          <h3>Login</h3>
          {!this.state.redirect ? '' : this.renderRedirect()}
          <div>
            <form onSubmit={this.onSubmit}>
              <div>
                <input
                  className='groupname'
                  placeholder='Enter Your Email'
                  type='text'
                  name='email'
                  onChange={this.onChange}
                />
              </div>
              <div>
                <input
                  className='groupname'
                  placeholder='Enter Your Password'
                  type='password'
                  name='password'
                  onChange={this.onChange}
                />
              </div>
              <button className='button modalbutton'>Login</button>
              <button  onClick={this.onRegister}>Register</button >
            </form>
            <div className='error'>{this.state.error}</div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}