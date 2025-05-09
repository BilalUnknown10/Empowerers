import Event from "@/models/Event_model";
import { dbConnect } from "@/utils/dbConnect";

const deleteEvent = async (req, res) => {
    if(req.method !== "DELETE") return res.status(405).end();

    try {
        
        const {id} = req.query;

        await dbConnect();

        if(!id) return res.status(400).json("id are required");

        const deleteEvent = await Event.findByIdAndDelete(id);

        if(!deleteEvent) return res.status(400).json("document not found");

        return res.status(200).json("Event Deleted Successfully");
    } catch (error) {
        console.log(error)
         return res.status(500).json("Internal server error");
    }
};

export default deleteEvent;