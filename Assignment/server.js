const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const Task = require('./models/task');

const app = express();
const PORT = process.env.PORT || 3000;

// Connect to MongoDB
mongoose.connect('mongodb://localhost/kanban', { useNewUrlParser: true, useUnifiedTopology: true });

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Define a Mongoose model for tasks (models/task.js)
// Implement the CRUD routes for tasks (GET, POST, PUT, DELETE)

app.get('/tasks', (req, res) => {
    // Fetch tasks from the database and send them as JSON
});

app.post('/tasks', (req, res) => {
    // Create a new task in the database and send it as JSON
});

app.put('/tasks/:id', (req, res) => {
    // Update an existing task in the database and send the updated task as JSON
});

app.delete('/tasks/:id', (req, res) => {
    // Delete a task from the database
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
