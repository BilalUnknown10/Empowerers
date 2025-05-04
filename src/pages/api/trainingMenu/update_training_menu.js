import { dbConnect } from "@/utils/dbConnect";
import TrainingMenu from "@/models/Training_menus_model";
import authMiddleware from "@/utils/authMiddleware";


const update_trainingMenu = async (req, res) => {

    if(req.method !== "PATCH") return res.status(405).end();

    try {

        dbConnect();

         const auth = await authMiddleware(req, res);
                if (auth !== true) return;

        const {id} = req.query;
        const {Training_Menu} = req.body;

        if(!id) {
            return res.status(400).json("ID are required");
        };

        const update_trainingMenu = await TrainingMenu.findByIdAndUpdate(id,{$set : {Training_Menu}},{new : true});
        
        if(!update_trainingMenu) {
            return res.status(400).json("Training menu not found");
        }

        return res.status(200).json(update_trainingMenu);
    } catch (error) {
        console.log(error)
    }
};

export default update_trainingMenu;