import Admin from "../../Models/Admin.js";

export const fetchProfile = async (req, res) => {

    try {
        const data = await Admin.find({ _id: "646f45a37d3ace02a2ff205b" });

        res.status(200).json(data[0]);
    } catch (error) {
       console.log(error.message);
        res.status(500).json({ message: error.message });
    }
}

export const updateProfile = async (req, res) => {
    const { admin } = req.body;
    
    try {
        const data = await Admin.findByIdAndUpdate( "646f45a37d3ace02a2ff205b", admin );
        
        if(data != null) {
            res.status(200).json(admin);
        } else {
            res.status(400).json({ message: "Admin does not exist"});
        }
    } catch (error) {
       console.log(error.message);
        res.status(500).json({ message: error.message });
    }
}