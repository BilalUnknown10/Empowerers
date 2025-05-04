import { dbConnect } from "@/utils/dbConnect";
import Blog from "@/models/Blog_model";

export default async function all_blogs (req, res) {
    if(req.method !== "GET") return res.status(405).end();
    
    try {
        await dbConnect();
        const all_blogs = await Blog.find();
        return res.status(200).json(all_blogs);
    } catch (error) {
        console.log(error);
    }
}