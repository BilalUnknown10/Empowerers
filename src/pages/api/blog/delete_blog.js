import { dbConnect } from "@/utils/dbConnect";
import Blog from "@/models/Blog_model";
import { deleteOnCloudinary } from "@/utils/cloudinary";
import authMiddleware from "@/utils/authMiddleware";

const delete_blog = async (req, res) => {
    if(req.method !== "DELETE") return res.status(405).end();

    try {
        await dbConnect();
         const auth = await authMiddleware(req, res);
                if (auth !== true) return;

        const {id} = req.query;

        if(!id) {
            return res.status(400).json("Id are required");
        }

        const delete_blog = await Blog.findByIdAndDelete(id);

        await deleteOnCloudinary(delete_blog.publicId);

        if(!delete_blog) return res.status(400).json("Blog Not Found");

        return res.status(200).json({message : "Blog Delete Successfully"});

    } catch (error) {

        console.log(error.message);
        return res.status(500).json({error : error.message});
        
    }
}

export default delete_blog;