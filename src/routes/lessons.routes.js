const express = require('express');
const router = express.Router();

const Lesson = require('../models/lesson');

router.get('/', async (req, res) => {
    const lessons = await Lesson.find();
    console.log(lessons);
    res.json(lessons);
});

router.get('/:id', async (req, res) => {
    const lesson = await Lesson.findById(req.params.id);
    res.json(lesson);
});

router.post('/', async (req, res) => {
    const { title, content } = req.body;
    const newLesson = new Lesson ({ title, content })
    await newLesson.save();
    res.json("Lesson saved");
});

router.put('/:id', async (req, res) => {
    const { title, content } = req.body;
    const newLesson ={ title, content };
    await Lesson.findByIdAndUpdate(req.params.id, newLesson); 
    res.json({status:"Lesson updated"});
});

module.exports = router;