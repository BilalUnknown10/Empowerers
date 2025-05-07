"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import RichTextEditor from "@/components/TextEditor";
import { toast } from "react-toastify";

export default function AddTrainingPage() {

  const router = useRouter();
  const [trainingName, setTrainingName] = useState("");
  const [trainingDetails, setTags] = useState("");
  const [trainingCategory, setTrainingCategory] = useState("");
  const [trainingPrice, setTrainingPrice] = useState("");
  const [image, setImage] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);
  const [loading, setLoading] = useState(false);
  const [authToken, setAuthToken] = useState("");
  const [trainingMenu, setTrainingMenu] = useState([]);

  console.log(trainingMenu);

  const getAllServices = async () => {
    try {
      const response = await axios.get('/api/trainingMenu/all_training_menu');
      const data = response.data;

      const formattedData = data.map((i) => {
      const removeSpace = i.Training_Menu.replace(/\s+/g, "-").toLowerCase();
      return removeSpace;
    });
      console.log(formattedData)
      setTrainingMenu(formattedData);
      // console.log(response.data);
    } catch (error) {
      console.log(error, "error in get all services in navbar")
    }
  };

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
      formData.append("trainingName", trainingName);
      formData.append("trainingDetails", trainingDetails);
      formData.append("trainingCategory", trainingCategory);
      formData.append("image", image);
      formData.append("trainingPrice", trainingPrice);

      const response = await axios.post("/api/training/create_training", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
          "Authorization": `Bearer ${authToken}`
         },
      });

      router.push(`/dashboard/admin/training/${trainingCategory}`); // Redirect to blog list after success
      toast.success("Training added successfully");
    } catch (error) {
      console.error("Error adding Training:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getAllServices();
      const getToken = localStorage.getItem("token");
    if(getToken){
      setAuthToken(getToken);
    }
  },[]);

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white shadow-md rounded-md">
      <h1 className="text-2xl font-bold mb-4">Add New Training</h1>

      <form onSubmit={handleSubmit} className="space-y-4">
          {/* Title */}
        <input
          type="text"
          placeholder="Training Name"
          value={trainingName}
          onChange={(e) => setTrainingName(e.target.value)}
          className="w-full p-2 border rounded"
          required
        />

        <select name="cars" id="cars" onChange={(e) => (setTrainingCategory(e.target.value))}
          className="w-full p-2 border rounded">
            <option value="select">Select</option>
            <option value="main-training">Main Training</option>
            {trainingMenu.length > 0 ? trainingMenu.map((menu) => (
              <option key={menu._id}>{menu}</option>
            )):""}
            {/* <option value="main">Main Training</option>
          <option value="tiktok-shop-training">TikTok Shop Training</option>
          <option value="ebay-training">eBay Training</option>
          <option value="etsy-training">Etsy Training</option> */}
      </select>

        {/* Tags */}
        <input
          type="text"
          placeholder="Bullets (comma-separated)"
          value={trainingDetails}
          onChange={(e) => setTags(e.target.value)}
          className="w-full p-2 border rounded"
        />

          {/* Price */}
          {trainingCategory !== "main-training" ?
         <input
         type="text"
         placeholder="Training price"
         value={trainingPrice}
         onChange={(e) => setTrainingPrice(e.target.value)}
         className="w-full p-2 border rounded"
         /> : <></>
        }

        {/* Image Upload */}
        <input type="file" accept="image/*" onChange={handleImageChange} className="w-full p-2 border rounded" required />
        
        {imagePreview && <img src={imagePreview} alt="Preview" className="w-full h-40 object-cover rounded" />}

        {/* Rich Text Editor for Description */}
        {/* <RichTextEditor value={description} onChange={(e) => setDescription(e)} /> */}

        {/* Submit Button */}
        <button type="submit" disabled={loading} className="bg-blue-500 text-white px-4 py-2 rounded">
          {loading ? "Adding..." : "Submit"}
        </button>
      </form>
    </div>
  );
}
