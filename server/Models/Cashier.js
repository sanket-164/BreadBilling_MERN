import mongoose from "mongoose";

const cashierSchema = new mongoose.Schema({
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
    },
    gender:{
        type: String,
        required: true,
    },
    birthday: {
        type: Date,
        required: true,
    },
    joinedAt: {
        type: Date
    }
})

export default mongoose.model('Cashier' , cashierSchema);