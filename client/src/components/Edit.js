import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { Redirect } from 'react-router-dom'

class Edit extends Component {

  constructor(props) {
    super(props);
    this.state = {
      book: {}
    };
  }

  componentDidMount() {
    axios.get('/api/book/'+this.props.match.params.id)
      .then(res => {
        this.setState({ book: res.data });
        console.log(this.state.book);
      });
  }

  onChange = (e) => {
    const state = this.state.book
    state[e.target.name] = e.target.value;
    this.setState({book:state});
  }

  onSubmit = (e) => {
    e.preventDefault();

    const { isbn, title, author, description, published_date, publisher, image, price, seller } = this.state.book;

    axios.put('/api/book/'+this.props.match.params.id, { isbn, title, author, description, published_date, publisher, image, price, seller })
      .then((result) => {
        this.setState({

          redirectTo: '/profile'
      })
  
        //this.props.history.push("/show/"+this.props.match.params.id);
      })
       // update the state to redirect to home
       
  }

  render() {
    if (this.state.redirectTo) {
      return <Redirect to={{ pathname: this.state.redirectTo }} />
  } else {
    return (
      <div class="container">
        <div class="panel panel-default">
          <div class="panel-heading">
            <h3 class="panel-title">
              EDIT BOOK
            </h3>
          </div>
          <div class="panel-body mb-5">
            <h4><Link to={`/show/${this.state.book._id}`}><span class="glyphicon glyphicon-eye-open" aria-hidden="true"></span> Book List</Link></h4>
            <form onSubmit={this.onSubmit}>

              <div class="form-group">
                <label for="title">Title:</label>
                <input type="text" class="form-control" name="title" value={this.state.book.title} onChange={this.onChange} placeholder="Title" />
              </div>
              <div class="form-group">
                <label for="author">Author:</label>
                <input type="text" class="form-control" name="author" value={this.state.book.author} onChange={this.onChange} placeholder="Author" />
              </div>
              <div class="form-group">
                <label for="description">Description:</label>
                <input type="text" class="form-control" name="description" value={this.state.book.description} onChange={this.onChange} placeholder="Description" />
              </div>
              <div class="form-group">
                <label for="published_date">Published Date:</label>
                <input type="number" class="form-control" name="published_date" value={this.state.book.published_date} onChange={this.onChange} placeholder="Published Date" />
              </div>
              <div class="form-group">
                <label for="publisher">Publisher:</label>
                <input type="text" class="form-control" name="publisher" value={this.state.book.publisher} onChange={this.onChange} placeholder="Publisher" />
              </div>          
              <div class="form-group">
                <label for="isbn">ISBN:</label>
                <input type="text" class="form-control" name="isbn" value={this.state.book.isbn} onChange={this.onChange} placeholder="ISBN" />
              </div>              
              <div class="form-group">
                <label for="published_date">Price:</label>
                <input type="number" class="form-control" name="price" value={this.state.book.price} onChange={this.onChange} placeholder="Price" />
              </div>
              <div class="form-group">
                <label for="published_date">Image URL:</label>
                <input type="number" class="form-control" name="image" value={this.state.book.image} onChange={this.onChange} placeholder="Image" />
              </div>

              <button type="submit" class="btn button-color mb-3">Submit</button>
            </form>
          </div>
        </div>
      </div>
    );
  }}
}

export default Edit;
