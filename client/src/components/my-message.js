import React from 'react';
import { Link } from 'react-router-dom';



const MyMessage = ({title, id, image, buyer, buyer_email, handleClick}) => (
    <div>
    <div class="card w-75 mr-auto ml-auto mb-2">
        <div class="card-body">
        <h5 class="card-title">Unibook Message</h5>
            <p class="card-text">Congrats! {buyer} is interested in purchasing {title}! You can email {buyer}
            at {buyer_email} to make the arrangements!</p>
            <button type="button" className="btn btn-primary" onClick={() => handleClick(id)}>Delete Message</button>
        </div>
    </div>
</div>

);


export default MyMessage;