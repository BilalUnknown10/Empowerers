import { dbConnect } from "@/utils/dbConnect";
import Training from "@/models/Training_model";


const get_trainingById = async (req, res) => {
    if(req.method !== "GET") return res.status(405).end();

    try {

        await dbConnect();

        const {id} = req.query;

        if(!id) return res.status(400).json("Id are required");

        const getById = await Training.findById(id);

        if(!getById) return res.status(400).json("Data Not Found");

        return res.status(200).json(getById);

    } catch (error) {
        console.log(error);
    }
};

export default get_trainingById;