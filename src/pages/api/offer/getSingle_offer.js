import { dbConnect } from "@/utils/dbConnect";
import Offer from "@/models/Offer_model";

const getSingleOffer = async (req, res) => {
    if(req.method !== "GET") return res.status(405).end();

    await dbConnect();

    try {

        const {id} = req.query;
        
        if(!id) return res.status(400).json("Id are required");

        const getSingleOffer = await Offer.findById(id);

        if(!getSingleOffer) return res.status(400).json("Offer Not Found");

        return res.status(200).json(getSingleOffer);

    } catch (error) {

        console.log(error);

    };
};

export default getSingleOffer;