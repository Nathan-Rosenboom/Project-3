const mogoose = require("mongoose");
const Schema = mogoose.Schema;

const ParkSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    address: {
        type: String,
        required: true,
    },
    playground: {
        type: Boolean,
        required: true,
    },
    toilets: {
        type: Boolean,
        required: true,
    },
    exerciseFacilities: {
        type: Boolean,
        required: true,
    }
});

const Park = mongoose.model("Park", ParkSchema);
module.exports = Park;