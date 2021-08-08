const mongoose = require('mongoose')

const TaskSchema = new mongoose.Schema({
    text: 'string',
    day : 'string',
    reminder: 'boolean'
})

const task = mongoose.model('task', TaskSchema)
module.exports = task;
