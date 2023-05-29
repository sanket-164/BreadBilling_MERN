import Bread from "../../Models/Bread.js";

export const fetchBread = async (req, res) => {
    const { id } = req.params;

    try {
        const breads = await Bread.find({ _id: id });
        
        if(breads.length > 0) {
            res.status(200).json(breads);
        } else {
            res.status(400).json({ message: "Bread is not availabel"});
        }
    } catch (error) {
       console.log(error.message);
        res.status(500).json({ message: error.message });
    }
}

export const fetchBreads = async (req, res) => {

    try {
        const breads = await Bread.find();

        res.status(200).json(breads);
    } catch (error) {
       console.log(error.message);
        res.status(500).json({ message: error.message });
    }
}

export const addBread = async (req, res) => {
    const { bread } = req.body;
    console.log(bread)
    try {
        const data = await Bread.create(bread);
        
        res.status(201).json(data);
    } catch (error) {
       console.log(error.message);
        res.status(500).json({ message: error.message });
    }
}

export const updateBread = async (req, res) => {
    const { id } = req.params;
    const { bread } = req.body;

    console.log(bread);

    try {
        const data = await Bread.findByIdAndUpdate( id, bread);

        if(data != null) {
            res.status(200).json(data);
        } else {
            res.status(400).json({ message: "Bread is not availabel"});
        }
    } catch (error) {
       console.log(error.message);
        res.status(500).json({ message: error.message });
    }
}


export const deleteBread = async (req, res) => {
    const { id } = req.params;

    try {
        const data = await Bread.findByIdAndDelete( id );

        if(data != null) {
            res.status(200).json(data);
        } else {
            res.status(400).json({ message: "Bread not availabel"});
        }

    } catch (error) {
       console.log(error.message);
        res.status(500).json({ message: error.message });
    }
}