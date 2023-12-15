const express = require('express');
const questionController = require('../controllers/questionController');

const router = express.Router();

router.post('/get', questionController.getQuestion);
router.post('/insert', questionController.insertQuestion);

module.exports = router;