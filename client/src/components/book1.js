import React from 'react';



const Book1 = ({title, author, isbn, id, description, published_date, publisher, image, price, handleClick, handleData, target}) =>(
  

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


        <button type="button" className="btn btn-primary" data-toggle="collapse" data-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample" onClick={() => handleData(id)}>Contact Seller</button>
      
      </div>
      



</div>
   

);



export default Book1;