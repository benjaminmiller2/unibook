import React from 'react';




const Book = ({key, title, author, isbn, id, description, published_date, publisher, image, price, handleClick, handleData, seller, buyer, buyer_email}) =>(
  

<div className="card col-3 m-3" type="button" onClick={() => handleData(id)}>
    
      <img className="card-img-top" src={image} alt="Book Image"></img>

                
   <div class="d-none card-body" id={id}>
    <div class="card card-body"> 
      <h5 className="">~{title}~</h5>
        <p className="card-text">Price: {price}</p> 
          <p className="card-text">Author: {author}</p>
          <p className="card-text">Publisher: {publisher}</p>
          <p className="card-text">Pub Date: {published_date}</p>
          <p className="card-text">ISBN: {isbn}</p>
          <p className="card-text">Description: {description}</p>
          <p className="card-text">Seller: {seller}</p>
          <button type="button" className="btn btn-primary" onClick={() => handleClick(title, seller, image, buyer, buyer_email)}>Contact Seller</button>
    </div>


  </div> 


</div>

);







export default Book;
