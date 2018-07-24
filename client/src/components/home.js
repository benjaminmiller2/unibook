import React, { Component } from 'react'
import navbar from './navbar';

class Home extends Component {
    constructor() {
        super()
    }


    render() {
        const imageStyle = {
            width: 400
        }
        return (
            <div className="d-block col-8 mx-auto mt-3">

                <h1 className="col-6 mx-auto">Book Buddies 2.0</h1>
                
                <div className="col-8 mx-auto">
                <img className="w-100" src="https://www.tv2000.it/radioinblu/wp-content/uploads/sites/5/2018/01/libri-generiche-508354.610x431.jpg" />
                </div>

                <div className="col-8 p-3 mx-auto">
                <p>College tuition is expensive as is don't be frustrated with the hassle of buying textbooks only to sell them back for a fraction of the price you paid.  
                Let UniBookExchange help you post your textbook on a platform that is specific to your school where chances of finding a buyer are 
                higher.  You negotiate the details of the exchange one-on-one with whomever is interested, no more third party, no more extra fees, and yes, more money back in your pocket!
                </p>
          <p>
            Post-final days never looked this easy, happy selling!
            </p>
            </div>

            </div>
        )
    }
}
export default Home