import React from 'react';



const MyMessage = ({title, id, key, image, buyer, buyer_email, handleClick, handleClickOne}) => (
    <div>
    <div class="card w-75 mr-auto ml-auto mb-2">
        <div className="card-body ">
        <h5 className="text-cards">Unibook Message</h5>
            <p className="card-text">Congrats! <span className="text-cards-color">{buyer}</span> is interested in purchasing <span className="text-cards-color">{title}</span>!</p> 
            <p>You can email <span className="text-cards-color">{buyer}</span> at <span className="text-cards-color">{buyer_email}</span> to make the arrangements!</p>
            <button type="button" className="btn button-color" onClick={() => handleClick(id)}>Delete Message</button>
            
        </div>
    </div>
</div>

);


export default MyMessage;