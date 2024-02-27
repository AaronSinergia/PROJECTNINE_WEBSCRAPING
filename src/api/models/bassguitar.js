const mongoose = require('mongoose');

const bassGuitarSchema = new mongoose.Schema(
  {
    title: { type: String, required: false },
    price: { type: Number, required: false },
    img: { type: String, required: false },
  },
  {
    timestamps: true,
    collection: 'bassGuitarsScraped',
  }
);

const Instrument = mongoose.model(
  'bassGuitarsScraped',
  bassGuitarSchema,
  'bassGuitarsScraped'
);

module.exports = Instrument;
