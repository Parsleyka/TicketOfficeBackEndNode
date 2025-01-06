const express = require('express');

const {serverUrl, serverPort} = require('./config/dotenv');
const userRouter = require('./routes/userRoutes');

const app = express();

app.use(express.json());
app.use('/api', userRouter);

app.listen(serverPort, () => {
    console.log(`Hosted on http://${serverUrl}:${serverPort}`);
});

// TODO: use fs to create a local logger into the file