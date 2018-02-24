const express = require('express');
const app = express();
const parser = require('body-parser');
app.use(parser.json());
app.use(express.static('../client'));
app.listen(4040, function(err) {
  if (err) console.error(err);
  else console.log('Were live baby!');
});