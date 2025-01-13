const Joi = require('joi');

class Validator {
    userSchema = Joi.object({
        name: Joi.string().min(3).max(255).required(),
        surname: Joi.string().min(3).max(255).required(),
    });

    eventSchema = Joi.object({
        name: Joi.string().min(3).max(255).required(),
        description: Joi.string().min(3).required(),
        location: Joi.string().min(3).max(255).required(),
        date: Joi.date().required(),
    });

    ticketSchema = Joi.object({
        eventId: Joi.number().integer().min(1).required(),
        price: Joi.number().greater(0).required()
    });

    validatePostUser(postUserInput) {
        const schema = this.userSchema.append({
            email: Joi.string().email().required(),
            password: Joi.string().min(8).required()
        });

        return schema.validate(postUserInput);
    }

    validatePutUser(putUserInput) {
        return this.userSchema.validate(putUserInput);
    }

    validateId(id) {
        const schema = Joi.number().integer().min(1).message('Incorrect id provided.');

        return schema.validate(id);
    }

    validatePostEvent(postEventInput) {
        return this.eventSchema.validate(postEventInput);

        // const schema = this.userSchema.append({
        //     email: Joi.string().email().required(),
        //     password: Joi.string().min(8).required(),
        //     // Add date validation
        //     createdAt: Joi.string()
        //         .pattern(/^\d{4}-\d{2}-\d{2} \d{2}:\d{2}$/) // Regex for YYYY-MM-DD HH:MM
        //         .required()
        //         .messages({
        //             'string.pattern.base': 'Date must be in the format YYYY-MM-DD HH:MM'
        //         })
        // });
    }

    validatePutEvent(putEventInput) {
        return this.eventSchema.validate(putEventInput);
    }

    validateTicketSchema(ticketInput) {
        return this.ticketSchema.validate(ticketInput);
    }
}

module.exports = new Validator();
