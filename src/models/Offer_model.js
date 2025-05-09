import mongoose from "mongoose";


const offerSchema = new mongoose.Schema({
    offerName : String,
    offerDetails : String,
    publicId : String,
    imageUrl : String
});

const Offer = mongoose.models.Offer || mongoose.model("Offer", offerSchema);

export default Offer;