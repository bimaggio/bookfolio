const cookieController = {};
const User = require('../models/userModel.js');

cookieController.setSSIDCookie = (req, res, next) => {
  const cookieValue = res.locals.user.id;
  const cookieKey = 'ssid';

  res.cookie(cookieKey, cookieValue, {
    httpOnly: true,
  });
  return next();
};

module.exports = cookieController;
