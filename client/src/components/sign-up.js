import React, { Component } from 'react'
import axios from 'axios'
import { Redirect } from 'react-router-dom'

class Signup extends Component {
	constructor() {
		super()
		this.state = {
			username: '',
			password: '',
			email: '',
			confirmPassword: '',

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
		console.log('here *******');
		console.log('sign-up handleSubmit, username: ');
		console.log(this.state.username);
		event.preventDefault();

		//request to server to add a new username/password
		axios.post('/api/user/', {
			username: this.state.username,
			password: this.state.password,
			email: this.state.password,
			redirectTo: null

		})
			.then(response => {
				console.log(response)
				console.log('this is the response');
				console.log(response.data.errmsg);
				if (response.status === 200) {
					axios.post('/api/user/login', {
						username: this.state.username,
						password: this.state.password,
					})
					.then(response => {
						console.log('login response: ')
						console.log(response)
						if (response.status === 200) {
							
							this.setState({
								redirectTo: '/login'
							})
						}})
				} else {
					console.log('username already taken')
				}
			}).catch(error => {
				console.log('signup error: ')
				console.log(error)

			})
 }


render() {
	if (this.state.redirectTo) {
		return <Redirect to={{ pathname: this.state.redirectTo }} />
	} else {
	
		return (
			<div className="pt-2">
				<center>Sign up</center>
				<form className="col-4 mx-auto border border-1 border-primary p-3 mt-5">
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
						<div className="form-group">
                            <lable for="email">Email: </lable>
                            <input type="text" 
                            className="form-control" 
                            id="email" 
                            name="email" 
                            placeholder="email"
                            value={this.state.email}
                            onChange={this.handleChange}
                            />
                            <small id="emailHelp" className="form-text text-muted">Please enter your email address.</small>
                        </div>
                        <button type="submit" class="btn btn-primary" onClick={this.handleSubmit}>Sign Up</button>
                    </form>
			</div>

		)}
}
}

export default Signup