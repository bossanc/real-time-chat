import React, { Component } from 'react'
import firebase from './../../firebase'

class InputBar extends Component {

    state = {
        msg: ''
    }

    onTextChange = (e) => {
        this.setState({
            msg: e.target.value
        })
    }

    onClickButton = () => {
        this.props.onClickButtonHandler(this.state.msg)
        this.setState({
            msg: ''
        })
    }
    onLogout = () => {
        firebase.auth().signOut()
        .then(function() {
            this.props.history.push('');
        })
        .catch(function(error) {
            console.error(error)
        });
    }
    _handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            this.onClickButton()
        }
    }
     render() {
         return(
            <div className="panel-footer">
                <div className="input-group">
                    <input
                        onChange = { this.onTextChange }
                        value = {this.state.msg}
                        id="btn-input" 
                        type="text" 
                        className="form-control input-sm" 
                        onKeyDown={this._handleKeyDown}
                        placeholder="Type your message here..." />
                     <span className="input-group-btn">
                        <button className="btn btn-primary btn-sm" 
                            onClick={this.onClickButton}
                            id="btn-chat">
                            Send</button>
                    </span>
                </div>
                <br />
                <br />
                <br />
                <button className='btn btn-danger btn-sm' onClick={this.onLogout} >Logout</button>
            </div>
         )
     }
}
export default InputBar