const express = require('express');
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const cors = require('cors')
const Task = require('./models/task')

const app = express()
mongoose.connect('mongodb://mongodb:27017/angular_crud',{useNewUrlParser: true,useUnifiedTopology: true })
    .then( () => console.log(`Database connected!!`))
    .catch( err => console.log(err));

app.use(bodyParser.json());
app.use( cors({
    origin: '*',

}))

// Initial Route
app.get('/', (req,res) => {
    res.send(`This server servers data to the task-app, Task-Tracker is running on port 4200`)
})

// Route to get all the task
app.get('/tasks', (req,res) => {
    Task.find().then( tasks => {
        res.json(tasks);
    })
})

// Post route to add task
app.post('/addTask', (req,res) => {
    console.log("Reached here")

    Task.create( {
        text: req.body.text,
        day: req.body.day,
        reminder: req.body.reminder
    }).then( () => res.json('Task added!!'))
    .catch( err => console.log(`Error ${err}`))
})

//Delete Particular Task
app.get('/deleteTask/:id', (req,res) => {
    
    Task.deleteOne({
        _id: req.params.id
    }).then( tasks => {
        console.log(`Tasks ${JSON.stringify(tasks)}`)
    })
    res.json(`Task Deleted`)
})

//Update Task
app.get('/updateTask/:id/:reminder', (req,res) => {
    
    Task.updateOne( {_id: req.params.id}, {reminder: req.params.reminder }).then( data => {
        console.log(JSON.stringify(data))
        res.send(JSON.stringify(data));
    })
})

app.listen(3000, () => {
    console.log("App is started on port 3000")
})

