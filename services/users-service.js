const usersDao = require('../daos/users-dao');

const findAllUsers = () => usersDao.findAllUsers();
const findUserById = (userId) => usersDao.findUserById(userId);
const findUserByUsername = (username) => usersDao.findUserByUsername(username);

module.exports = {
    findAllUsers,
    findUserById,
    findUserByUsername
};
