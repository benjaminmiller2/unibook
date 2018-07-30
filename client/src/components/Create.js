import React, { Component } from 'react';
import axios from 'axios';


class Create extends Component {

  constructor() {
    super();
    this.state = {
      isbn: '',
      title: '',
      author: '',
      description: '',
      published_year: '',
      publisher: '',
      price: '',
      image: '',
      seller: '',
      seller_email: '',
    }
  }

  componentDidMount(){
    this.getSeller()
  }

  getSeller(){
    axios.get('/api/user/').then(response => {
      console.log(response.data)
      if(response.data){
        this.setState({
          seller: response.data.username,
          seller_email: response.data.email
        })
       console.log(this.state.seller)
      }
    })
  }
  onChange = (e) => {
    const state = this.state
    state[e.target.name] = e.target.value;
    this.setState(state);
  }

  onSubmit = (e) => {
    e.preventDefault();

    const { isbn, title, author, description, published_date, publisher, seller, seller_email, image, price } = this.state;

    axios.post('/api/book', { isbn, title, author, description, published_date, publisher, seller, seller_email, image, price })
      .then((result) => {
       //this.props.history.push("/profile")
      });
  }

  render() {
    const { isbn, title, author, description, published_date, publisher, seller, price, image } = this.state;
    return (
      <div className="homeBody d-block col-8 mx-auto mt-3 mb-5">
        <div class="panel panel-default">
          <div class="panel-heading">
            <h3 class="createTitle">
              Add your book
            </h3>
          </div>
          <div class="panel-body">
          
            <form onSubmit={this.onSubmit}>

              <div class="form-group">
                <label for="title">Title:</label>
                <input type="text" class="form-control" name="title" value={title} onChange={this.onChange} placeholder="Title" />
              </div>
              <div class="form-group">
                <label for="author">Author:</label>
                <input type="text" class="form-control" name="author" value={author} onChange={this.onChange} placeholder="Author" />
              </div>
              <div class="form-group">
                <label for="description">Description:</label>
                <textArea class="form-control" name="description" onChange={this.onChange} placeholder="Description" cols="80" rows="3">{description}</textArea>
              </div>
              <div class="form-group">
                <label for="published_date">Published Date:</label>
                <input type="number" class="form-control" name="published_date" value={published_date} onChange={this.onChange} placeholder="Published Date" />
              </div>
              <div class="form-group">
                <label for="publisher">Publisher:</label>
                <input type="text" class="form-control" name="publisher" value={publisher} onChange={this.onChange} placeholder="Publisher" />
              </div>              
              <div class="form-group">
                <label for="isbn">ISBN:</label>
                <input type="text" class="form-control" name="isbn" value={isbn} onChange={this.onChange} placeholder="ISBN" />
              </div>
              <div class="form-group">
                <label for="publisher">Price:</label>
                <input type="text" class="form-control" name="price" value={price} onChange={this.onChange} placeholder="Price" />
              </div>
              <div class="form-group">
                <label for="publisher">Image URL:</label>
                <input type="text" class="form-control" name="image" value={image} onChange={this.onChange} placeholder="Image URL" />
              </div>
              <div class="form-group">
                <label for="publisher">Seller:</label>
                <input type="text" class="form-control" name="seller" value={this.state.seller} onChange={this.onChange} placeholder="Seller" />
              </div>
              <div class="form-group">
                <label for="publisher">Seller Email:</label>
                <input type="text" class="form-control" name="seller Email" value={this.state.seller_email} onChange={this.onChange} placeholder="Seller Email" />
              </div>
              <button type="submit" class="btn button-color mb-3">Submit</button>
            </form>
          </div>
        </div>

      </div>
    );
  }
}

export default Create;
