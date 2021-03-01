'use strict'
const noteData = []

class Note {
  constructor (data) {
    if (data) {
      this.data = data
      this.id = noteData.length
      noteData.push({ ...this })
    }
    this._data = null
  }

  create (data) {
    return new Promise((resolve, reject) => {
      const myCb = function () {
        if (!data) {
          return reject(new Error('Data did not found'))
        }
        this.data = data
        this.id = noteData.length
        noteData.push({ ...this })
        return resolve(this)
      }

      setTimeout(myCb.bind(Note), 300)
    })
  }

  get (id) {
    if (!id) {
      return new Promise((resolve, reject) => {
        setTimeout(function () {
          if (noteData.length === 0) {
            return reject(new Error('No data to show'))
          }
          return resolve(noteData)
        }, 300)
      })
    }
  }
}

module.exports = {
  store: noteData,
  Note
}
