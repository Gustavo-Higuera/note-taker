const router = require('express').Router();
let notes = require('../db/db.json');
const fs = require('fs');
const uniqid = require('uniqid');


router.get('/api/notes', (req, res) => {
  res.json(notes);
});

router.post('/api/notes', (req, res) => {
  req.body.id = uniqid();
  const newNote = req.body;
  notes.push(newNote);

  res.json(notes);

  fs.writeFileSync('./db/db.json', JSON.stringify(notes, null, '\t'));
});

router.delete('/api/notes/:id', (req, res) => {
  const id = req.params.id;
  notes = notes.filter(note => note.id != id);

  res.json(notes);

  fs.writeFileSync('./db/db.json', JSON.stringify(notes, null, '\t'));
})

module.exports = router;