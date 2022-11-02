const notes = require('express').Router();
const uuid = require('../utils/uuid')
const { readFromFile, readAndAppend, writeToFile } = require('../utils/fsUtils')


notes.get('/', (req, res) => {
    readFromFile('./db/db.json').then((data) => res.json(JSON.parse(data)));
})

notes.post('/', (req, res) => {
    console.log(req.body)

    const { title, text } = req.body;

    if (req.body){
        const newNote = {
            title, 
            text, 
            id: uuid(),
        };
        readAndAppend(newNote, './db/db.json');
        res.json('New note added succesfully');
    } else {
        res.error('Error in adding new note');
    }
});

notes.delete('/:id', (req, res) => {
    readFromFile('./db/db.json').then((data) => {const currentNotes = (JSON.parse(data))
    console.log(currentNotes)
    const toDelete = req.params.id
    const newNotes = currentNotes.filter((note) => note.id !== toDelete
    )
    console.log(toDelete)
    writeToFile('./db/db.json', newNotes)
    res.json(newNotes)
})})


module.exports = notes;