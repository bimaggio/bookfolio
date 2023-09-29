const path = require('path');
const bcrypt = require('bcrypt');
const models = require('../models/userModel.js');
const userController = {};

// 1 - get all users
// 2 - res.locals
// 3 - next middleware

userController.getAllUsers = async (req, res, next) => {
  try {
    const users = await models.User.find({});
    res.locals.user = users;
    return next();
  } catch (err) {
    return next({
      log: `userController.getAllUsers: ERROR: ${err}`,
      message: {
        err: 'Error in userController.getAllUsers. Unsuccessful query for users!',
      },
      status: 400,
    });
  }
};

// 1 - create a user
// 2 - save to DB
// 3 - next middleware

userController.createUser = async (req, res, next) => {
  const { username, password } = req.body;
  const newUser = new models.User({
    username: username,
    password: password,
  });

  try {
    const user = await newUser.save();
    res.locals.user = user;
    return next();
  } catch (err) {
    return res.sendFile(
      path.resolve(__dirname, '../client/scripts/signup.html')
    );
  }
};

// 1 - search user in DB using data passed by user (req.body)
// 2 - handle edge cases, compare passwords, authenticate user if submitted password matches hashed password stored in DB
// 3 - next middleware

userController.verifyUser = async (req, res, next) => {
  const { username, password } = req.body;

  if (username.length === 0 || password.lenth === 0) {
    return next({
      log: `userController.verifyUser: ERROR: ${err}`,
      message: {
        err: 'Error in userController.verifyUser. Username or password is missing!',
      },
      status: 400,
    });
  }

  try {
    const user = await models.User.findOne({ username });
    if (!user) {
      console.log('We could not log you in. Sign up for an account!');
      res.redirect('/signup');
    } else {
      bcrypt.compare(password, user.password);
      if (!result) {
        console.log('We could not log you in. Sign up for an account');
        res.redirect('/signup');
      } else {
        res.locals.user = user;
        console.log('You are logged in!');
        return next();
      }
    }
  } catch (err) {
    return next({
      log: `userController.verifyUser: ERROR: ${err}`,
      message: {
        err: 'Error in userController.verifyUser. Unsuccessful user query!',
      },
      status: 400,
    });
  }
};

module.exports = userController;
