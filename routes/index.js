const express = require('express');

const notesRouter = require('./notes')

app.use('/notes', notesRouter)