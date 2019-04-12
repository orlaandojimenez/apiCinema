const movieActions = require('./movieActions')
const cinemaActions = require('./cinemaActions')

module.exports = {
  ...movieActions,
  ...cinemaActions
};
