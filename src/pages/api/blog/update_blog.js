import { dbConnect } from "@/utils/dbConnect";
import Blog from "@/models/Blog_model";
import uploadMiddleware from "@/utils/uploadMiddleware";
import { deleteOnCloudinary, uploadOnCloudinary } from "@/utils/cloudinary";
import authMiddleware from "@/utils/authMiddleware";

export const config = {
  api : {bodyParser : false}
}

const update_blog = async (req, res) => {

  if (req.method !== "PATCH") return res.status(405).end();

  try {

     const auth = await authMiddleware(req, res);
            if (auth !== true) return;

    await uploadMiddleware(req, res);
    await dbConnect();

    
    const { id } = req.query;
    
    if (!id) {
      return res.status(400).json("id are required");
    }

    const newImage = req.file?.path;
    

     if(newImage){
      const oldImageUrl = await Blog.findById(id);
      
      await deleteOnCloudinary(oldImageUrl?.publicId);
    };

    const newImageUrl = await uploadOnCloudinary(newImage);
    
    const { title, tags, description } = req.body;
    const imageUrl = newImageUrl?.url;
    const publicId = newImageUrl?.public_id;

    const update_blog = await Blog.findByIdAndUpdate(
      id,
      {
        $set: {
          imageUrl,
          publicId,
          title,
          tags,
          description,
        },
      },
      { new: true }
    );

    if (!update_blog) {
      return res.status(400).json("Blog Not Found");
    }

    return res.status(200).json(update_blog);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: error.message });
  }
};

export default update_blog;
