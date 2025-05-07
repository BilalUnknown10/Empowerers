"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import RichTextEditor from "@/components/TextEditor";
import { toast } from "react-toastify";

export default function EditTrainingPage({ params }) {
  const router = useRouter();
  const { id } = params;
  console.log(id)

  const [trainingName, setTrainingName] = useState("");
  const [trainingCategory, setTrainingCategory] = useState("");
  const [oldTrainingCategory, setOldTrainingCategory] = useState("")
  const [trainingDetails, setTrainingDetails] = useState("");
  const [trainingPrice, setTrainingPrice] = useState("");
  const [image, setImage] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);
  const [loading, setLoading] = useState(false);
  const [authToken, setAuthToken] = useState("");
  const [trainingMenu, setTrainingMenu] = useState([]);
  const [trainingMenuUpper, setTrainingMenuUpper] = useState([]);

  console.log(trainingMenu);
  console.log(trainingMenuUpper);
  console.log("old",oldTrainingCategory)

  const getAllServices = async () => {
      try {
        const response = await axios.get('/api/trainingMenu/all_training_menu');
        setTrainingMenuUpper(response.data);
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


  // Fetch blog data
  useEffect(() => {
    getAllServices();
     const getToken = localStorage.getItem("token");
    if(getToken){
      setAuthToken(getToken);
    }
    const fetchBlogData = async () => {
      try {
        const response = await axios.get(`/api/training/get_trainingById?id=${id}`);
        const { trainingName, trainingDetails, trainingCategory, imageUrl, trainingPrice } = response.data;
        // console.log(response.data); // Debugging
  
        setTrainingName(trainingName);
        setTrainingCategory(trainingCategory);
        setTrainingDetails(trainingDetails);
        setTrainingPrice(trainingPrice)
  
        // Ensure correct image handling
        if (imageUrl) {
          setImagePreview(imageUrl);
        }

        if(trainingCategory){
             const splitCategory = trainingCategory.split("-");
            setOldTrainingCategory(splitCategory);
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
      formData.append("trainingName", trainingName);
      formData.append("trainingDetails", trainingDetails);
      formData.append("trainingCategory", trainingCategory);
      formData.append("trainingPrice", trainingPrice);
      if (image) formData.append("image", image);

      await axios.patch(`/api/training/update_training?id=${id}`, formData, {
        headers: { 
          "Content-Type": "multipart/form-data",
          "Authorization": `Bearer ${authToken}`
         },
      });

      router.push(`/dashboard/admin/training/${trainingCategory}`); // Redirect to blog list after success
      toast.success("Training updated successfully");
    } catch (error) {
      console.error("Error updating blog:", error);
      toast.error(error.response.data);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white shadow-md rounded-md">
      <h1 className="text-2xl font-bold mb-4">Edit Training</h1>

      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Title */}
        <input
          type="text"
          placeholder="Title"
          value={trainingName}
          onChange={(e) => setTrainingName(e.target.value)}
          className="w-full p-2 border rounded"
          required
        />

        {/* select training */}
         <select name="cars" id="cars" onChange={(e) => (setTrainingCategory(e.target.value))}
            className="w-full p-2 border rounded">
              <option>{trainingCategory}</option>
              <option value={"main-training"}>Main Training</option>
              {trainingMenu.length > 0 ? trainingMenu.map((menu,i) => (
                <option key={menu._id} value = {menu}>{trainingMenuUpper[i].Training_Menu}</option>
              )):""}
        </select>

        {/* Tags */}
        <input
          type="text"
          placeholder="Tags (comma-separated)"
          value={trainingDetails}
          onChange={(e) => setTrainingDetails(e.target.value)}
          className="w-full p-2 border rounded"
        />

          {/* Training Price */}
       {trainingCategory !== "main-training" ?  <input
          type="text"
          placeholder="Training price"
          value={trainingPrice}
          onChange={(e) => setTrainingPrice(e.target.value)}
          className="w-full p-2 border rounded"
        />:""}

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
        {/* <RichTextEditor value={description} onChange={setDescription} /> */}

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
