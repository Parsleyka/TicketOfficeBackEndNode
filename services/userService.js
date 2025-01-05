const db = require('../config/database');

const queries = {
    getAllUsers: 'SELECT * FROM public."user"',
    createUser: 'INSERT INTO public."user" (name, surname, email, password, is_admin) VALUES ($1, $2, $3, $4, $5) RETURNING *',
    userLogin: ''
};

class UserService {
    async getAllUsers() {
        const result = await db.query(queries.getAllUsers);

        return result.rows;
    }

    async createUser(userData) {
        const {name, surname, email, password, is_admin} = userData;

        const result = await db.query(queries.createUser, [name, surname, email, password, is_admin]);

        return result.rows[0];
    }

    async loginUser(loginData) {
        const {email, password} = loginData;

        const result = await db.query(queries.userLogin, [email, password]);

        return result.rows[0];
    }
}

module.exports = new UserService();
