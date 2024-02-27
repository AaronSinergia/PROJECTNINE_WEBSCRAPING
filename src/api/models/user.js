const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const userSchema = new mongoose.Schema(
  {
    userName: { type: String, required: true },
    password: { type: String, required: true },
  },
  { timestamps: true, collection: 'thomannUsers' }
);

// Función con bcrypt para encriptarla
userSchema.pre('save', function () {
  this.password = bcrypt.hashSync(this.password, 10);
});

const User = mongoose.model('thomannUsers', userSchema, 'thomannUsers');

module.exports = User;
