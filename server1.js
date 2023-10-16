const express = require('express');
const morgan = require('morgan');
const app = express();

const port = 4444;

app.use(morgan("tiny"));
app.get('/', (req, res) => {
  res.send('Hello from server1');
})

app.listen(port, () => {
  console.log(`Server1 listening on port ${port}`);
})
