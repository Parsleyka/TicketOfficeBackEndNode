const Joi = require('joi');

class Validator {
    userSchema = Joi.object({
        name: Joi.string().min(3).max(255).required(),
        surname: Joi.string().min(3).max(255).required(),
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
        const schema = Joi.number().integer().min(1);

        return schema.validate(id);
    }
}

module.exports = new Validator();
