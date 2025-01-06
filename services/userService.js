const db = require('../config/database');

const queries = {
    postUser: 'INSERT INTO public."user" (name, surname, email, password, is_admin) VALUES ($1, $2, $3, $4, $5) RETURNING *',
    putUser: 'UPDATE public."user" SET name = $1, surname = $2 WHERE id = $3 RETURNING *',
    getUser: 'SELECT * FROM public."user" WHERE id = $1',
    deleteUser: 'DELETE FROM public."user" WHERE id = $1',
};

class UserService {
    async postUser(postUserInput) {
        const {name, surname, email, password} = postUserInput;

        const result = await db.query(queries.postUser, [name, surname, email, password, false]);

        return result.rows[0];
    }

    async getUser(id) {
        const result = await db.query(queries.getUser, [id]);

        return result.rows[0];
    }

    async putUser(putUserInput) {
        const {name, surname, id} = putUserInput;

        const result = await db.query(queries.putUser, [name, surname, id]);

        return result.rows[0];
    }

    async deleteUser(id) {
        const result = await db.query(queries.deleteUser, [id]);

        return result.rows[0];
    }
}

module.exports = new UserService();
