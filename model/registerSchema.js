const mongoose = require('mongoose');

const registerSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true, 
        trim: true,   
    }
}); 

const Register = mongoose.model("details", registerSchema);

module.exports = Register;
