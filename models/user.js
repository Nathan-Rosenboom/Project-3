const mogoose = require("mongoose");
const Schema = mogoose.Schema;

const UserSchema = new Schema({
    firstName: {
        type: String,
        required: true,
    },
    lastName: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    }
});

const User = mongoose.model("Park", UserSchema);
module.exports = User;