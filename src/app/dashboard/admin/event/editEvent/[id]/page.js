"use client";
import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import axios from "axios";
import RichTextEditor from "@/components/TextEditor";
import { toast } from "react-toastify";

export default function AddTrainingPage() {

  const router = useRouter();
  const params = useParams()
  const [name, setName] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [loading, setLoading] = useState(false);
  const [authToken, setAuthToken] = useState("");
  const [id, setId] = useState("")

 

  
  // Handle Form Submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
    //   const formData = new FormData();
    //   formData.append("name", name);
    //   formData.append("date", date);
    //   formData.append("time", time);

      const response = await axios.patch(`/api/event/edit_events?id=${id}`, {name,date,time}, {
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

  const getEvent = async () => {
    try {
      const response = await axios.get(`/api/event/single_event?id=${id}`);
      console.log(response.data);
      const {name, date, time} = response.data;
      setName(name);
      setDate(date);
      setTime(time);
    } catch (error) {
        console.log(error)
    }
  }

  useEffect(() => {
    
     const {id} = params;
     setId(id);

      const getToken = localStorage.getItem("token");
    if(getToken){
      setAuthToken(getToken);
    }
    getEvent();
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
          placeholder="Event Date  yy-mm-dd e.g 01-05-2025 "
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
