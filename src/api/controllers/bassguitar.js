const Instrument = require('../models/bassguitar');
const bassGuitarsInThomann = require('../../../bassGuitarsInThomann.json');

const insertManyInstruments = async (req, res, next) => {
  try {
    await Instrument.insertMany(bassGuitarsInThomann);
    return res.status(201).json('TODOS LOS BAJOS ELECTRICOS SUBIDOS A LA BBDD');
  } catch (error) {
    return res.status(400).json(error);
  }
};

const getAllInstruments = async (req, res, next) => {
  try {
    const allInstruments = await Instrument.find();
    return res.status(200).json(allInstruments);
  } catch (error) {
    return res.status(400).json(error);
  }
};

module.exports = { insertManyInstruments, getAllInstruments };
