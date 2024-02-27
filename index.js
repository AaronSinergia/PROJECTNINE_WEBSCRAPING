require('dotenv').config();
const express = require('express');
const { connectDB } = require('./src/config/db');
const cors = require('cors');
const bassguitarsRouter = require('./src/api/routes/bassguitar');
const doScrapping = require('./src/utils/scrapperLauncher');
const usersRoutes = require('./src/api/routes/user');
const { isAdmin } = require('./src/middlewares/auth');

const app = express();
connectDB();

app.use(cors());

app.use(express.json());

app.use('/api/v1/bassGuitars', bassguitarsRouter);
app.use('/api/v1/thoman_scrapped', [isAdmin], doScrapping);
app.use('/api/v1/users', usersRoutes);

app.use('*', (req, res, next) => {
  return res.status(404).json('Route Not Found');
});

app.listen(3000, () => {
  console.log('http://localhost:3000');
});
