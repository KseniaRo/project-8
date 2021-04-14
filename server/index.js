const path = require('path');
const express = require('express');
const app = express();
const cors = require('cors')
const cookieParser = require("cookie-parser")
const morgan = require('morgan');
module.exports = app



app.use(morgan('dev'));
app.use(cookieParser())

app.use(express.static(path.join(__dirname, '..', 'public')))

const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }))

app.use('/api', require('./apiRoutes'));

app.use(express.json)

//send credentials
app.use(cors({
  credentials: true,
  // origin: ["http://localhost:3000", "http://localhost:8080", "http://localhost:4200"]
}))



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

