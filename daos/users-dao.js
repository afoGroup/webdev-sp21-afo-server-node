const usersModel = require('../models/users/users-model');

const findAllUsers = () => usersModel.find();
const findUserById = (userId) => usersModel.findById(userId);

module.exports = {
    findAllUsers,
    findUserById
};