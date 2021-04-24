const mongoose = require('mongoose');

const clubsSchema = mongoose.Schema(
    {
        _id: String,
        name: String,
        description: String,
        createdDate: String,
        animeId: String,
        owner: {type: String, ref: 'UsersModel' },
        members: [{type: String, ref: 'UsersModel' }]
    },
    {collection: 'clubs'});

module.exports = clubsSchema;