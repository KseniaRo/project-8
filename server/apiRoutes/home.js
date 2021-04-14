
const router = require('express').Router();


router.get('/:userId/posts', function (req, res, next) {

  try {
    res.send("hello!")
  } catch (error) {

  }
});

router.post('/newPost', function (req, res, next) { /* etc */ });

router.put('/posts/:postId', function (req, res, next) { /* etc */ });

router.delete('/posts/:postId', function (req, res, next) { /* etc */ });

module.exports = router;
