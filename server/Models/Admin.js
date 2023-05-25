import mongoose from "mongoose";

const adminSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    phone: {
        type: String,
        required: true,
    },
    image: {
        type: String,
        required: true,
    },
    gender: {
        type: String,
        required: true,
    },
    birthday: {
        type: Date,
        required: true,
    },
    joinedAt: {
        type: Date,
        required: true,
        default: Date.now(),
    }
})

export default mongoose.model('Admin', adminSchema);