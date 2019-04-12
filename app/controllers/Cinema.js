const {createCinema, getAllCinemas, getCinemaByName, deleteCinema, updateCinema} = require("../actions");

const newCinema = (req,res) => {
    createCinema(req.body)
        .then(cinema => res.status(201).json({"message": 'Cinema has been created'}))
        .catch(err => res.status(400).send(err))
} 

const getCinemas = (req,res) => {
    getAllCinemas()
        .then(cinemas => {res.status(200).json({cinemas})})
        .catch(err => {res.status(400).send(err)})
}

const getCinema = async (req,res) => {
    console.log(req.params.name)
    getCinemaByName(req.params.name)
        .then(cinema => {res.status(200).json({cinema})})
        .catch(err => {res.status(400).send(err)})
}

const deleteCinemaByName = (req,res) => {
    deleteCinema(req.params.name)
    .then(cinema => {res.status(200).send("Task has been removed")})
    .catch(err => {res.status(400).send(err)})
}

const updateCinemaByName = (req,res) => {
    console.log(req.params.name)
    updateCinema(req.params.name, req.body)
        .then(cinema => {
            if(!cinema) res.status(404).send("Cinema doesnt exist");
            res.status(200).send("Cinema updated")
        })
        .catch(err => {res.status(400).send(err)})
}


module.exports = {
    newCinema,
    getCinemas,
    getCinema,
    deleteCinemaByName,
    updateCinemaByName
};