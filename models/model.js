import mongoose from "mongoose";

const modelSchema = new mongoose.Schema({ 
    name : {type: String, required: true},
    age: Number,
    email: {type: String, required: true, unique: true},
    createdAt: {type: Date, default: Date.now },
    hobbies: [String],
});

const Model = mongoose.model("Model", modelSchema);

export default Model;
