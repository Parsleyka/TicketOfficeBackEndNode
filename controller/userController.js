const userService = require('../services/userService');

class UserController {
    async getUsers(req, res, next) {
        try {
            const allUsers = await userService.getAllUsers();

            res.json(allUsers);

            return next();
        } catch (error) {
            console.log(error);

            res.status(500).json({error: 'Internal Server Error'});

            return next();
        }
    }

    async createUser(req, res, next) {
        try {
            const newUser = await userService.createUser(req.body);

            res.json(newUser);

            return next();
        } catch (error) {
            console.log(error);

            res.status(500).json({error: 'Internal Server Error'});

            return next(error);
        }
    }
}

module.exports = new UserController();