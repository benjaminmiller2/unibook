import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import MyBook from './my-book';


class Profile extends Component {

  constructor(props) {
    super(props);
  
    this.state = {
        user: '',
        userBooks: []
    };
  }

  componentDidMount() {
      this.getUser();
//this.getUserBooks()
  }


//methods
getUser(){
    axios.get('/api/user/').then(response => {
      //console.log(response.data)
      if(response.data.user){
        this.setState({
          user: response.data.user.username
        })
        //console.log(this.state)
      }
    }).then(
        this.getUserBooks()
    )
  }

getUserBooks = () =>{
  axios.get('/api/book').then(res => {

        let array = [];
       
        for (let i=0; i<res.data.length; i++){
            
            if(res.data[i].seller === this.state.user){
                array.push(res.data[i]);
            }         
        };
        this.setState({userBooks: array})
        console.log(this.state.userBooks)
        });

};

    // Edit information in the db
    handleBookChange = (e) => {
      axios.put('/api/book/' + e)
          .then(this.getUserBooks());
  }

    // When delete article button is clicked, remove article from db
    handleArticleDelete = (id) => {
      axios.delete('/api/book/'+id)
          .then(this.getUserBooks());
  }


  render() {
    return (
      <div>
        
        <div className="profileHeader">
        <h3>Here is your collection.</h3>
        </div>

        <div className="profileBooks col-12 d-flex flex-wrap justify-content-around">
            
            {this.state.userBooks.map(book => (
              <MyBook
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
              handleChange={this.handleBookChange}
                />
            ))}
            
            


          </div>

      </div>
    );
  }
}

export default Profile;