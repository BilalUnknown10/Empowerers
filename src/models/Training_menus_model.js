import mongoose from "mongoose";

const trainingMenu = new mongoose.Schema({
    Training_Menu : {type:String, required : true},
});

const TrainingMenu = mongoose.models.TrainingMenu || mongoose.model("TrainingMenu", trainingMenu);

export default TrainingMenu;