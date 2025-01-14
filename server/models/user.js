const mongoose = require('mongoose')
const {Schema} = mongoose

// Define the User Schema
const userSchema = new Schema({
    name: {
        type: String,
        required: true, // Name is required
    },
    email: {
        type: String,
        unique: true,
        required: true, // Email is required
    },
    password: {
        type: String,
        required: true, // Password is required
    },
    skillLevel: {
        type: String,
        enum: ['Beginner', 'Intermediate', 'Advanced'], // Optional enum for valid values
        default: 'Beginner', // Default value
    },
    preferredSport: {
        type: String,
        default: 'Basketball', // Default sport
    },
    status: {
        type: String,
        enum: ['Available', 'Busy'], // Optional enum for valid values
        default: 'Available', // Default value
    },
});

const UserModel = mongoose.model('User', userSchema);
module.exports = UserModel;