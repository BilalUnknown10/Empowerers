import { dbConnect } from "@/utils/dbConnect";
import Offer from "@/models/Offer_model";

import { deleteOnCloudinary, uploadOnCloudinary } from "@/utils/cloudinary";
import uploadMiddleware from "@/utils/uploadMiddleware";
import authMiddleware from "@/utils/authMiddleware";

export const config = {
  api: { bodyParser: false },
};

const updateOffer = async (req, res) => {
  if (req.method !== "PATCH") return res.status(405).end();

  await dbConnect();

  try {

    const auth = await authMiddleware(req, res);
    if (auth !== true) return;
    await uploadMiddleware(req, res);

    const { id } = req.query;

    if (!id) {
      return res.status(400).json("id are required");
    }

    const newImage = req.file?.path;

    if (newImage) {
      const oldImageUrl = await Offer.findById(id);
      await deleteOnCloudinary(oldImageUrl?.publicId);
    }

    const newImageUrl = await uploadOnCloudinary(newImage);

    const {offerName, offerDetails} = req.body;

    if(!offerName || !offerDetails) return res.status(400).json("All field are required");

    const updateOffer = await Offer.findByIdAndUpdate(id,{
        $set : {
            offerName,
            offerDetails,
            publicId : newImageUrl?.public_id,
            imageUrl : newImageUrl?.url
        }
    });

    return res.status(200).json("Offer Updated Successfully");

  } catch (error) {
    console.log(error);
    return res.status(500).json("Internal Server Error")
  }
};

export default updateOffer;