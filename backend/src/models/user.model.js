import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
    {
        email: {
            type: String,
            required: true,
            unique: true,   // unique index and unique constraint
        },
        fullName: {
            type: String,
            required: true,
        },
        password: {
            type: String,
            required: true,
            minlength: 6,   // minimum length of 6 characters
        },
        profilePic: {
            type: String,
            default: "",
        }
    }, 
    { timestamps: true }
);

const User = mongoose.model("User", userSchema);

export default User;