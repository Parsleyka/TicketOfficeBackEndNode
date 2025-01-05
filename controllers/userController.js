const userService = require('../services/userService');
const validator = require('../utils/validator')

class UserController {
    async getUsers(req, res, next) {
        try {
            const allUsers = await userService.getAllUsers();

            res.json(allUsers);
        } catch (error) {
            console.log(error);

            res.status(500).json({error: 'Internal Server Error'});
        }

        next();
    }

    async createUser(req, res, next) {
        try {
            const newUser = await userService.createUser(req.body);

            res.json(newUser);
        } catch (error) {
            console.log(error);

            res.status(500).json({error: 'Internal Server Error'});

            return next(error);
        }

        next();
    }

    async loginUser(req, res, next) {
        try {
            const validationResult = validator.validateLoginUser()

            const allUsers = await userService.getAllUsers();

            res.json(allUsers);
        } catch (error) {
            console.log(error);

            res.status(500).json({error: 'Internal Server Error'});
        }

        next();
    }
}

module.exports = new UserController();
