const eventService = require('../services/eventService');
const validator = require('../utils/validator');

class EventController {
    async getEvents(req, res) {
        try {
            const events = await eventService.getEvents();

            return res.json(events);
        } catch (error) {
            console.log(error);

            return res.status(500).json({error: 'Internal Server Error'});
        }
    }

    async postEvent(req, res) {
        const validationResult = validator.validatePostEvent(req.body);

        if (validationResult.error) {
            return res.status(400).json({error: validationResult.error.details[0].message});
        }

        try {
            const newEvent = await eventService.postEvent(req.body);

            return res.json(newEvent);
        } catch (error) {
            console.log(error);

            return res.status(500).json({error: 'Internal Server Error'});
        }
    }

    async putEvent(req, res) {
        const eventId = req.params.id;
        const params = req.body;

        const idValidationResult = validator.validateId(eventId);
        const bodyValidationResult = validator.validatePutEvent(params);

        if (idValidationResult.error || bodyValidationResult.error) {
            return res.status(400).json({
                error: idValidationResult.error
                    ? idValidationResult.error.details[0].message
                    : bodyValidationResult.error.details[0].message
            });
        }

        try {
            const event = await eventService.putEvent(Object.assign(params, {id: eventId}));

            return res.json(event);
        } catch (error) {
            console.log(error);

            return res.status(500).json({error: 'Internal Server Error'});
        }
    }

    async deleteEvent(req, res) {
        const eventId = req.params.id;

        const validationResult = validator.validateId(eventId);

        if (validationResult.error) {
            return res.status(400).json({error: validationResult.error.details[0].message});
        }

        try {
            const event = await eventService.deleteEvent(eventId);

            return res.json(event);
        } catch (error) {
            console.log(error);

            return res.status(500).json({error: 'Internal Server Error'});
        }
    }
}

module.exports = new EventController();