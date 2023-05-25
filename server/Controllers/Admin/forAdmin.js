import Admin from "../../Models/Admin.js";

export const fetchProfile = async (req, res) => {

    try {
        const data = await Admin.find();

        console.log(data)
        res.status(200).json(data);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

export const updateProfile = async (req, res) => {
    const { id } = req.params;
    const { admin } = req.body;
    try {
        const data = await Admin.findByIdAndUpdate( id, admin );

        if(data != null) {
            res.status(200).json(admin);
        } else {
            res.status(400).json({ message: "Admin does not exist"});
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}