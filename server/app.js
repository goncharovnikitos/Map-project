import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';

import { serverPort } from './config.json';

import * as db from './utils/DataBaseUtils';

// Initialization of express application
const app = express();

// Set up connection of database
db.setUpConnection();

// Using bodyParser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Allow requests from any origin
app.use(cors({ origin: '*' }));

// RESTful api handlers
app.get('/users', (req, res) => {
    db.listUsers().then(data => res.send(data));
});




app.post('/newuser/', (req, res) => {
    console.log(req.body);
    db.createUser(req.body).then(data => res.send(data));
    res.redirect('http://localhost:3000/');//переброс пользователя обратно
    // db.createUser(req.body).then(data => res.send(data));
});

/*app.post('/findLocation', (req, res)) => { 
    db.find(req._id).then(data => res.send())
}*/

/*app.delete('/User/:id', (req, res) => {
    db.deleteNote(req.params.id).then(data => res.send(data));
});*/

const server = app.listen(serverPort, function() {
    console.log(`Server is up and running on port ${serverPort}`);
});

