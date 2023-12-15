const mongoose = require('mongoose');

const questionSchema = new mongoose.Schema({
    question: {
        type: String,
        required: [true, 'Question is required'],
    },
    answer: {
        type: String,
        required: [true, 'Answer is required'],
    },
    tags: {
        type: Array,
        default: [],
    }
}, { timestamps: true });

module.exports = mongoose.model('Question', questionSchema);