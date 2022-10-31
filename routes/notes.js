const notes = require('expres').Router();
const { v4: uuidv4 } = require('uuid')


notes.get('/', (req, res) => {
    readFromFile('./db/db.json').then((data) => res.json(JSON.parse(data)));
})

notes.post('/api/notes', (req, res) => {
    console.log(req.body)

    const { noteTitle, noteText } = req.body;

    if (req.body){
        const newNote = {
            title, 
            text, 
            id: uuidv4(),
        };
    }
})



module.exports = notes;