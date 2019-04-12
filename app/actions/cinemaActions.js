const Cinema = require("../models/Cinemas");

const createCinema = (data) => {
	return Cinema.create(data);
};

const getAllCinemas = () => {
    return Cinema.find({is_active: true}).populate('movies');
}

const getCinemaByName = (name) => {
    // console.log(tittle);
    const query = {name: name};
    return Cinema.findOne(query).populate('movies')
} 

const deleteCinema = (name) => {
    const query = {name: name}
    const data = {is_active: false}
    return Cinema.findOneAndUpdate(query,{$set:data},{new:true})
}

const updateCinema = (name,data) => {
    const query = {name: name}
    return Cinema.findOneAndUpdate(query,{$set:data},{new:true});
}


module.exports = { 
  createCinema,
  getAllCinemas,
  getCinemaByName,
  deleteCinema,
  updateCinema
};
