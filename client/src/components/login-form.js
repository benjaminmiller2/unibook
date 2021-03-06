import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import axios from 'axios'

class LoginForm extends Component {
    constructor() {
        super()
        this.state = {
            username: '',
            password: '',
            redirectTo: null
        }
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleChange = this.handleChange.bind(this)
  
    }

    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit(event) {
        event.preventDefault()
        console.log('handleSubmit')

        axios
            .post('/api/user/login', {
                username: this.state.username,
                password: this.state.password,
            })
            .then(response => {
                window.sessionStorage.setItem("currentUser", this.state.username)
                window.sessionStorage.setItem("loggedIn", true)
                console.log('login response: ')
                console.log(response)
                if (response.status === 200) {
                    // update App.js state
                    this.props.updateUser({
                        loggedIn: window.sessionStorage.loggedIn,
                        username: window.sessionStorage.currentUser,
                    })
                    
                    // update the state to redirect to home
                    this.setState({
                        redirectTo: '/'
                    })
                }
            }).catch(error => {
                console.log('login error: ')
                console.log(error);
                
            })
    }

    render() {
        if (this.state.redirectTo) {
            return <Redirect to={{ pathname: this.state.redirectTo }} />
        } else {
            return (
                <div className="pt-2">
                    <form className="col-4 mx-auto border border-color p-3 mt-5 mb-5">
                        <div className="form-group">
                            <lable for="username">Username: </lable>
                            <input type="text" 
                            className="form-control" 
                            id="username" 
                            name="username" 
                            placeholder="username"
                            value={this.state.username}
                            onChange={this.handleChange}
                            />
                            <small id="usernameHelp" className="form-text text-muted">Please enter your Username.</small>
                        </div>
                        <div className="form-group">
                            <lable for="password">Password: </lable>
                            <input type="text" 
                            className="form-control" 
                            id="password" 
                            name="password" 
                            placeholder="password"
                            value={this.state.password}
                            onChange={this.handleChange}
                            />
                            <small id="passwordHelp" className="form-text text-muted">Please enter your password.</small>
                        </div>
                        <button type="submit" class="btn button-color" onClick={this.handleSubmit}>Login</button>
                    </form>






                    
                </div>
            )
        }
    }
}

export default LoginForm