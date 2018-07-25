import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Book from './book';


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


  render() {
    return (
      <div>
        
        <div>
        <h3>Here is your collection.</h3>
        </div>

        <div className="col-12 d-flex flex-wrap justify-content-around">
            
            {this.state.userBooks.map(book => (
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

export default Profile;