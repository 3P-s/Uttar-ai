const express = require('express');
const qnaController = require('../controllers/qnaController');

const router = express.Router();

// router.get('/', qnaController.);
router.post('/', qnaController.createQna);

module.exports = router;