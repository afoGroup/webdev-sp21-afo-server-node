const clubsModel = require('../models/clubs/clubs-model');

const findAllClubs = () => clubsModel.find();
const findClubById = (clubId) => clubsModel.findById(clubId);
const findClubByName = (clubName) => {};

module.exports = {
    findAllClubs,
    findClubById,
    findClubByName
};