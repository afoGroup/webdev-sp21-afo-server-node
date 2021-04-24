const clubsModel = require('../models/clubs/clubs-model');

const findAllClubs = () => clubsModel.find();
const findClubById = (clubId) => clubsModel.findById(clubId);
const findClubByTitle = (clubTitle) => {};

module.exports = {
    findAllClubs,
    findClubById,
    findClubByTitle
};