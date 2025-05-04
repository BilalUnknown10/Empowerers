import { dbConnect } from "@/utils/dbConnect";
import Training from "@/models/Training_model";

const get_training_name = async (req, res) => {

    if (req.method !== "POST") return res.status(405).end();

    try {
        await dbConnect();
        
        const {trainingCategory} = req.query;
        console.log(trainingCategory)

        if(!trainingCategory) return res.status(400).json("Training Name are required");

        const getTrainingByName = await Training.aggregate([
            {
                $match : {trainingCategory}
            }
        ]);

        if(!getTrainingByName) return res.status(400).json("Training Not Found")

        return res.status(200).json(getTrainingByName);

    } catch (error) {
        console.log(error)
    }
};

export default get_training_name;