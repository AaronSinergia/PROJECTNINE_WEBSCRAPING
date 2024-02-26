const mongoose = require('mongoose');

const bassGuitarSchema = new mongoose.Schema(
  {
    trademark: { type: String, required: true },
    img: { type: String, required: true },
    price: { type: Number, required: false },
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
