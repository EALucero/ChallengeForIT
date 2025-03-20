const express = require('express');
const router = express.Router();
const { store, update, remove } = require('../controllers/tasksController');

router
    .route('/')
    .post(store)
router
    .route('/:id')
    .put(update)
    .delete(remove)

module.exports = router;