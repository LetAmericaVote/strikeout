const gzip = require('itsjoekent-express-gzip');
const express = require('express');
const app = express();

app.use('/public', express.static('public'));

if (process.env.NODE_ENV === 'production') {
  gzip.commonRoutes(app, '/public/dist/');
}

app.get('*', (req, res, next) => {
  res.sendFile(`${__dirname}/template.html`);
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.info(`Listening on ${PORT}`);
});
