import mongoose from "mongoose";

const billSchema = new mongoose.Schema({
    customer_name: {
        type: String,
        required: true,
    },
    customer_email: {
        type: String,
        required: true,
    },
    cashier_name: {
        type: String,
        required: true,
    },
    breads: {
        type: Object,
        required: true,
    },
    amount: {
        type: Number,
        required: true,
    },
    purchasedAt: {
        type: Date,
        required: true,
        default: Date.now(),
    }
})

export default mongoose.model('Bill' , billSchema);