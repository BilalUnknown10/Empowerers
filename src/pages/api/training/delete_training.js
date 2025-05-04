import { dbConnect } from "@/utils/dbConnect";
import Training from "@/models/Training_model";
import { deleteOnCloudinary } from "@/utils/cloudinary";
import authMiddleware from "@/utils/authMiddleware";

const delete_training = async (req, res) => {
  if (req.method !== "DELETE") return res.status(405).end();

  try {
    await dbConnect();
     const auth = await authMiddleware(req, res);
            if (auth !== true) return;

    const { id } = req.query;

    if (!id) {
      return res.status(400).json("Id are required");
    }

    const delete_training = await Training.findByIdAndDelete(id);

    if (!delete_training) return res.status(400).json("training Not Found");

    await deleteOnCloudinary(delete_training.publicId);

    return res.status(200).json({ message: "training Delete Successfully" });
  } catch (error) {
    console.log(error.message);
    return res.status(500).json({ error: error.message });
  }
};

export default delete_training;
