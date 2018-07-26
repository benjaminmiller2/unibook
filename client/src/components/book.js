import React from 'react';
import Moment from 'react-moment';
import { Link } from 'react-router-dom';



const Book = ({title, author, isbn, _id, description, published_year, publisher}) => (
    
    <div className="card col-3 m-3">
        <img className="card-img-top" src="https://www.tv2000.it/radioinblu/wp-content/uploads/sites/5/2018/01/libri-generiche-508354.610x431.jpg" alt="Book Image"></img>
      
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">By: {author}</p>
        <p className="card-text">ISBN: {isbn}</p>
        <p className="card-text">Pub: {published_year}</p>
        <p className="card-text">By: {publisher}</p>
        <p className="card-text">Description: {description}</p>
      </div>
    </div>
            

);


export default Book;