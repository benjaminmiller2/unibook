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
import Create from './components/Create';
import Show from './components/Show';

import loginform from './components/login-form';
import signup from './components/sign-up';
import Search from './components/Search';

ReactDOM.render(
	<Router>
      <div>
        <Route exact path='/' component={App} />
        <Route path='/edit/:id' component={Edit} />
        <Route path='/create' component={Create} />
        <Route path='/show/:id' component={Show} />
		<Route path='/signup' component = {signup}/>
		<Route path= '/login' component = {loginform}/>
		<Route path ='/search' component={Search}/>
      </div>
  </Router>,
	document.getElementById('root')
)