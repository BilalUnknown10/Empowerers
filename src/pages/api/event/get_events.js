import Event from "@/models/Event_model";
import { dbConnect } from "@/utils/dbConnect";


const getEvent = async (req, res) => {
    if (req.method !== "GET") return res.status(405).end();

    try {
        await dbConnect();

        const getEvents = await Event.find();

        return res.status(200).json(getEvents);
    } catch (error) {
        console.log(error);
    }
};

export default getEvent;
