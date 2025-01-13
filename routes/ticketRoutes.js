const {Router} = require('express');

const ticketController = require('../controllers/ticketController');

const router = new Router();

router.post('/ticket', ticketController.postTicket);
router.get('/ticket/:eventId', ticketController.getTicketsByEventId);
router.put('/ticket/:id', ticketController.putTicket);
router.post('/ticket/:id/purchase', ticketController.postPurchaseTicket);
router.delete('/ticket/:id', ticketController.deleteTicket);

module.exports = router;