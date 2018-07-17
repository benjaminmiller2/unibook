import axios from "axios";
import filterParams from './filterParams'; 


// Export an object containing methods we'll use for accessing the Dog.Ceo API

export default {
  //register new user
  saveUser: function(params){
  return axios.post('/api/user', filterParams(params));
  },

};
