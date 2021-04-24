const usersModel = require('../models/users/users-model');

const findAllUsers = () => usersModel.find();
const findUserById = (userId) => usersModel.findById(userId);
const findUserByUsername = (username) => {};

module.exports = {
    findAllUsers,
    findUserById,
    findUserByUsername
};