import React, { Component } from "react";
import API from "../utils/API";


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