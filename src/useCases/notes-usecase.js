'use strict'
function notesUseCases (Model) {
  const Note = new Model()

  async function create (data) {
    if (!data) {
      throw new Error('Missing data')
    }

    // Clean data
    const verify = cleanData(data)
    if (verify) {
      const note = await Note.create(data)
      return note.id
    }
    throw verify
  }

  async function getAll () {
    const notes = await Note.get()
    return notes
  }

  /**
   * This function receives an object and verify if the data match the information needed to create a note
   * @param {object} data
   * @returns {boolean}
   */
  function cleanData (data) {
    const ourData = data
    if (!ourData) {
      throw new Error('Missing params')
    }

    if (ourData.title && ourData.body) {
      return true
    }
    return new Error('Missing information in body')
  }

  return {
    create,
    getAll
  }
}

module.exports = notesUseCases
