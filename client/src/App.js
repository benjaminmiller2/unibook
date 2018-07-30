import React, { Component } from 'react';
import axios from 'axios';
//import ReactDOM from 'react-dom';
//import { Link } from 'react-router-dom';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom';
// components
import Signup from './components/sign-up';
import LoginForm from './components/login-form';
import Navbar from './components/navbar';
import Home from './components/home';
import Create from './components/Create';
import Show from './components/Show';
import Search from './components/Search';
import Profile from './components/profile';
import Edit from './components/Edit';
import Messages from './components/messages';



class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      loggedIn: false,
      username: null,
      books: []
    };

    this.getUser = this.getUser.bind(this)
    this.componentDidMount = this.componentDidMount.bind(this)
    this.updateUser = this.updateUser.bind(this)
  }

  componentDidMount() {
    this.getUser();
     axios.get('/api/book')
      .then(res => {
        this.setState({ books: res.data });
        console.log(this.state.books);
      });
  }

  updateUser (userObject) {
    console.log(userObject);
    this.setState(userObject)
  }

  getUser() {
    axios.get('/api/user/').then(response => {
      console.log('Get user response: ')
      console.log(response.data)
      if (response.data.user) {
        console.log('Get User: There is a user saved in the server session: ')

        this.setState({
          loggedIn: window.sessionStorage.loggedIn,
          username: window.sessionStorage.currentUser,
        })
      } else {
        console.log('Get user: no user');
        this.setState({
          loggedIn: false,
          username: null,

        })
      }
    })
  }

  render() {
    return (
      <Router>
      <div className="">
        <div>
        <Navbar updateUser={this.updateUser} loggedIn={this.state.loggedIn} />
        </div>

        <div className="d-flex justify-content-left align-middle">
        {/* greet user if logged in: */}
        {this.state.loggedIn &&
          <h5 className="pt-2"> Hello {this.state.username}! </h5>
        }
        </div>

        <div className="container-fluid">
        {/* Routes to different components */}
   
        <Route
          exact path="/"
          component={Home} />
        <Route
          path="/login"
          render={() =>
            <LoginForm
              updateUser={this.updateUser}
            />}
        />
        <Route
          path="/signup"
          render={() =>
          
            <Signup/>}
        />
        <Route
          exact path = "/Create"
          component = {Create} 
        />
         <Route
          exact path = "/Edit/:id"
          component = {Edit} 
        />
        <Route 
          exact path = "/Show"
          component = {Show}
          />
                  <Route 
          exact path = "/Search"
          component = {Search}
          />
          </div>
          <Route
          exact path="/profile"
          component={Profile} />
                    <Route
          exact path="/messages"
          component={Messages} />

<div className="bg-1 mb-0 text-center text-white">Copyright 2018 BookBuddies</div>
      </div>
      </Router>
    );
  }
  
}

export default App;