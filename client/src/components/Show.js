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


    // When delete article button is clicked, remove article from db
    handleArticleDelete = (id) => {
      axios.delete('/api/book/'+id)
          .then(console.log('it worked?'));
  }

  handleShowData = (id) =>{
    axios.get('/api/book/'+id).then(res => {
      console.log(res.data);
      console.log(res.data.title);
      
    })
  }



  render() {
    return (
      <div className="homeBody">
    
          <div className="col-8 d-flex flex-wrap justify-content-around">
            
            {this.state.books.map(book => (
              
              <Book
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