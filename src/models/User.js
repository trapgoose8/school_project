import mongoose from "mongoose";

const {Schema} = mongoose;

const userSchema = new Schema({
    fullname: {
        type: String,
        required: true,
    },

    level: {
        type: String,
        required: true, 
    },

    password: {
        type: String,
        required: true,
    },

    fullfind: {
        type: String,
        required: true,
    },

    votedFor: {
        type: Number,
    },

    survey: {
        type: Array,
    }
});




export default mongoose.models.User || mongoose.model("User", userSchema);