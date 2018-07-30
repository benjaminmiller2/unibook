import React, { Component } from 'react';
import axios from 'axios';
import { Redirect } from 'react-router-dom'
import Book from './book';


class Show extends Component {

  constructor(props) {
    super(props);
    this.state = {
      username: '',
      email:'',
      books: []
    };
  }


  componentDidMount() {
this.getBooks();
this.getUser()

  }

//methods
getBooks = (event) =>{
  axios.get('/api/book/')
  
  .then(res => {
    this.setState({ books: res.data });
    console.log(this.state.books);
  });

};
getUser =() =>{
  axios.get('/api/user').then(res =>{
    this.setState({user: res.data.username,
    email: res.data.email})
    })
}


    // When delete article button is clicked, remove article from db
    handleArticleDelete = (id) => {
      axios.delete('/api/book/'+id)
          .then(console.log('it worked?'));
  }

  handleShowData = (id) =>{

     const hidden = document.getElementById(id);
     if(hidden.classList.contains("d-none")){
       hidden.classList.remove("d-none");
       hidden.classList.add("modal")
      }else{
        hidden.classList.remove("modal");
       hidden.classList.add("d-none")
      }
    
  }

  handleSubmitMail = (title, seller, image, buyer, buyer_email) => {
    //const title = title;
  

    axios.post('/api/message/', { title, seller, buyer, buyer_email, image })
      .then((result) => {
        //console.log(this.session)
        //console.log(result)
        this.props.history.push("/profile")
      });
}

  render() {
    return (
      <div className="homeBody">
    
          <div className="col-12 d-flex flex-wrap justify-content-around">
            
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
              seller={book.seller}
              seller_email={book.seller_email}
              buyer={this.state.user}
              buyer_email={this.state.email}
              handleClick={this.handleSubmitMail}
              handleData={this.handleShowData}
                /> 
            ))}
          </div>

      </div>
    );
  }
}

export default Show;