const userService = require('../services/userService');
const validator = require('../utils/validator');

class UserController {
    async postUser(req, res) {
        const validationResult = validator.validatePostUser(req.body);

        if (validationResult.error) {
            return res.status(400).json({error: validationResult.error.details[0].message});
        }

        try {
            const newUser = await userService.postUser(req.body);

            return res.json(newUser);
        } catch (error) {
            console.log(error);

            return res.status(500).json({error: 'Internal Server Error'});
        }
    }

    async getUser(req, res) {
        const userId = req.params.id;

        const validationResult = validator.validateId(userId);

        if (validationResult.error) {
            return res.status(400).json({error: validationResult.error.details[0].message});
        }

        try {
            const user = await userService.getUser(userId);

            return res.json(user);
        } catch (error) {
            console.log(error);

            return res.status(500).json({error: 'Internal Server Error'});
        }
    }

    async putUser(req, res) {
        const userId = req.params.id;
        const params = req.body;

        const idValidationResult = validator.validateId(userId);
        const bodyValidationResult = validator.validatePutUser(params);

        if (idValidationResult.error || bodyValidationResult.error) {
            return res.status(400).json({
                error: idValidationResult.error
                    ? idValidationResult.error.details[0].message
                    : bodyValidationResult.error.details[0].message
            });
        }

        try {
            const user = await userService.putUser(Object.assign(params, {id: userId}));

            return res.json(user);
        } catch (error) {
            console.log(error);

            return res.status(500).json({error: 'Internal Server Error'});
        }
    }

    async deleteUser(req, res) {
        const userId = req.params.id;

        const validationResult = validator.validateId(userId);

        if (validationResult.error) {
            return res.status(400).json({error: validationResult.error.details[0].message});
        }

        try {
            const user = await userService.deleteUser(userId);

            return res.json(user);
        } catch (error) {
            console.log(error);

            return res.status(500).json({error: 'Internal Server Error'});
        }
    }
}

module.exports = new UserController();
