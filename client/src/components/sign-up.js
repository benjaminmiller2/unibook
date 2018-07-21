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
								redirectTo: '/'
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
			<div className="SignupForm">
				<h4>Sign up</h4>
				<form className="form-horizontal">
					<div className="form-group">
						<div className="col-1 col-ml-auto">
							<label className="form-label" htmlFor="username">Username</label>
						</div>
						<div className="col-3 col-mr-auto">
							<input className="form-input"
								type="text"
								id="username"
								name="username"
								placeholder="Username"
								value={this.state.username}
								onChange={this.handleChange}
							/>
						</div>
					</div>
					<div className="form-group">
						<div className="col-1 col-ml-auto">
							<label className="form-label" htmlFor="password">Password: </label>
						</div>
						<div className="col-3 col-mr-auto">
							<input className="form-input"
								placeholder="password"
								type="password"
								name="password"
								value={this.state.password}
								onChange={this.handleChange}
							/>
						</div>
					</div>
					<div className="form-group">
								<div className="col-1 col-ml-auto">
									<label className="form-label" htmlFor="email">Email: </label>
								</div>
								<div className="col-3 col-mr-auto">
									<input className="form-input"
										placeholder="email"
										type="email"
										name="email"
										value={this.state.email}
										onChange={this.handleChange}
									/>
								</div>
							</div>
					<div className="form-group ">
						<div className="col-7"></div>
						<button
							className="btn btn-primary col-1 col-mr-auto"
							onClick={this.handleSubmit}
							type="submit"
						>Sign up</button>
					</div>
				</form>
			</div>

		)}
}
}

export default Signup