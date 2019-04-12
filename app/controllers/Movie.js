const {createMovie, getAllMovies, getMovieByTittle, deleteMovie, getActivesMovies} = require("../actions");

const newMovie = (req,res) => {
    createMovie(req.body)
        .then(movie => res.status(201).json({"message": 'Movie has been created'}))
        .catch(err => res.status(400).send(err))
} 

const getMovies = (req,res) => {
    getAllMovies()
        .then(movies => {res.status(200).json({movies})})
        .catch(err => {res.status(400).send(err)})
}

const getMovie = async (req,res) => {
    console.log(req.params.tittle)
    getMovieByTittle(req.params.tittle)
        .then(movie => {res.status(200).json({movie})})
        .catch(err => {res.status(400).send(err)})
}

const deleteMovieByTittle = (req,res) => {
    deleteMovie(req.params.tittle)
    .then(movie => {res.status(200).send("Task has been removed")})
    .catch(err => {res.status(400).send(err)})
}

const getAllActivesMovies = (req,res) => {
    getActivesMovies()
    .then(movies => {res.status(200).json({movies})})
    .catch(err => {res.status(400).send(err)})
}

module.exports = {
    newMovie,
    getMovies,
    getMovie,
    deleteMovieByTittle,
    getAllActivesMovies
};