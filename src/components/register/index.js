import React, { Component } from 'react';
import { withRouter  } from 'react-router-dom';

export default class Register extends Component {
  constructor(props) {
    super(props);

    this.isLoggedIn = this.isLoggedIn.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      redirect: false,
      userName: '',
      isLoading: false,
      error: ''
    };
  }

  onSubmit(e) {
    e.preventDefault();
    this.isLoggedIn();
    this.setState({ isLoading: true, error:'' });
  }

  onLogin = () => {
    this.props.history.push('');
  }

  isLoggedIn() {

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