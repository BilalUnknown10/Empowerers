import mongoose from "mongoose";

const sub_servicesSchema = new mongoose.Schema({
    subService : {type : String, required : true},
    serviceId : {type : String, required : true}
});

const Sub_Services = mongoose.models.Sub_Services || mongoose.model("Sub_Services", sub_servicesSchema)

export default Sub_Services;