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
    cashier_id: {
        type: String,
        required: true,
    },
    breads: {
        type: Object,
        required: true
    },
    totalAmount:{
        type: Number,
        required: true
    },
    purchasedAt:{
        type: Date,
        required: true
    }
})

export default mongoose.model('Bill' , billSchema);