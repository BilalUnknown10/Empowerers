import mongoose from "mongoose";

const blogSchema = new mongoose.Schema(
  {
    imageUrl: { type: String, required: true },
    publicId : {type : String, required : true},
    title: { type: String, required: true, trim: true },
    tags: { type: [String], default: [] },
    description: { type: String, required: true, trim: true },
  },
  { timestamps: true }
);

const Blog = mongoose.models.Blog || mongoose.model("Blog", blogSchema);

export default Blog;