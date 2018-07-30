import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import MyMessage from './my-message';


class Messages extends Component {

  constructor(props) {
    super(props);
  
    this.state = {
        user: '',
        userMessages: []
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
        this.getUserMessages()
    )
  }

getUserMessages = () =>{
  axios.get('/api/message').then(res => {

        let array = [];
       
        for (let i=0; i<res.data.length; i++){
            
            if(res.data[i].seller === this.state.user){
                array.push(res.data[i]);
            }         
        };
        this.setState({userMessages: array})
        console.log(this.state.userMessages)
        });

};

    // When delete message button is clicked, remove article from db
    handleArticleDelete = (id) => {
      axios.delete('/api/message/'+ id)
          .then(this.getUserMessages());
  }



  render() {
    return (
      <div className="homeBody d-block col-8 mx-auto mt-3">
        
        <div className="profileHeader">
        <h3>Here are your messages.</h3>
        </div>

        <div className="profileBooks col-12 d-flex flex-wrap justify-content-around">
            
            {this.state.userMessages.map(message => (
              <MyMessage

              title={message.title}
              id={message._id}
              image={message.image}
              buyer={message.buyer}
              buyer_email={message.buyer_email}
              handleClick={this.handleArticleDelete}

                />
            ))}
            
            


          </div>

      </div>
    );
  }
}

export default Messages;