import { dbConnect } from "@/utils/dbConnect";
import Training from "@/models/Training_model";
import uploadMiddleware from "@/utils/uploadMiddleware";
import { uploadOnCloudinary } from "@/utils/cloudinary";
import authMiddleware from "@/utils/authMiddleware";

export const config = {
    api : {bodyParser : false}
}

export default async function create_training (req, res) {
    if(req.method !== "POST") return res.status(405).end();

    try {
         const auth = await authMiddleware(req, res);
                if (auth !== true) return;
         await uploadMiddleware(req, res);
            
            const localFilePath = req.file?.path;
        
            if(!localFilePath) return res.status(400).json("Image are required");
            
            const cloudinaryFilePath = await uploadOnCloudinary(localFilePath);

        dbConnect();

        const {trainingName, trainingDetails, trainingCategory, trainingPrice} = req.body;

        const imageUrl = cloudinaryFilePath?.url;
        const publicId = cloudinaryFilePath?.public_id;
        
        if([trainingDetails, trainingName].some(value => value === !value)) {return "All field are required"}
        
        const trainingDetailsConvertToArray = trainingDetails.split(",");
        console.log(trainingDetailsConvertToArray)
        const createTraining = await Training.create({
            imageUrl,
            publicId,
            trainingCategory,
            trainingName,
            trainingDetails:trainingDetailsConvertToArray,
            trainingPrice
        });

        return res.status(200).json({message : "Training details add successfully", createTraining});
        
    } catch (error) {
        console.log(error)
    }

}