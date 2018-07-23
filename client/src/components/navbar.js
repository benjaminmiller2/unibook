import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import { render } from 'react-dom';
import '../App.css';
import axios from 'axios';



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
                <header className="navbar App-header" id="nav-container">
                    <div className="col-4" >
                        {loggedIn ? (
                        
                            <section className="navbar-section">
                    
                                
                                <Link to="/">
                                    <span className="navbar-brand"><i class="fas fa-book"></i> UniBooks</span>
                                </Link>
                                <Link to = "/Create" className = "btn btn-link text-secondary">
                                    <span className="text-secondary">Sell</span>
                                </Link>
                                <Link to = "/Show/" className = "btn btn-link text-secondary">
                                    <span className="text-secondary">Show</span>
                                </Link>
                                <Link to = "/Search" className = "btn btn-link text-secondary">
                                    <span className="text-secondary">Search</span>
                                </Link>
                                <Link to="/logout" className="btn btn-link text-secondary" onClick={this.logout}>
                                    <span className="text-secondary">Logout</span>
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
 export default Navbar;

