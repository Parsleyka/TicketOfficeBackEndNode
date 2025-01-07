const db = require('../config/database');

const queries = {
    getEvents: 'SELECT * FROM public.event',
    postEvent: 'INSERT INTO public.event (name, description, location, date) VALUES ($1, $2, $3, $4) RETURNING *',
    putEvent: 'UPDATE public.event SET name = $1, description = $2, location = $3, date = $4 WHERE id = $5 RETURNING *',
    deleteEvent: 'DELETE FROM public.event WHERE id = $1',
};

class EventService {
    async getEvents() {
        const result = await db.query(queries.getEvents);

        return result.rows;
    }

    async postEvent(postEventInput) {
        const {name, description, location, date} = postEventInput;

        const result = await db.query(queries.postEvent, [name, description, location, date]);

        return result.rows[0];
    }

    async putEvent(putEventInput) {
        const {name, description, location, date, id} = putEventInput;

        const result = await db.query(queries.putEvent, [name, description, location, date, id]);

        return result.rows[0];
    }

    async deleteEvent(id) {
        const result = await db.query(queries.deleteEvent, [id]);

        return result.rows[0];
    }
}

module.exports = new EventService();