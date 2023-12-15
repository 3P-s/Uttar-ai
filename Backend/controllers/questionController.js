const Question = require('../models/questionModel');

const getQuestion = async (req, res) => {
    try {
        const tag = req.body.tag;
        const limit = req.body.count;

        questions = await Question.find({ tags: { $in: [tag] } }).limit(limit);
        res.status(201).send({ questions, tag });

    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}

const insertQuestion = async (req, res) => {
    try {
        for (let i = 0; i < req.body.length; i++) {
            const question = req.body[i].question;
            const answer = req.body[i].answer;
            const tags = req.body[i].tags;

            const newQuestion = new Question({ question, answer, tags });
            await newQuestion.save();
        }

        res.status(201).json({ message: "Questions added successfully" });

    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}

module.exports = {
    getQuestion,
    insertQuestion
}