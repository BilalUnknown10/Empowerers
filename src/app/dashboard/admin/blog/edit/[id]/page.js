"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import RichTextEditor from "@/components/TextEditor";
import { toast } from "react-toastify";

export default function EditBlogPage({ params }) {
  const router = useRouter();
  const { id } = params;

  const [title, setTitle] = useState("");
  const [tags, setTags] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);
  const [loading, setLoading] = useState(false);
  const [authToken, setAuthToken] = useState("");

  // Fetch blog data
  useEffect(() => {

    const getToken = localStorage.getItem("token");
      if(getToken){
        setAuthToken(getToken);
      }

    const fetchBlogData = async () => {
      try {
        const response = await axios.get(`/api/blog/get_blog_data?id=${id}`);
        const { title, tags, description, imageUrl } = response.data;
        console.log(response.data); // Debugging
  
        setTitle(title);
        setTags(tags);
        setDescription(description);
  
        // Ensure correct image handling
        if (imageUrl) {
          setImagePreview(imageUrl);
        }
      } catch (error) {
        console.error("Error fetching blog data:", error);
      }
    };
  
    fetchBlogData();
  }, [id]);
  

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
      if (image) formData.append("image", image);

      await axios.patch(`/api/blog/update_blog?id=${id}`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
          "Authorization": `Bearer ${authToken}` },
      });

      router.push("/dashboard/admin/blog"); // Redirect to blog list after success
      toast.success("Blog updated successfully");
    } catch (error) {
      console.error("Error updating blog:", error);
      toast.error(error.response.data);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white shadow-md rounded-md">
      <h1 className="text-2xl font-bold mb-4">Edit Blog</h1>

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
        <input
          type="file"
          accept="image/*"
          onChange={handleImageChange}
          className="w-full p-2 border rounded"
        />

        {imagePreview && (
          <img
            src={imagePreview}
            alt="Preview"
            className="w-full h-40 object-cover rounded"
          />
        )}

        {/* Rich Text Editor for Description */}
        <RichTextEditor value={description} onChange={setDescription} />

        <button
          type="submit"
          disabled={loading}
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          {loading ? "Updating..." : "Submit"}
        </button>
      </form>
    </div>
  );
}
