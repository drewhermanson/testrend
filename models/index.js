const Comment = require('./comment');
const User = require('./user');
const Writeup = require('./writeup');

//User can have multiple writeups
User.hasMany(Writeup, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE'
});

//every writeup belongs to a user
Writeup.belongsTo(User, {
    foreignKey: 'user_id'
});

//User can have multiple comments
User.hasMany(Comment, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE'
});

//every comment belongs to a user
Comment.belongsTo(User, {
    foreignKey: 'user_id'
});

//Writeup can have multiple comments
Writeup.hasMany(Comment, {
    foreignKey: 'writeup_id',
    onDelete: 'CASCADE'
});

//every comment belongs to a writeup
Comment.belongsTo(Writeup, {
    foreignKey: 'writeup_id'
});

module.exports = { Comment, User, Writeup };