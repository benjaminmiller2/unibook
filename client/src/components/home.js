import React, { Component } from 'react'
import navbar from './navbar';

class Home extends Component {
    constructor() {
        super()
    }


    render() {
        const imageStyle = {
            width: 900
        }
        return (
            <div className=" homeBody d-block col-8 mx-auto mt-3">

                <h1 className="homeTitle col-6 mx-auto">UniBook</h1>
                
                <div className="col-8 mx-auto">
                <img className="w-100" src="https://www.tv2000.it/radioinblu/wp-content/uploads/sites/5/2018/01/libri-generiche-508354.610x431.jpg" />
                </div>

                <div className=" col-8 p-3 mx-auto">
                <h1 className="homeTitle">Get the best bang for your book!</h1>
            </div>

            </div>
        )
    }
}
export default Home