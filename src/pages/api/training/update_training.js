import { dbConnect } from "@/utils/dbConnect";
import Training from "@/models/Training_model";
import { deleteOnCloudinary, uploadOnCloudinary } from "@/utils/cloudinary";
import uploadMiddleware from "@/utils/uploadMiddleware";
import authMiddleware from "@/utils/authMiddleware";


export const config = {
  api : {bodyParser : false}
}

const update_training = async (req, res) => {
  if (req.method !== "PATCH") return res.status(405).end();

  try {
     const auth = await authMiddleware(req, res);
            if (auth !== true) return;
    await uploadMiddleware(req,res);
    await dbConnect();

    const { id } = req.query;

    if (!id) {
      return res.status(400).json("id are required");
    }

    const newImage = req.file?.path;

    if(newImage){
      const oldImageUrl = await Training.findById(id);
      await deleteOnCloudinary(oldImageUrl?.publicId);
    }

    const newImageUrl = await uploadOnCloudinary(newImage);

    const { trainingName, trainingDetails, trainingCategory, trainingPrice } = req.body;

    const trainingDetailsConvertToArray = trainingDetails.split(",");

    const imageUrl = newImageUrl?.url;
    const publicId = newImageUrl?.public_id

    const update_training = await Training.findByIdAndUpdate(
      id,
      {
        $set: {
          imageUrl,
          publicId,
          trainingName,
          trainingDetails : trainingDetailsConvertToArray,
          trainingCategory,
          trainingPrice
        },
      },
      { new: true }
    );

    if (!update_training) {
      return res.status(400).json("training Not Found");
    }

    return res.status(200).json(update_training);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: error.message });
  }
};

export default update_training;
