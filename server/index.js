const path = require('path');
const express = require('express');
const app = express();
// const port = process.env.PORT || 3000;
const morgan = require('morgan');
module.exports = app



app.use(morgan('dev'));

app.use(express.static(path.join(__dirname, '..', 'public')))

const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }))

app.use('/api', require('./apiRoutes'));





app.use('*', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'public/index.html'))
})

app.use((req, res, next) => {
  if (path.extname(req.path).length > 0) {
    res.status(404).end()
  } else {
    next()
  }
})

app.use(function (err, req, res, next) {
  console.error(err);
  console.error(err.stack);
  res.status(err.status || 500).send(err.message || 'Internal server error.');
})

// app.listen(port, function () {
//   console.log("Knock, knock");
//   console.log("Who's there?");
//   console.log(`Your server, listening on port ${port}`);
// })

