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
    axios.get('/api/user').then(response => {
      console.log(response.data.username)
      if(response.data.username){
        this.setState({
          user: response.data.username
        })
        console.log(this.state)
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
  handleShowData = (id) =>{
    // axios.get('/api/book/'+id).then(res => {
     //console.log(res.data);
       //console.log(res.data.title);
      const hidden = document.getElementById(id);
      if(hidden.classList.contains("d-none")){
        hidden.classList.remove("d-none")
       }else{
         hidden.classList.add("d-none")
       }
       
 
     //})
   }


  render() {
    return (
      <div className="homeBody d-block col-8 mx-auto mt-3">
        
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
              handleData={this.handleShowData}
                />
            ))}
            
            


          </div>

      </div>
    );
  }
}

export default Profile;