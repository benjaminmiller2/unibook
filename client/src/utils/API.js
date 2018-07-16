import axios from "axios";
import filterParams from './filterParams'; 


// Export an object containing methods we'll use for accessing the Dog.Ceo API

export default {
  //register new user
  saveUser: function(params){
  return axios.post('/api/user', { params: filterParams(params) });
  },
  getRandomDog: function() {
    return axios.get("https://dog.ceo/api/breeds/image/random");
  },
  getDogsOfBreed: function(breed) {
    return axios.get("https://dog.ceo/api/breed/" + breed + "/images");
  },
  getBaseBreedsList: function() {
    return axios.get("https://dog.ceo/api/breeds/list");
  }
};
