const User = require('../models/user');
const { hashPassword, comparePassword } = require('../helpers/auth');
const jwt = require('jsonwebtoken');

// Test endpoint
const test = (req, res) => {
    res.json('test is working');
};

// Register endpoint
const registerUser = async (req, res) => {
    try {
        const { name, email, password } = req.body;

        // Validate inputs
        if (!name) return res.json({ error: 'Name is required' });
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!email || !emailRegex.test(email)) {
            return res.json({ error: 'A valid email is required' });
        }
        if (!password || password.length < 6) {
            return res.json({ error: 'Password must be at least 6 characters long' });
        }

        // Check if email exists
        const exist = await User.findOne({ email });
        if (exist) {
            return res.json({ error: 'Email is already taken' });
        }

        // Hash password and create user
        const hashedPassword = await hashPassword(password);
        const user = await User.create({ name, email, password: hashedPassword });

        res.json(user);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Server error' });
    }
};

// Login endpoint
const loginUser = async (req, res) => {
    try {
        const { email, password } = req.body;

        // Check if user exists
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(404).json({ error: 'User not found' });
        }

        // Verify password
        const match = await comparePassword(password, user.password);
        if (match) {
            const token = jwt.sign({ email: user.email, id: user._id, name: user.name }, process.env.JWT_SECRET, {});
            return res.cookie('token', token).json(user);
        } else {
            return res.status(400).json({ error: 'Incorrect password' });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Server error' });
    }
};

// Profile endpoint
const getProfile = async (req, res) => {
    try {
        const { token } = req.cookies;
        if (!token) return res.status(401).json({ error: 'Unauthorized' });

        jwt.verify(token, process.env.JWT_SECRET, {}, async (err, decoded) => {
            if (err) return res.status(403).json({ error: 'Invalid token' });

            const user = await User.findById(decoded.id).select('-password');
            if (!user) return res.status(404).json({ error: 'User not found' });

            res.json(user);
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Server error' });
    }
};

// Find matches endpoint
const findMatch = async (req, res) => {
    try {
        const { token } = req.cookies;
        if (!token) return res.status(401).json({ error: 'Unauthorized' });

        jwt.verify(token, process.env.JWT_SECRET, {}, async (err, decoded) => {
            if (err) return res.status(403).json({ error: 'Invalid token' });

            const currentUser = await User.findById(decoded.id);
            if (!currentUser) return res.status(404).json({ error: 'User not found' });

            const potentialMatches = await User.find({
                _id: { $ne: currentUser._id },
                skillLevel: currentUser.skillLevel,
                preferredSport: currentUser.preferredSport,
                status: 'Available',
            }).select('-password');

            res.json(potentialMatches);
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Server error' });
    }
};

// Update profile endpoint
const updateUserProfile = async (req, res) => {
    try {
        const { token } = req.cookies;
        const { skillLevel, preferredSport, status } = req.body;
        if (!token) return res.status(401).json({ error: 'Unauthorized' });

        jwt.verify(token, process.env.JWT_SECRET, {}, async (err, decoded) => {
            if (err) return res.status(403).json({ error: 'Invalid token' });

            const updatedUser = await User.findByIdAndUpdate(
                decoded.id,
                { skillLevel, preferredSport, status },
                { new: true, runValidators: true }
            );

            if (!updatedUser) return res.status(404).json({ error: 'User not found' });

            res.json({ message: 'Profile updated successfully', user: updatedUser });
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Server error' });
    }
};

// Export all controllers
module.exports = {
    test,
    registerUser,
    loginUser,
    getProfile,
    findMatch,
    updateUserProfile,
};
