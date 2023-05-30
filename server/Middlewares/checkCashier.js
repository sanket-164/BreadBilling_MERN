import Cashier from '../Models/Cashier.js';

const checkCashier = async (req, res, next) => {
    try {
        const admin = await Cashier.exists({ _id: req.user.id });
        
        if(!admin) return res.json({ error: 'Cashier is allowed to access this information'})

        next();
    } catch (error) {
        console.log(error.message);
        res.status(500).json({ error: "Authentication did not happen" })
    }
}

export default checkCashier