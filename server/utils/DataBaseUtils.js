import mongoose from "mongoose";

import config from '../config.json';

import '../models/User';

const User = mongoose.model('User');

export function setUpConnection() {
    mongoose.connect(`mongodb://${config.db.host}:${config.db.port}/${config.db.name}`);
}

export function listUsers() {
    return User.find();
}



export function createUser(data) {
    const user = new User({
        login: data.login,
        password: data.password,
        lastName: data.lastName,
        firstName: data.firstName,
        middleName: data.middleName,
        email: data.email,
        photo: data.photo,
        isAdmin: data.isAdmin,
        createdAt: new Date()
    });
    return user.save();
}

export function deleteNote(id) {
    return User.findById(id).remove();
}

//createNote({title:"1as", text:"szm",color: "#FF8A80"});

