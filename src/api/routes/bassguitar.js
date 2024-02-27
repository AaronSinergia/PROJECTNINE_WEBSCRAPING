const {
  insertManyInstruments,
  getAllInstruments,
} = require('../controllers/bassguitar');
const { isAdmin } = require('../../middlewares/auth');

const bassguitarsRouter = require('express').Router();

bassguitarsRouter.post('/bassGuitarScrapeds', [isAdmin], insertManyInstruments);
bassguitarsRouter.get('/', getAllInstruments);

module.exports = bassguitarsRouter;
