"use client";

import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import axios from "axios";
import RichTextEditor from "@/components/TextEditor";
import { toast } from "react-toastify";

export default function AddTrainingPage() {
  const router = useRouter();
  const params = useParams();
  const [offerName, setOfferName] = useState("");
  const [offerDetails, setOfferDetails] = useState("");
  const [image, setImage] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);
  const [loading, setLoading] = useState(false);
  const [authToken, setAuthToken] = useState("");
  const [Id, setId] = useState("");


  const getAllServices = async (id) => {
    try {
      const response = await axios.get(`/api/offer/getSingle_offer?id=${id}`);
      const {offerName, offerDetails, imageUrl} = response.data;
      setOfferName(offerName);
      setOfferDetails(offerDetails);
      setImagePreview(imageUrl);
    } catch (error) {
      console.log(error, "error in get all offer")
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
      formData.append("offerName", offerName);
      formData.append("offerDetails", offerDetails);
      formData.append("image", image);

      const response = await axios.patch(`/api/offer/update_offer?id=${Id}`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
          "Authorization": `Bearer ${authToken}`
         },
      });

      router.push(`/dashboard/admin/offer`); // Redirect to blog list after success
      toast.success("Offer Updated successfully");
    } catch (error) {
      console.error("Error adding offer:", error);
    } finally {
      setLoading(false);
    }
  };

  
  useEffect(() => {

    const {id} = params;
    getAllServices(id);
    setId(id)
      const getToken = localStorage.getItem("token");
    if(getToken){
      setAuthToken(getToken);
    }
  },[]);

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white shadow-md rounded-md">
      <h1 className="text-2xl font-bold mb-4">Add New Offer</h1>

      <form onSubmit={handleSubmit} className="space-y-4">
          {/* Title */}
        <input
          type="text"
          placeholder="Offer Name"
          value={offerName}
          onChange={(e) => setOfferName(e.target.value)}
          className="w-full p-2 border rounded"
          required
        />

       

        {/* offer details */}
        <input
          type="text"
          placeholder="Offer Details"
          value={offerDetails}
          onChange={(e) => setOfferDetails(e.target.value)}
          className="w-full p-2 border rounded"
        />

        {/* Image Upload */}
        <input type="file" accept="image/*" onChange={handleImageChange} className="w-full p-2 border rounded" required />
        
        {imagePreview && <img src={imagePreview} alt="Preview" className="w-full h-40 object-cover rounded" />}

        {/* Submit Button */}
        <button type="submit" disabled={loading} className="bg-blue-500 text-white px-4 py-2 rounded">
          {loading ? "Adding..." : "Submit"}
        </button>
      </form>
    </div>
  );
}
