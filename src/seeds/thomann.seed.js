const mongoose = require('mongoose');
const bassGuitarsInThomann = require('../../bassGuitarsInThomann.json');

const Instrument = require('../api/models/bassguitar');

const instruments = bassGuitarsInThomann;

const instrumentsDocuments = instruments.map((item) => new Instrument(item));

mongoose
  .connect(
    'mongodb+srv://aaronromeromusic:Rewenclow.1324657980@cluster0.otk092i.mongodb.net/?retryWrites=true&w=majority'
  )
  .then(async () => {
    const allInstruments = await Instrument.find();

    if (allInstruments.length) {
      await Instrument.collection.drop();
    }
  })
  .catch((err) => console.log(`Error deleting data: ${err}`))
  .then(async () => {
    await Instrument.insertMany(instrumentsDocuments);
  })
  .catch((err) => console.log(`Error creating data: ${err}`))
  .finally(() => mongoose.disconnect());
