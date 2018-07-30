import React from 'react';
import { Link } from 'react-router-dom';
import Moment from 'react-moment';



const MyBook = ({title, author, isbn, id, description, published_date, publisher, image, price, handleClick, handleData }) => (
    
<div className="card col-3 m-3" type="button" onClick={() => handleData(id)}>
    
    <img className="card-img-top" src={image} alt="Book Image"></img>
        
      <div class="d-none" id={id}>
        <div class="card card-body w-50 mr-auto ml-auto text-center"> 
          <h3 className="text-cards">~{title}~</h3>
          <br></br>
          <h5 className="text-cards">Price: ${price}</h5> 
          <h5 className="text-cards">Description: {description}</h5>
          <br></br>  
          <h5 className="text-cards">Author: {author}</h5>
          <h5 className="text-cards">Publisher: {publisher}</h5>
          <h5 className="text-cards">Pub Date: <Moment format="MMMM Do YYYY, h:mm:ss a">{published_date}</Moment></h5>
          <h5 className="text-cards">ISBN: {isbn}</h5>
  
          <button type="button" className="btn button-color" onClick={() => handleClick(id)}>Delete Book</button>
          <Link to={`/Edit/${id}`} class="btn button-color-one">Edit</Link>
        </div>
</div>
 

</div>
            

);


export default MyBook;