import React, { Component } from "react";
import axios from 'axios';

import API from "../utils/API";

const API_KEY = process.env.GBOOKSAPI || "AIzaSyBwhv-evXRKbUdAo2Flhy6WGD2ngY_W7zE"

class Search extends Component {

  state={search: ""}
  onChange = event => {
    this.setState ({search: event.target.value})
    console.log(event.target);
  }
  render() {
    return (
      <form>
        <input onChange={this.onChange} name="search" type="text" placeholder="This is where users will search" value={this.state.search}/>
        
      </form>
    )
  }

}




export default Search;
