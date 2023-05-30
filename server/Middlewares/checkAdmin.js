import Admin from '../Models/Admin.js';

const checkAdmin = async (req, res, next) => {
    try {
        const admin = await Admin.exists({ _id: req.user.id });
        
        if(!admin) return res.json({ error: 'Admins are allowed to access this information'})

        next();
    } catch (error) {
        console.log(error.message);
        res.status(500).json({ error: "Authentication did not happen" })
    }
}

export default checkAdmin