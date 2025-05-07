import Event from "@/models/Event_model";
import { dbConnect } from "@/utils/dbConnect";

const createEvent = async (req, res) => {
    if (req.method !== "POST") return res.status(405).end();

    try {
        await dbConnect();

        const { date, time, name } = req.body;

        if (!date || !time || !name) {
            return res.status(400).json( "All fields are required" );
        }

        const newEvent = await Event.create({ name, time, date });

        return res.status(201).json("Event created successfully");

    } catch (error) {
        console.error("Server error", error);
        return res.status(500).json(error);
    }
};

export default createEvent;
