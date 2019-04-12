// Libraries
const express = require("express");
// Controllers
const { newMovie, getMovies, getMovie, deleteMovieByTittle, getAllActivesMovies } = require("../controllers/Movie");
const { newCinema, getCinemas, getCinema, deleteCinemaByName, updateCinemaByName } =  require("../controllers/Cinema");

// Init Router
const router = express.Router();

router.get('/', (req, res) => {
  res.status(200).send({message:'Server on C:'})
});

// // Movies
router.post("/movies", newMovie);
router.get("/movies", getMovies);
router.get("/movies/:tittle", getMovie);
router.put("/movies/delete/:tittle",deleteMovieByTittle);
router.get("/movies/actives",getAllActivesMovies);


//Cinemas
router.post("/cinemas", newCinema);
router.get("/cinemas",getCinemas)
router.get("/cinemas/:name",getCinema)
router.put("/cinemas/delete/:name",deleteCinemaByName)
router.put("/cinemas/:name",updateCinemaByName)

module.exports = router;
