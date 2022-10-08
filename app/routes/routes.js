const express = require('express');
const Model = require('../models/model');
const router = express.Router();

// Get all Method
router.get('/get', async (req, res) => {
    try {
        const data = await Model.find();

        // Filter unnecessary fields from the response
        const mapped = data.map(({id, name, email, age}) => ({id, name, email, age}));
        res.status(200).send(mapped)
    }
    catch (error) {
        res.status(500).json({ message: error.message })
    }
})

// Get by ID Method
router.get('/get/:id', async (req, res) => {
    try {
        const data = await Model.findById(req.params.id);
        res.status(200).send({
            id: data.id,
            name: data.name,
            email: data.email,
            age: data.age
        })
    }
    catch (error) {
        res.status(500).json({ message: error.message })
    }
})

// Post Method
router.post('/post', async (req, res) => {
    const records = new Model({
        name: req.body.name,
        email: req.body.email,
        age: req.body.age
    })

    try {
        const data = await records.save();
        res.status(200).send({
            id: data.id,
            name: data.name,
            email: data.email,
            age: data.age
        })
    }
    catch (error) {
        res.status(400).json({ message: error.message })
    }
})

// Update by ID Method
router.patch('/update/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const updatedData = req.body;
        const options = { new: true };

        const data = await Model.findByIdAndUpdate(
            id, updatedData, options
        )
        res.status(200).send({
            id: data.id,
            name: data.name,
            email: data.email,
            age: data.age
        })
    }
    catch (error) {
        res.status(500).json({ message: error.message })
    }
})

// Delete by ID Method
router.delete('/delete/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const data = await Model.findByIdAndDelete(id)
        res.status(200).json({ message: `The user ${data.name} has been removed` })
    }
    catch (error) {
        res.status(400).json({ message: error.message })
    }
})

module.exports = router;