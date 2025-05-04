import { dbConnect } from "@/utils/dbConnect";
import TrainingMenu from "@/models/Training_menus_model";

const all_trainingMenu = async (req, res) => {
    
    if(req.method !== "GET") return res.status(405).end();

    try {
        dbConnect();

        const all_trainingMenu = await TrainingMenu.find();

        return res.status(200).json(all_trainingMenu);
    } catch (error) {
        console.log(error);
    };
};

export default all_trainingMenu;