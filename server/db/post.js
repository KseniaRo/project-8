const Sequelize = require('sequelize')
const db = require('./db')

const Post = db.define('post', {
  date: {
    type: Sequelize.DATEONLY,
  },
  description: {
    type: Sequelize.TEXT
  },
  imageUrl: Sequelize.STRING
  ,
  title: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true
    }
  },
})

module.exports = Post
