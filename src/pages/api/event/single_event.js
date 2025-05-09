import { dbConnect } from "@/utils/dbConnect";
import Event from "@/models/Event_model";

const singleEvent = async (req, res) => {

    if(req.method !== "GET") return res.status(405).end();

    await dbConnect();

    try {
        const {id} = req.query;
        if(!id) return res.status(400).json("Id are required");

        const singleEvent = await Event.findById(id);

        if(!singleEvent) return res.status(400).json("Document not found");

        console.log(singleEvent)

        return res.status(200).json(singleEvent);

    } catch (error) {
        console.log(error)
        return res.status(400).json("Internal Server");
    };
};

export default singleEvent;