import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from '../src/App';
import { BrowserRouter as Router, Route } from 'react-router-dom';

//style
//import 'spectre.css/dist/spectre.min.css';
//import 'spectre.css/dist/spectre-icons.css';
import './index.css';
import Edit from './components/Edit';
import Sell from './components/Sell';
import Show from './components/Show';

import loginform from './components/login-form';
import signup from './components/sign-up';
import search from './components/Search';
import { WSAEWOULDBLOCK } from 'constants';

ReactDOM.render(
	<Router>
      <div>
        <Route exact path='/' component={App} />
        <Route path='/edit/:id' component={Edit} />
        <Route path='/Sell' component={Sell} />
        <Route path='/show/:id' component={Show} />
		    <Route path='/signup' component = {signup}/>
        <Route path= '/login' component = {loginform}/>
        <Route path ='/search' component={search}/>
      </div>
  </Router>,
	document.getElementById('root')
)