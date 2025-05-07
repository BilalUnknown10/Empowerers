import mongoose from "mongoose";

const eventSchema = new mongoose.Schema({
    name : String,
    date : String,
    time : String
});

const Event = mongoose.models.Event || mongoose.model("Event", eventSchema);

export default Event;