const mongoose = require("../config/db");

const schema = mongoose.Schema;

const PeopleSchema = new schema({
    name:String,
    age:Number,
    address:String,
    gender:String
});

const People = mongoose.model("People",PeopleSchema);

module.exports = People;