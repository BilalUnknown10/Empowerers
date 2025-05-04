import mongoose, { mongo } from "mongoose";


const contactSchema = new mongoose.Schema({
    name : {type : String, required : true, trim : true},
    email : {type : String, required : true, trim : true},
    subject : {type : String, required : true, trim : true},
    description : {type : String, required : true, trim : true}
});

const Contact = mongoose.models.Contact || mongoose.model("Contact", contactSchema);

export default Contact;