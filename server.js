const express = require('express');
const PORT = 3001;
const app = express();
const notes = require("./public/notes.html");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.listen(PORT, () => {
  console.log(`Your API server is listening on port ${PORT}`);
})