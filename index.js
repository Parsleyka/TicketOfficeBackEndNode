const express = require('express');

const {serverUrl, serverPort} = require('./config/dotenv');
const userRouter = require('./routes/userRoutes');

const app = express();

app.use(express.json());
app.use('/api', userRouter);

// app.get('/api/postgre/user', (req, res) => {
//     res.json('ok');
// });

app.listen(serverPort, () => {
    console.log(`Hosted on http://${serverUrl}:${serverPort}`);
});