const express = require('express');

const {serverUrl, serverPort} = require('./config/dotenv');

const userRouter = require('./routes/userRoutes');
const eventRouter = require('./routes/eventRoutes');
const ticketRouter = require('./routes/ticketRoutes');

const app = express();

app.use(express.json());

app.use('/api', userRouter);
app.use('/api', eventRouter);
app.use('/api', ticketRouter);

app.listen(serverPort, () => {
    console.log(`Hosted on http://${serverUrl}:${serverPort}`);
});

// TODO: Use fs to create a local logger into the file

// TODO: enhance date validation in the (validatePostEvent) by adding validation greater than today

// TODO: Look into this suggestion:
// - While the `queries` object is clean, maintaining raw SQL queries manually becomes harder as the app grows.
// - For small apps: This is acceptable, but consider improving abstraction by grouping these queries into their own module or using a library like `pg-promise` for cleaner query handling.
// - For larger apps: Use an ORM like **Sequelize** or **TypeORM**, as it enables better scalability and data model management.