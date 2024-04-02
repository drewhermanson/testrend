const sequelize = require('../config/connection');
const { User, Writeup, Comment } = require('../models');

const userData = require('./userData.json');
const writeupData = require('./writeupData.json');
const commentData = require('./commentData.json')

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  const users = await User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });

  const writeups = await Writeup.bulkCreate(writeupData, {
    returning: true,
  });
 
 const comments = await Comment.bulkCreate(commentData, {
    returning: true,
  });


  process.exit(0);
};

seedDatabase();