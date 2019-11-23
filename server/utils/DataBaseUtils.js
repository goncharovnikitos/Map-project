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

export function findUserID(id) {
    return User.findById(id);
}

export function findUserByName(name){
    return User.find({lastName: name});
}
export function findUserByLogin(login){
    return User.findOne({login: login});
}
export function loginUser(login, password){
    return User.findOne({$and: [{login: login}, {password: password}]});
}

function formatUser(data) {
    return {
        login: data.login,
        password: data.password,
        lastName: data.lastName,
        firstName: data.firstName,
        middleName: data.middleName,
        email: data.email,
        photo: data.photo,
        isAdmin: data.isAdmin,
        createdAt: new Date()
    };
}

export function validateUser(data) {
    const user = new User(formatUser(data));
    let validator = user.validateSync();
    if (typeof validator === 'object' && validator.errors) {
        let error_messages = [];
        for(let index in validator.errors) {
            if (validator.errors.hasOwnProperty(index)) {
                var error = validator.errors[index];
                if (error.message) error_messages.push(error.message);
            }
        }
        return error_messages;
    }
    return true;
}

export function createUser(data) {
    return User.replaceOne({login: data.login}, formatUser(data), { upsert: true });
}

export function deleteUser(id) {
    return User.findById(id).remove();
}

//createNote({title:"1as", text:"szm",color: "#FF8A80"});

