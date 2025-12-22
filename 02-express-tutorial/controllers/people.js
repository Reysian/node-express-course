let { people } = require('../data');

// Get list of people
const getPeople = (req, res) => {
    res.status(200).json({success: true, data: people});
};

// Add new person to list
const addPerson = (req, res) => {
    const {name} = req.body;
    if (!name) {
        return res.status(400).json({ success: false, message: "Please provide a name" });
    }
    people.push({ id: people.length + 1, name: req.body.name });
    res.status(201).json({ success: true, name: req.body.name });
    console.log("success for " + name);
};

// Change the name of an existing person in the list
const editPerson = (req, res) => {
    const { id } = req.params;
    const { name } = req.body;
    
    const person = people.find((person) => person.id === Number(id));

    if (!person) {
        return res.status(404).json({success: false, msg: `No person with id ${id}`});
    }
    const newPeople = people.map((person) => {
        if (person.id === Number(id)) {
            person.name = name;
        }
        return person;
    });
    res.status(200).json({success: true, data: newPeople})
};

// Remove a person from the list (actually edit a copy of the list and respond with the new shorter list)
const deletePerson = (req, res) => {
    const { id } = req.params;

    const person = people.find((person) => person.id === Number(id));

    if (!person) {
        return res.status(404).json({success: false, msg: `No person with id ${id}`});
    }

    const newPeople = people.filter((person) => person.id !== Number(id));

    res.status(200).json({success: true, data: newPeople})
};

module.exports = {
    getPeople,
    addPerson,
    editPerson,
    deletePerson,
};