import React, { Component } from 'react';
import axios from 'axios';
import { Redirect } from 'react-router-dom'
import Book from './book';


class Show extends Component {

  constructor(props) {
    super(props);
    this.state = {
      books: []
    };
  }


  componentDidMount() {
this.getBooks();

  }

//methods
getBooks = (event) =>{
  axios.get('/api/book/')
  
  .then(res => {
    this.setState({ books: res.data });
    console.log(this.state.books);
  });

};


    // When delete article button is clicked, remove article from db
    handleArticleDelete = (id) => {
      axios.delete('/api/book/'+id)
          .then(console.log('it worked?'));
  }

  handleShowData = (id) =>{

     const hidden = document.getElementById(id);
     if(hidden.classList.contains("d-none")){
       hidden.classList.remove("d-none")
      }else{
        hidden.classList.add("d-none")
      }
    
  }

  render() {
    return (
      <div className="homeBody">
    
          <div className="col-8 d-flex flex-wrap justify-content-around">
            
            {this.state.books.map(book => (
              
              <Book
              key={book._id}
              title={book.title}
              isbn={book.isbn}
              author={book.author}
              description={book.description}
              published_date={book.published_date}
              publisher={book.publisher}
              id={book._id}
              price={book.price}
              image={book.image}
              handleClick={this.handleArticleDelete}
              handleData={this.handleShowData}
                /> 
            ))}
          </div>

      </div>
    );
  }
}

export default Show;