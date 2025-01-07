const register = require('../model/registerSchema');

const getRegister = async (req, res) => {
    try {
        const data = await register.find({});
        res.status(200).json({
            status: "success",
            data
        });
    } catch (err) {
        res.status(500).json({
            status: "fail",
            message: err.message 
        });
    }
};

const postRegister = async (req, res) => {
    const { name } = req.body;

    if (!name) {
        return res.status(400).json({ 
            status: "fail",
            message: "Name is required"
        });
    }

    try {
        const data = await register.create({
            name
        });
        res.status(201).json({
            status: "success",
            data
        });
    } catch (err) {
        res.status(500).json({
            status: "fail",
            message: err.message 
        });
    }
};

module.exports = { getRegister, postRegister };
