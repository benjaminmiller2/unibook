import React, { Component } from "react";
import API from "../utils/API";
import Navbar from "./navbar";

const API_KEY = process.env.GBOOKSAPI || "AIzaSyBwhv-evXRKbUdAo2Flhy6WGD2ngY_W7zE"

class Search extends Component {
  state={search: ""}
  onChange = event => {
    this.setState ({search: event.target.value})
    console.log(event.target);
  }
  render() {
    return (
      <div className ="container">
       
       <Navbar loggedIn="true"/>
        <form class="navbar-form navbar-left" role="search">
        
            <div class="form-group">
            <input onChange={this.onChange} type="text"  name="search" class="form-control" placeholder="Search" value={this.state.search}/>
            </div>
            <button type="submit" class="btn btn-default">Submit</button>

            <div>
            <div class="card">
  <div class="card-header">
  <h2> Search Results </h2>
  </div>
  <div class="card-body">
  
  </div>
</div>
              </div>
            
          </form>
        </div>
     
        
         
    )
  }

}




export default Search;