import { dbConnect } from "@/utils/dbConnect";
import Training from "@/models/Training_model";


export default async function all_trainings (req, res) {

    if(req.method !== "GET") return res.status(405).end();

    try {
        await dbConnect();
        const all_trainings = await Training.find();

        return res.status(200).json(all_trainings);
    } catch (error) {
        console.log(error);
    }
}