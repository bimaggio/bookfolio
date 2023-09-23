const mongoose = require('mongoose');

const MONGO_URI = `mongodb+srv://bibaswe:${process.env.MONGO_PSWD}@cluster0.wlunsir.mongodb.net/booksearchapp?retryWrites=true&w=majority`;

mongoose
  .connect(MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    dbName: 'booksearchapp',
  })
  .then(() => console.log('Database connected!'))
  .catch((err) => console.log(err));

const Schema = mongoose.Schema;

const userSchema = new Schema({
  title: String,
  author: String,
  description: String,
  review: String,
});

const User = mongoose.model('users', userSchema);

module.exports = {
  User,
};
