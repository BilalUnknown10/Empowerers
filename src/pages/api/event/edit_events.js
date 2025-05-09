import Event from "@/models/Event_model";
import { dbConnect } from "@/utils/dbConnect";

const editEvent = async (req, res) => {
    if(req.method !== "PATCH") return res.status(405).end();
    await dbConnect();

    try {
        const {id} = req.query;
        if(!id) return res.status(400).json("Id are required");

        const {name, date, time} = req.body;

        const editEvent = await Event.findByIdAndUpdate(id,{
            $set : {
                name,
                date,
                time
            }
        });

        console.log(editEvent);

        return res.status(200).json("Event Updated Successfully")
    } catch (error) {
        console.log(error)
    }
};

export default editEvent;