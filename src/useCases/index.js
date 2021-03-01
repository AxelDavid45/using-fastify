'use strict'
const { Note } = require('../entities/notes')
const notes = require('./notes-usecase')
module.exports = {
  Notes: notes(Note)
}
