const db = require('./db')
const User = require('./user')
const Comment = require('./comment')
const Post = require('./post')

User.hasMany(Post)
Post.belongsTo(User)

User.hasMany(Comment)
Comment.belongsTo(User)

Post.hasMany(Comment)
Comment.belongsTo(Post)

module.exports = {
  db,
  User,
  Comment,
  Post
}
