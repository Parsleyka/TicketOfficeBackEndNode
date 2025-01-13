const db = require('../config/database');

const queries = {
    postTicket: 'INSERT INTO public.ticket (event_id, price) VALUES ($1, $2) RETURNING *',
    getTicketsByEventId: 'SELECT * FROM public.ticket WHERE event_id = $1',
    putTicket: 'UPDATE public.ticket SET event_id = $1, price = $2 WHERE id = $3 RETURNING *',
    deleteTicket: 'DELETE FROM public.ticket WHERE id = $1',
};

class TicketService {
    async postTicket(postTicketInput) {
        const {eventId, price} = postTicketInput;

        const result = await db.query(queries.postTicket, [eventId, price]);

        return result.rows[0];
    }

    async getTicketsByEventId(eventId) {
        const result = await db.query(queries.getTicketsByEventId, [eventId]);

        return result.rows;
    }

    async putTicket(putTicketInput) {
        const {id, eventId, price} = putTicketInput;

        const result = await db.query(queries.putTicket, [eventId, price, id]);

        return result.rows[0];
    }

    async postPurchaseTicket(purchaseTicketInput) {
        // TODO: add purchase logic
    }

    async deleteTicket(id) {
        const result = await db.query(queries.deleteTicket, [id]);

        return result.rowCount;
    }
}

module.exports = new TicketService();