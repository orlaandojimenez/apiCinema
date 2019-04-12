const Movie = require("../models/Movies");

const createMovie = (data) => {
	return Movie.create(data);
};

const getAllMovies = () => {
    return Movie.find()
}

const getMovieByTittle = (tittle) => {
    // console.log(tittle);
    const query = {tittle: tittle};
    return Movie.findOne(query)
} 

const deleteMovie = (tittle) => {
    const query = {tittle: tittle}
    const data = {is_active: false}
    return Movie.findOneAndUpdate(query,{$set:data},{new:true})
}

const getActivesMovies = () => {
    return Movie.find({is_active: true})
}


module.exports = { 
  createMovie,
  getAllMovies,
  getMovieByTittle,
  deleteMovie,
  getActivesMovies
};
