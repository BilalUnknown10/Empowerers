"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import RichTextEditor from "@/components/TextEditor";
import { toast } from "react-toastify";

export default function AddBlogPage() {
  const router = useRouter();
  const [title, setTitle] = useState("");
  const [tags, setTags] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);
  const [loading, setLoading] = useState(false);
  const [authToken, setAuthToken] = useState("");

  // Handle Image Selection
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setImage(file);
    setImagePreview(URL.createObjectURL(file)); // Show preview
  };

  // Handle Form Submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const formData = new FormData();
      formData.append("title", title);
      formData.append("tags", tags);
      formData.append("description", description);
      formData.append("image", image);

      const response = await axios.post("/api/blog/create_blog", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
          "Authorization": `Bearer ${authToken}`
         },
      });

      router.push("/dashboard/admin/blog"); // Redirect to blog list after success
      toast.success("Blog added successfully");
    } catch (error) {
      console.error("Error adding blog:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() =>{
    const getToken = localStorage.getItem("token");
      if(getToken){
        setAuthToken(getToken);
      }
  },[])

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white shadow-md rounded-md">
      <h1 className="text-2xl font-bold mb-4">Add New Blog</h1>

      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Title */}
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full p-2 border rounded"
          required
        />

        {/* Tags */}
        <input
          type="text"
          placeholder="Tags (comma-separated)"
          value={tags}
          onChange={(e) => setTags(e.target.value)}
          className="w-full p-2 border rounded"
        />

        {/* Image Upload */}
        <input type="file" accept="image/*" onChange={handleImageChange} className="w-full p-2 border rounded" required />
        
        {imagePreview && <img src={imagePreview} alt="Preview" className="w-full h-40 object-cover rounded" />}

        {/* Rich Text Editor for Description */}
        <RichTextEditor value={description} onChange={(e) => setDescription(e)} />

        {/* Submit Button */}
        <button type="submit" disabled={loading} className="bg-blue-500 text-white px-4 py-2 rounded">
          {loading ? "Adding..." : "Submit"}
        </button>
      </form>
    </div>
  );
}
