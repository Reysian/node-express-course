const express = require('express');
const router = express.Router();
const { getPeople, addPerson, editPerson, deletePerson } = require("../controllers/people.js");

// Get list of people
router.get('/', getPeople);

// Add new person to list
router.post('/', addPerson);

// Change the name of an existing person in the list
router.put('/:id', editPerson);

// Remove a person from the list (actually edit a copy of the list and respond with the new shorter list)
router.delete('/:id', deletePerson);

module.exports = router;