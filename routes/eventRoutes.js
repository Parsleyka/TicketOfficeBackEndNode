const {Router} = require('express');

const eventController = require('../controllers/eventController');

const router = new Router();

router.get('/event', eventController.getEvents);
router.post('/event', eventController.postEvent);
router.put('/event/:id', eventController.putEvent);
router.delete('/event/:id', eventController.deleteEvent);

module.exports = router;
