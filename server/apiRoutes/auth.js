const router = require('express').Router();
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken')
const { Post, User, Comment } = require('../db')


router.post('/login', async (req, res, next) => {
  try {
    const user = await User.findOne({
      where: {
        email: req.body.email
      }
    })
    if (!user) {
      return res.status(404).send("User not found!")
    }
    if (!await bcrypt.compare(req.body.password, user.password)) {
      return res.status(400).send("Invalid password!")
    }
    const token = jwt.sign({ id: user.id }, "secret");
    res.cookie("jwt", token, {
      httpOnly: true,
      maxAge: 24 * 60 * 60 * 1000 //1 day
    })
    res.send("success!")
    // res.send({ token: await User.authenticate(req.body) });
  } catch (err) {
    next(err)
  }
})




router.post('/signup', async (req, res, next) => {
  try {
    const salt = await bcrypt.genSalt(10)
    const hashedPassword = await bcrypt.hash(req.body.password, salt)

    const user = await User.create({
      username: req.body.username,
      email: req.body.email,
      password: hashedPassword
    })

    const result = await user.save()
    const { password, ...data } = await result.toJSON()
    res.send(data)
    // res.send({ token: await user.generateToken() })
  } catch (err) {
    if (err.name === 'SequelizeUniqueConstraintError') {
      res.status(401).send('User already exists')
    } else {
      next(err)
    }
  }
})



router.get('/user', async (req, res, next) => {
  try {
    const cookie = await req.cookies['jwt']


    const claims = jwt.verify(cookie, "secret")

    if (!claims) {
      return res.status(400).send("please login!")
    }

    const user = await User.findOne({ where: { id: claims.id } })
    const { password, ...data } = await user.toJSON()
    res.send(data)
  } catch (err) {
    next(err)
  }
})


router.post('/logout', async (req, res, next) => {
  try {
    res.cookie('jwt', '', {
      maxAge: 0
    })
    res.send("logout succesfully!")
  } catch (err) {
    next(err)
  }
})
module.exports = router;
