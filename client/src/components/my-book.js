import React from 'react';




const MyBook = ({title, author, isbn, id, description, published_date, publisher, image, price, handleClick, handleChange }) => (
    
<div className="card col-5 m-3">
        
        <img className="card-img-top" src={image} alt="Book Image"></img>
        <div className="card-body">
          <h5 className="card-title">Title: {title}</h5>
          <p className="card-text">Price: {price}</p>          
          <p className="card-text">Written by: {author}</p>
          <p className="card-text">By: {publisher}</p>
          <p className="card-text">Pub: {published_date}</p>
          <p className="card-text">ISBN: {isbn}</p>
          <p className="card-text">Description: {description}</p>
  
          <button type="button" className="btn btn-primary" onClick={() => handleClick(id)}>Delete Book</button>

        </div>

 

</div>
            

);


export default MyBook;