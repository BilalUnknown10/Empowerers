import { dbConnect } from "@/utils/dbConnect";
import TrainingMenu from "@/models/Training_menus_model";
import authMiddleware from "@/utils/authMiddleware";

const  delete_trainingMenu = async (req, res) => {
    if(req.method !== "DELETE") return res.status(405).end();

    try {
        dbConnect();

         const auth = await authMiddleware(req, res);
                if (auth !== true) return;

        const {id} = req.query;

        if(!id) return res.status(400).json("ID are required");

        const delete_trainingMenu = await TrainingMenu.findByIdAndDelete(id);

        if(!delete_trainingMenu) return res.status(400).json("Training menu not found");

        return res.status(200).json("Training Menu delete successfully")
    } catch (error) {
        console.log(error);
    }
}

export default delete_trainingMenu;