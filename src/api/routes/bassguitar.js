const {
  insertManyInstruments,
  getAllInstruments,
} = require('../controllers/bassguitar');

const bassguitarsRouter = require('express').Router();

bassguitarsRouter.post('/bassGuitarScrapeds', insertManyInstruments);
bassguitarsRouter.get('/', getAllInstruments);

module.exports = bassguitarsRouter;
