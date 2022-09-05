const express = require('express');
const PORT = 3001;
const app = express();
const htmlRoutes = require('./routes/html-routes');
const apiRoutes = require('./routes/api-routes');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

app.use('/', apiRoutes);
app.use('/', htmlRoutes);

app.listen(PORT, () => {
  console.log(`App is listening at http://localhost:${PORT}`);
})