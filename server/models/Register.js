import mongoose from "mongoose";

const registerSchema = new mongoose.Schema({
    fullName: {
        type: String,
        required: true
    },    
    email: {
        type: String,
        required: true,
        unique: true
    },
    phoneNumber: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    courseType: {
        type: String,
        required: true
    }
});


const registerModel = new mongoose.model("Register", registerSchema, "form_register");


export default registerModel;