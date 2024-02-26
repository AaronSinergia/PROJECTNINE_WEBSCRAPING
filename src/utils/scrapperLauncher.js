const { scrapper } = require('./scrapper');

const doScrapping = async (req, res, next) =>
  scrapper('https://www.thomann.de/es/index.html');

module.exports = doScrapping;
