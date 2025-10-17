// Lets get the app started, lets import express & call it
import express from 'express';
import 'dotenv/config'
import morgan from 'morgan';
const app = express();
const port = process.env.PORT || 4444;

app.use(morgan('common'))

app.get('/', (req, res) => {
    res.send('We are back live with another application coming at you, stay tuned!!!').status(200)
})


app.listen(port, (req, res) => {
    console.log(`Listening on port: ${port}...`)
})