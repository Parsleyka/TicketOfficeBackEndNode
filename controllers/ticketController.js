const ticketService = require('../services/ticketService');
const validator = require('../utils/validator');

class EventController {
    async postTicket(req, res) {
        const body = req.body;

        const validationResult = validator.validateTicketSchema(body);

        if (validationResult.error) {
            return res.status(400).json({error: validationResult.error.details[0].message});
        }

        try {
            const newTicket = await ticketService.postTicket(body);

            return res.json(newTicket);
        } catch (error) {
            console.log(error);

            return res.status(500).json({error: error.message});
        }
    }

    async getTicketsByEventId(req, res) {
        const eventId = req.params.eventId;

        const validationResult = validator.validateId(eventId);

        if (validationResult.error) {
            return res.status(400).json({error: validationResult.error.details[0].message});
        }

        try {
            const tickets = await ticketService.getTicketsByEventId(eventId);

            return res.json(tickets);
        } catch (error) {
            console.log(error);

            return res.status(500).json({error: error.message});
        }
    }

    async putTicket(req, res) {
        const ticketId = req.params.id;
        const body = req.body;

        const idValidationResult = validator.validateId(ticketId);
        const bodyValidationResult = validator.validateTicketSchema(body);

        if (idValidationResult.error || bodyValidationResult.error) {
            return res.status(400).json({
                error: idValidationResult.error
                    ? idValidationResult.error.details[0].message
                    : bodyValidationResult.error.details[0].message
            });
        }

        try {
            const ticket = await ticketService.putTicket(Object.assign(body, {id: ticketId}));

            return res.json(ticket);
        } catch (error) {
            console.log(error);

            return res.status(500).json({error: error.message});
        }
    }

    async postPurchaseTicket(req, res) {
        const ticketId = req.params.id;

        const validationResult = validator.validateId(ticketId);

        if (validationResult.error) {
            return res.status(400).json({error: validationResult.error.details[0].message});
        }

        // TODO: add purchase logic
    }

    async deleteTicket(req, res) {
        const ticketId = req.params.id;

        const validationResult = validator.validateId(ticketId);

        if (validationResult.error) {
            return res.status(400).json({error: validationResult.error.details[0].message});
        }

        try {
            const ticket = await ticketService.deleteTicket(ticketId);

            return res.json(ticket);
        } catch (error) {
            console.log(error);

            return res.status(500).json({error: error.message});
        }
    }
}

module.exports = new EventController();