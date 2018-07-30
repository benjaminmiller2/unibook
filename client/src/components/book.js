import React from 'react';
import Moment from 'react-moment';




const Book = ({key, title, author, isbn, id, description, published_date, publisher, image, price, handleClick, handleData, seller, buyer, buyer_email}) =>(
  

<div className="card col-3 m-3" type="button" onClick={() => handleData(id)}>
    
      <img className="card-img-top" src={image} alt="Book Image"></img>

                
   <div class="d-none" id={id}>
    <div class="card card-body w-50 mr-auto ml-auto text-center"> 
      <h3 className="text-cards">~{title}~</h3>
      <br></br>
        <h5 className="text-cards">Price: <span className="card-text">${price}</span></h5> 
        <h5 className="text-cards">Description: {description}</h5>
        <br></br>  
        <h5 className="text-cards">Author: {author}</h5>
        <h5 className="text-cards">Publisher: {publisher}</h5>
        <h5 className="text-cards">Pub Date: <Moment format="MMMM Do YYYY, h:mm:ss a">{published_date}</Moment></h5>
        <h5 className="text-cards">ISBN: {isbn}</h5>
          <br></br>
          <h5 className="text-cards">Seller: {seller}</h5>
          <button type="button" className="btn button-color" onClick={() => handleClick(title, seller, image, buyer, buyer_email)}>Contact Seller</button>
    </div>


  </div> 


</div>

);







export default Book;
