const express = require('express');
const router = express.Router();

const botController = require('../../controller/bot.controller.js');

/**
 * @openapi
 * /:
 *  get:
 *     tags:
 *     - hello
 *     description: API is running
 *     responses:
 *       200:
 *         description: API is running
 */
router.post('/', botController.createBot);
router.get('/all', botController.getAllBots);
router.get('/:id', botController.getBotById);
router.put('/:id', botController.updateBotById);
router.delete('/:id', botController.deleteBotById);

module.exports = router;