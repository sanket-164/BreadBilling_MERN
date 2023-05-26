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
    image: {
        type: String,
        default: ""
    },
})

export default mongoose.model('Bread' , breadSchema);