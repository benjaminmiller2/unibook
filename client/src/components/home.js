import React, { Component } from 'react'
import Navbar from './navbar';

class Home extends Component {
    constructor() {
        super()
    }


    render() {
        const imageStyle = {
            width: 400
        }
        return (
            
            <div clasName="jumbotron jumbotron-fluid">
            <div className="container">
                <h1 className="display-1">UniBooks</h1>
               
                
            </div>
            <p class="lead">College tuition is expensive as is don't be frustrated with the hassle of buying textbooks         only to sell them back for a fraction of the price you paid.  
                Let UniBookExchange help you post your textbook on a platform that is specific to your school where chances of finding a buyer are 
                higher.  You negotiate the details of the exchange one-on-one with whomever is interested, no more third party, no more extra fees, and yes, more money back in your pocket!

                <p>
                Post-final days never looked this easy, happy selling!
                </p>
                </p>
               
            </div>
            
           
      
        
             
                
        
        )
    }
}
export default Home