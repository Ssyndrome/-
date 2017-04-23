const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const artSchema = new Schema({
    title: String,
    body: String,
    date: String
});

const art = mongoose.model('art', artSchema);
mongoose.Promise = global.Promise;

mongoose.connect('mongodb://127.0.0.1:27017/art');

module.exports = art;