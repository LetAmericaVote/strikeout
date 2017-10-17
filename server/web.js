const express = require('express');
const app = express();

app.use('/public', express.static('public'));

if (process.env.NODE_ENV === 'production') {
  app.get('/public/dist/*.js', (req, res, next) => {
    req.url = req.url + '.gz';
    res.set('Content-Encoding', 'gzip');
    next();
  });
}

app.get('*', (req, res, next) => {
  if (req.url.startsWith('/public/')) {
    return next();
  }

  res.sendFile(`${__dirname}/template.html`);
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.info(`Listening on ${PORT}`);
});
