import React, { Component } from 'react';
import { Redirect, withRouter  } from 'react-router-dom';
import firebase from './../../firebase'
export default class Login extends Component {
  constructor(props) {
    super(props);

    this.isLoggedIn = this.isLoggedIn.bind(this);
    this.renderRedirect = this.renderRedirect.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      redirect: false,
      currentUser: '',
      password: '',
      isLoading: false,
      error: ''
    };
    firebase.auth().onAuthStateChanged((user) => {
      if(user){
        this.setState({
          redirect: true
        })
      }
    })
  }

  onSubmit = e => {
    e.preventDefault()
    const { email, password } = this.state
    console.log(email,password)
    firebase.auth().signInWithEmailAndPassword(email, password)
      .then(response => {
        this.setState({
          currentUser: response.user
        })
        this.props.history.push('chatroom');
      })
      .catch(error => {
        this.setState({
          message: error.message
        })
      })
  }

  renderRedirect = () => {
    return <Redirect to='/chatroom' />;
  }
  onRegister = () => {
    this.props.history.push('register');
  }

  isLoggedIn() {

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