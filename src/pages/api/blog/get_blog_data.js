import { dbConnect } from "@/utils/dbConnect";
import Blog from "@/models/Blog_model";

export default async function get_blog_data(req, res) {
  if (req.method !== "GET") return res.status(405).end();

  try {
    await dbConnect();

    const { id } = req.query;
console.log("from backend",id)
    if (!id) {
      return res.status(400).json({ error: "Blog ID is required" });
    }

    const blog = await Blog.findById(id);

    if (!blog) {
      return res.status(404).json({ error: "Blog not found" });
    }

    res.status(200).json(blog);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
}

