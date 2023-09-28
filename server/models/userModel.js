const mongoose = require('mongoose');

const MONGO_URI = `mongodb+srv://bibaswe:${process.env.MONGO_PSWD}@cluster0.wlunsir.mongodb.net/booksearchapp?retryWrites=true&w=majority`;

mongoose
  .connect(MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log('Database connected with user!'))
  .catch((err) => console.log(err));

const Schema = mongoose.Schema;
const SALT_WORK_FACTOR = 10;
const bcrypt = require('bcrypt');

const userSchema = new Schema({
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
});

userSchema.pre('save', function (next) {
  bcrypt.hash(this.password, SALT_WORK_FACTOR, (err, hash) => {
    if (err) {
      return next({
        log: `userSchema: ERROR: ${err}`,
        message: {
          err: 'Error in userSchema. We could not hash the password!',
        },
        status: 400,
      });
    }
    this.password = hash;
    return next();
  });
});

const User = mongoose.model('users', userSchema);

module.exports = {
  User,
};
