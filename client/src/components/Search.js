import React, { Component } from "react";
import axios from 'axios';
import API from "../utils/API";

class Search extends Component {
constructor() {
  super();
  this.state = {
    isbn: '',
    title: '',
    author: '',
    published_year: '',
    publisher: '',
  };
}

componentDidMount() {
  this.getBook()
}
  getBook(){
    axios.get('api/user/book').then(response => {
      this.setState({ 
        isbn: response.data.user.isbn,
        title: response.data.user.title,
        author: response.data.user.author,
        publisher: response.data.user.publisher,
       })
      console.log(this.state.book)
    });
};

render() {
  const { isbn, title, author, published_date, publisher, } = this.state;
  return (
    <div className="homeBody d-block col-8 mx-auto mt-3 mb-5">
      <div class="panel panel-default">
        <div class="panel-heading">
          <h3 class="createTitle">
            <center>Search through your collection</center>
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
              <label for="publisher">Publisher:</label>
              <input type="text" class="form-control" name="publisher" value={publisher} onChange={this.onChange} placeholder="Publisher" />
            </div><div class="form-group">
              <label for="published_date">Published Date:</label>
              <input type="number" class="form-control" name="published_date" value={published_date} onChange={this.onChange} placeholder="Published Date" />
            </div>
            <div class="form-group">
              <label for="isbn">ISBN:</label>
              <input type="text" class="form-control" name="isbn" value={isbn} onChange={this.onChange} placeholder="ISBN" />
            </div>
            <button type="submit" class="btn button-color mb-3" onSubmit={this.onSubmit}>Search</button>
          </form>
        </div>
      </div>

    </div>
  );
}
}

export default Search;
