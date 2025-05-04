"use client";

import { useState } from "react";

const CommentForm = () => {
  const [formData, setFormData] = useState({
    comment: "",
    name: "",
    email: "",
    website: "",
    saveInfo: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitted Comment:", formData);
    // Handle form submission logic here (e.g., API call)
  };

  return (
    <div className="container mx-auto bg-white p-6 rounded-lg">
      <h2 className="text-2xl font-bold mb-4">Leave a Reply</h2>
      <p className="text-gray-600 text-sm mb-4">
        Your email address will not be published. Required fields are marked *
      </p>
      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Comment */}
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Comment *
          </label>
          <textarea
            name="comment"
            value={formData.comment}
            onChange={handleChange}
            required
            className="w-full mt-1 p-3 border rounded-lg focus:ring focus:ring-blue-300"
            rows="4"
            placeholder="Write your comment..."
          ></textarea>
        </div>

        {/* Name */}
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Name *
          </label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full mt-1 p-3 border rounded-lg focus:ring focus:ring-blue-300"
            placeholder="Enter your name"
          />
        </div>

        {/* Email */}
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Email *
          </label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full mt-1 p-3 border rounded-lg focus:ring focus:ring-blue-300"
            placeholder="Enter your email"
          />
        </div>

        {/* Website */}
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Website
          </label>
          <input
            type="url"
            name="website"
            value={formData.website}
            onChange={handleChange}
            className="w-full mt-1 p-3 border rounded-lg focus:ring focus:ring-blue-300"
            placeholder="Enter your website (optional)"
          />
        </div>

        {/* Save Info Checkbox */}
        <div className="flex items-center">
          <input
            type="checkbox"
            name="saveInfo"
            checked={formData.saveInfo}
            onChange={handleChange}
            className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
          />
          <label className="ml-2 text-sm text-gray-700">
            Save my name, email, and website in this browser for the next time I
            comment.
          </label>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-blue-600 text-white font-semibold py-2 rounded-lg hover:bg-blue-700 transition"
        >
          Post Comment
        </button>
      </form>
    </div>
  );
};

export default CommentForm;
