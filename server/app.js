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

app.post('/users/', (req, res) => {
    console.log(req.body);
    res.redirect('http://localhost:3000/');
    // db.createUser(req.body).then(data => res.send(data));
});

/*app.delete('/User/:id', (req, res) => {
    db.deleteNote(req.params.id).then(data => res.send(data));
});*/

const server = app.listen(serverPort, function() {
    console.log(`Server is up and running on port ${serverPort}`);
});

