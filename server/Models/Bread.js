import mongoose from "mongoose";

const breadSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    amount: {
        type: Number,
        required: true,
    },
    description: {
        type: String,
    },
    img: {
        type: String,
    }
})

export default mongoose.model('Bread' , breadSchema);