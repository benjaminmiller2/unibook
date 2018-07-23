import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Navbar from './navbar';
import LoginForm from './login-form';

class Show extends Component {

  constructor(props) {
    super(props);
    this.state = {
      book: {},
    };
  }

  componentDidMount() {
    axios.get('/api/book/'+this.props.match.params.id)
      .then(res => {
        this.setState({ book: res.data });
        console.log(this.state.book);
      });
  }

  delete(id){
    console.log(id);
    axios.delete('/api/book/'+id)
      .then((result) => {
        this.props.history.push("/")
      });
  }
 

  render() {
 
  
    return (
      
      
      <div class="container">
     
     <Navbar loggedIn="true"/>
   

        <div class="panel panel-default">
          <div class="panel-heading">
          
            <h3 class="panel-title">
              {this.state.book.title}
            </h3>
          </div>
          <div class="panel-body">
            
            <dl>
              <dt>ISBN:</dt>
              <dd>{this.state.book.isbn}</dd>
              <dt>Author:</dt>
              <dd>{this.state.book.author}</dd>
              <dt>Description:</dt>
              <dd>{this.state.book.description}</dd>
              <dt>Publish Date:</dt>
              <dd>{this.state.book.published_year}</dd>
              <dt>Publisher:</dt>
              <dd>{this.state.book.publisher}</dd>
            </dl>
            <Link to={`/edit/${this.state.book._id}`} class="btn btn-blue">Edit</Link>&nbsp;
            <button onClick={this.delete.bind(this, this.state.book._id)} class="btn btn-blue">Delete</button>
          </div>
        </div>
       
      </div>
      
    );
  }
}

export default Show;