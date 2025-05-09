import { dbConnect } from "@/utils/dbConnect";
import Offer from "@/models/Offer_model";
import uploadMiddleware from "@/utils/uploadMiddleware";
import { uploadOnCloudinary } from "@/utils/cloudinary";
import authMiddleware from "@/utils/authMiddleware";

export const config = {
    api : {bodyParser : false}
}

const createOffer = async (req, res) => {
  if (req.method !== "POST") return res.status(405).end();

  try {
    const auth = await authMiddleware(req, res);
    if (auth !== true) return;
    await uploadMiddleware(req, res);

    const localFilePath = req.file?.path;

    if (!localFilePath) return res.status(400).json("Image are required");

    const cloudinaryFilePath = await uploadOnCloudinary(localFilePath);

    await dbConnect();

    const { offerName, offerDetails } = req.body;

    const imageUrl = cloudinaryFilePath?.url;
    const publicId = cloudinaryFilePath?.public_id;

    if ([offerName, offerDetails].some((value) => value === !value)) {
      return "All field are required";
    }

    const createOffer = await Offer.create({
      offerName,
      offerDetails,
      publicId,
      imageUrl,
    });

    return res.status(201).json("Offer Created Successfully");
  } catch (error) {
    console.log(error);
  }
};

export default createOffer;
