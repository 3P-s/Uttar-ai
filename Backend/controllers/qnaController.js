const QNA = require('../models/qnaModel');
const { PythonShell } = require('python-shell');

const createQna = async (req, res) => {
    try {
        const question = req.body.question;

        if (!question) {
            res.send(400).json({ message: "Give me a proper question" });
        }

        let pyshell = new PythonShell('./controllers/model.py');

        pyshell.send(question);

        pyshell.on('message', async function (message) {
            const answer = message;
            console.log(answer);
            await QNA.create({ question, answer });
            const qnaList = await QNA.find();
            res.status(201).send(qnaList);
        });

    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}

module.exports = {
    createQna
}
