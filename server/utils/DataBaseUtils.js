import mongoose from "mongoose";

import config from '../../etc/config.json';

import '../models/Note';

const Note = mongoose.model('Note');

export function setUpConnection() {
    mongoose.connect(`mongodb://${config.db.host}:${config.db.port}/${config.db.name}`);
}

export function listNotes(id) {
    return Note.find();
}

export function createNote(data) {
    const note = new Note({
        title: data.title,
        text: data.text,
        color: data.color,
        createdAt: new Date()
    });
/*
export function createUser(data) {
    const note = new Users({
        login: data.login,
        password: data.password,
        lastName: data.lastName,
        firstName: data.firstName,
        middleName: data.middleName,
        email: data.email,
        isAdmin: data.isAdmin,
        createdAt: new Date()
    });*/ 
    return note.save();
}

export function deleteNote(id) {
    return Note.findById(id).remove();
}

//createNote({title:"1as", text:"szm",color: "#FF8A80"});

