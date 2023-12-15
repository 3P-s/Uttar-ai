const Question = require('../models/questionModel');

const getQuestion = async (req, res) => {
    try {
        const tag = req.body.tag;
        const limit = req.body.limit;

        questions = await Question.find({ tags: { $in: [tag] } }).limit(limit);
        res.status(201).send({ questions, tag });

    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}

const insertQuestion = async (req, res) => {
    try {
        const question = req.body.question;
        const tags = req.body.tags;
        const answer = req.body.answer;

        const newQuestion = new Question({ question, answer, tags });
        await newQuestion.save();

        res.status(201).json(newQuestion);

    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}

module.exports = {
    getQuestion,
    insertQuestion
}