const express = require('express');
const cors = require('cors');

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());

const categories = require('./data/categories.json');
const course = require('./data/course.json');

app.get('/', (req, res) => {
    res.send('Web Development server running');
});

app.get('/courses-categories', (req, res) => {
    res.send(categories);
});

app.get('/single-course', (req, res) => {
    res.send(course);
});

app.get('/single-course/:id', (req, res) => {
    const id = req.params.id;

    const selectCourses = course.find(selected => selected.id === id);
    res.send(selectCourses);
});

app.listen(port, () => {
    console.log(`Web Development course running on port: ${port}`);
});