import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Book from './book';


class Show extends Component {

  constructor(props) {
    super(props);
    this.state = {
      books: []
    };
  }

  componentDidMount() {
this.getBooks()
  }

  delete(id){
    console.log(id);
    axios.delete('/api/book/'+id)
      .then((result) => {
        this.props.history.push("/")
      });
  }

//methods
getBooks = () =>{
  axios.get('/api/book/')
  .then(res => {
    this.setState({ books: res.data });
    console.log(this.state.books);
  });

};


  render() {
    return (
      <div>
    

          <div className="col-12 d-flex flex-wrap justify-content-around">
            
            {this.state.books.map(book => (
              <Book
              title={book.title}
              isbn={book.isbn}
              author={book.author}
              description={book.description}
              published_year={book.published_year}
              publisher={book.publisher}
              id={book._id}
                />
            ))}
            
          </div>
     

      </div>
    );
  }
}

export default Show;