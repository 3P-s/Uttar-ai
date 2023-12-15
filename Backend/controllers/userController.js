const User = require('../models/userModel');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { setUser } = require('../services/auth');

const signUp = async (req, res) => {

    const { name, email, password } = req.body;
    try {
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ message: 'User already exists' });
        }

        const hashedPassword = await bcrypt.hash(password, 10);
        await User.create({ name, email, password: hashedPassword });

        res.status(201).json({ message: 'User created successfully' });
    } catch (err) {
        console.log(err);
        res.status(500).json({ message: 'Something went wrong' });
    }
}

const login = async (req, res) => {
    const { email, password } = req.body;

    try {
        const exsistingUser = await User.findOne({ email });
        if (!exsistingUser) {
            return res.status(404).json({ message: 'User does not exist' });
        }

        const isPasswordCorrect = await bcrypt.compare(password, exsistingUser.password);
        if (!isPasswordCorrect) {
            return res.status(400).json({ message: 'Invalid credentials' });
        }

        const token = setUser(exsistingUser);
        res.cookie("token", token);
        res.status(201).json({ 'message': 'Login successful' , token});
    }
    catch (error) {
        res.status(500).json({ message: 'Something went wrong' });
    }
}

module.exports = { signUp, login };