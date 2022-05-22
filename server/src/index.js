const express = require('express');
const app = express();
const cors = require('cors');
const route = require('./routes');
const port = 3001;

app.use(
  express.urlencoded({
    extended: true,
  })
);

app.use(express.json());

app.use(
  cors({
    origin: 'http://localhost:3000',
    credentials: true,
  })
);

route(app);

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}!`);
});
