import { dbConnect } from "@/utils/dbConnect";
import Offer from "@/models/Offer_model";

const getOffers = async (req, res) => {
    if(req.method !== "GET") return res.status(405).end();

    await dbConnect();

    try {
        const getOffers = await Offer.find();

        return res.status(200).json(getOffers)
    } catch (error) {
        console.log(error)
    }
};

export default getOffers;