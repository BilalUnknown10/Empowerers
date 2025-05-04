"use client";
import { useState } from "react";

const dummyWishlist = [
  { id: 1, name: "Full-Stack Web Development", description: "Master front-end and back-end technologies." },
  { id: 2, name: "Python for Data Science", description: "Learn Python for machine learning and AI." },
];

export default function Wishlist() {
  const [wishlist, setWishlist] = useState(dummyWishlist);

  const removeFromWishlist = (id) => {
    setWishlist(wishlist.filter((course) => course.id !== id));
  };

  return (
    <div className="w-full max-w-4xl mx-auto mt-6">
      <h2 className="text-2xl font-semibold text-gray-700 text-center">Wishlist</h2>

      {wishlist.length === 0 ? (
        <div className="text-center mt-6">
          <p className="text-gray-500 mt-2">Your wishlist is empty</p>
        </div>
      ) : (
        <div className="space-y-4 mt-4">
          {wishlist.map((course) => (
            <div
              key={course.id}
              className="bg-white p-4 shadow-md rounded-md flex flex-col md:flex-row justify-between items-center"
            >
              <div className="text-left">
                <h3 className="text-lg font-semibold text-gray-700">{course.name}</h3>
                <p className="text-gray-500 text-sm">{course.description}</p>
              </div>
              <button
                onClick={() => removeFromWishlist(course.id)}
                className="mt-2 md:mt-0 bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600 transition"
              >
                Remove
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
