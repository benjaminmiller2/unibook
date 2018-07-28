import React, { Component } from 'react'
import { Route, Link } from 'react-router-dom'
import '../App.css';
import axios from 'axios'


class Navbar extends Component {
    constructor() {
        super()
        this.logout = this.logout.bind(this)
    }

    logout(event) {
        event.preventDefault()
        console.log('logging out')
        axios.post('/api/user/logout').then(response => {
          console.log(response.data)
          window.sessionStorage.clear();
          if (response.status === 200) {
            this.props.updateUser({
              loggedIn: false,
              username: null
            })
          }
        }).catch(error => {
            console.log('Logout error')
        })
      }

    render() {
        const loggedIn = this.props.loggedIn;
        console.log('navbar render, props: ')
        console.log(this.props);
        
        return (
            <div>

                <header className="w-100 p-3 bg-purple" id="nav-container">
                    <div className="" >
                        {loggedIn ? (
                            <section className="w-100 d-flex ">
 
                                <Link to="/" className="btn btn-link text-secondary">
                                 Home
                                </Link>
                                <Link to="/profile" className="btn btn-link text-secondary">
                                    Profile
                                </Link>
                                <Link to = "/Show" className = "btn btn-link text-secondary">
                                   Show
                                </Link>
                                <Link to = "/Create" className = "btn btn-link text-secondary">
                                    Create
                                </Link>  
                                <Link to ="/Search" className="btn btn-link text-secondary">
                                Search
                                </Link>                        
                                <Link to="/logout" className="btn btn-link text-secondary" onClick={this.logout}>
                                    Logout
                                </Link>

                                
                             

                            </section>
                        ) : (
                                <section className="navbar-section">
                                    
                                <Link to="/login" className="btn btn-link text-secondary">
                                    <span className="text-light">Login</span>
				                </Link>
                                <Link to="/signup" className="btn btn-link">
                                    <span className="text-light">Sign up</span>
				                </Link>

                                </section>
                            )}
                    </div>

                </header>
            </div>

        );

    }
}

export default Navbar