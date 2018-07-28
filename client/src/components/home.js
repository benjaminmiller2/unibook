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
            <div className="homeBody d-block col-8 mx-auto mt-3">

                <h1 className="homeTitle"> ✰ UniBook ✰ </h1>
                
                <div className="col-8 mx-auto">
                <img className="w-100" src="http://imagizer.imageshack.us/a/img924/6154/m4Dbzz.jpg" />
                </div>

                <div className=" col-8 p-3 mx-auto">
                <h1 className="subTitle">Get the best bang for your book!</h1>
            </div>

            </div>
        )
    }
}
export default Home