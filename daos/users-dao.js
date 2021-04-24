const usersModel = require('../models/users/users-model');

const findAllUsers = () => usersModel.find();
const findUserById = (userId) => usersModel.findById(userId);
const findUserByUsername = (username) => usersModel.find({$text:{$search:username}});

module.exports = {
    findAllUsers,
    findUserById,
    findUserByUsername
};