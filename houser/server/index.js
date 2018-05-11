const express = require('express');
const bodyParser = require('body-parser');
const massive = require('massive');
const controller = require('./controller');

    require('dotenv').config();


const app = express();


app.use(bodyParser.json());
app.use(express.static(`${__dirname}/build`));

// massive(process.env.CONNECTION_STRING)
//     .then((dbInstance) => {
//         app.set('db', dbInstance)
//     });

app.get('/', controller.readAll);

const port = process.env.PORT || 3001;
app.listen(port, () => {
    console.log(`Server is listening to port ${port}`)
})