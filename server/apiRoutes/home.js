
const router = require('express').Router();
const { Post, User, Comment } = require('../db')


// GET /api/home/userId/posts
router.get('/:userId/posts/', async (req, res, next) => {
  try {
    const posts = await Post.findAll({
      where: {
        user: req.params.userId
      }
    })
    res.json(posts)
  }
  catch (error) {
    next(error)
  }
})

// POST /api/home/
router.post('/', async (req, res, next) => {
  try {
    const post = await Post.create(req.body)
    const user = await User.findOne({
      where: {
        id: req.body.owner
      }
    })
    user.addPost(post)
    res.status(204).end()
  } catch (err) {
    next(err)
  }
})

// router.put('/posts/:postId', function (req, res, next) { /* etc */ });

// router.delete('/posts/:postId', function (req, res, next) { /* etc */ });

module.exports = router;
