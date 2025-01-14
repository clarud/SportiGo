const express = require('express');
const router = express.Router();
const cors = require('cors');
const {
    test,
    registerUser,
    loginUser,
    getProfile,
    findMatch,
    updateUserProfile,
} = require('../controllers/authController');

// Enable CORS middleware
router.use(
    cors({
        credentials: true, // Allows credentials (e.g., cookies) to be sent with the request
        origin: 'http://localhost:5173', // Replace with your frontend's origin
    })
);

// Define routes
router.get('/', test); // Test endpoint
router.post('/register', registerUser); // Registration endpoint
router.post('/login', loginUser); // Login endpoint
router.get('/profile', getProfile); // Profile retrieval endpoint
router.get('/match', findMatch); // Find match endpoint
router.put('/update-profile', updateUserProfile); // Update profile endpoint

// Export the router to be used in your main server file
module.exports = router;
