import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
// import formidable from 'express-formidable';
import multiparty from 'multiparty';
import util from 'util';

import { serverPort } from './config.json';

import * as db from './utils/DataBaseUtils';

// Initialization of express application
const app = express();

// Set up connection of database
db.setUpConnection();

// Using bodyParser middleware
// app.use(bodyParser.urlencoded({ extended: false }));
// app.use(bodyParser.urlencoded({ extended: true }));
// app.use(bodyParser.json());
// app.use(bodyParser());
// app.use(formidable());
// app.use(multiparty);

// Allow requests from any origin
app.use(cors({ origin: '*' }));

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET, PUT, POST, DELETE");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

// RESTful api handlers
app.get('/users', (req, res) => {
    db.listUsers().then(data => res.send(data));
});

app.post('/newuser/', (req, res) => {
    // console.log(req.fields);
    var form = new multiparty.Form();

    form.parse(req, function(err, fields, files) {
        console.log(err);
        console.log(fields);
        console.log(files);
        // res.writeHead(200, {'content-type': 'text/plain'});
        // res.write('received upload:\n\n');
        // res.end(util.inspect({fields: fields, files: files}));
    });
    // console.log(req.body);
    // console.log(req.body);
    // console.log(req.query);
    // console.log(req.body);
    res.send('test1'); return;
    // db.createUser(req.body).then(data => res.send(data));
    // res.redirect('http://localhost:3000/');//переброс пользователя обратно
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

