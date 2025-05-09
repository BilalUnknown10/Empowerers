"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import RichTextEditor from "@/components/TextEditor";
import { toast } from "react-toastify";

export default function AddTrainingPage() {

  const router = useRouter();
  const [name, setName] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [loading, setLoading] = useState(false);
  const [authToken, setAuthToken] = useState("");


  
  
  // Handle Form Submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
    //   const formData = new FormData();
    //   formData.append("name", name);
    //   formData.append("date", date);
    //   formData.append("time", time);

      const response = await axios.post("/api/event/create_event", {name,date,time}, {
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${authToken}`
         },
      });

      router.push(`/dashboard/admin/event`); // Redirect to event list after success
      toast.success("Event added successfully");
      setName("");
      setDate("");
      setTime("")
    } catch (error) {
      console.error("Error adding Event:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
      const getToken = localStorage.getItem("token");
    if(getToken){
      setAuthToken(getToken);
    }
  },[]);

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white shadow-md rounded-md">
      <h1 className="text-2xl font-bold mb-4">Add New Event</h1>

      <form onSubmit={handleSubmit} className="space-y-4">
          {/* Title */}
        <input
          type="text"
          placeholder="Event Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full p-2 border rounded"
          required
        />

        {/* date */}
        <input
          type="text"
          placeholder="Event Date  YY-MM-DD e.g 2025-05-20"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          className="w-full p-2 border rounded"
          required
        />

        {/* Title */}
        <input
          type="text"
          placeholder="Event Time e.g : 02:30"
          value={time}
          onChange={(e) => setTime(e.target.value)}
          className="w-full p-2 border rounded"
          required
        />

        {/* Submit Button */}
        <button type="submit" disabled={loading} className="bg-blue-500 text-white px-4 py-2 rounded">
          {loading ? "Adding..." : "Submit"}
        </button>
      </form>
    </div>
  );
}
