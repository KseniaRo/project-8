
const router = require('express').Router();


router.get('/:userId/posts', function (req, res, next) {
  req.send("hello!")
});

router.post('/newPost', function (req, res, next) { /* etc */ });

router.put('/posts/:postId', function (req, res, next) { /* etc */ });

router.delete('/posts/:postId', function (req, res, next) { /* etc */ });

module.exports = router;
