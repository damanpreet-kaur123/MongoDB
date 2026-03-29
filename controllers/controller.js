import Model from "../models/model.js";

export const createData = async (req, res) => {
    try {
        const { name, age, email, hobbies } = req.body;
        const data = new Model({name, age, email, hobbies});
        await data.save();
        return res.status(201).json(data);
    }catch (error) {
        return res
            .status(500)
            .json({ error: "Server error", details: error.message });
    }
};
