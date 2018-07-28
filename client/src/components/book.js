import React from 'react';
import { Link } from 'react-router-dom';



const Book = ({title, author, isbn, id, description, published_date, publisher, image, price, handleClick, handleData, target}) =>(
  

<div className="card col-5 m-3" type="button" onClick={() => handleData(id)}>
    
      <img className="card-img-top" src={image} alt="Book Image"></img>
      <div className="card-body">
                
   <div class="d-none" id={id}>
    <div class="card card-body"> 
      <h5 className="">~{title}~</h5>
        <p className="card-text">Price: {price}</p> 
          <p className="card-text">Author: {author}</p>
          <p className="card-text">Publisher: {publisher}</p>
          <p className="card-text">Pub Date: {published_date}</p>
          <p className="card-text">ISBN: {isbn}</p>
          <p className="card-text">Description: {description}</p>
          <button type="button" className="btn btn-primary">Contact Seller</button>
    </div>
  </div> 
      </div>
      
</div>

);







export default Book;
