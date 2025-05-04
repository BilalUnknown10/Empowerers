"use client";
import axios from "axios";
import Link from "next/link";
import { useState } from "react";
import useUserStore from "@/store/useUserStore";
import { useRouter } from "next/navigation";
import {toast} from "react-toastify";

export default function LoginForm() {
  const { setIsLogin, setRole, setUsername} = useUserStore();
  const router = useRouter();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    keepSignedIn: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("/api/auth/login", formData);
      // alert(response.data);
      localStorage.setItem("token", response.data.token);
      localStorage.setItem("role", response.data.role);
      localStorage.setItem("isLogin", true);
      localStorage.setItem("username", response.data.username);
      setIsLogin(true);
      setRole(response.data.role);
      setUsername(response.data.username);
      router.push("/");
      toast.success(response.data.message);
    } catch (error) {
      console.log(error.response.data);
      toast.error(error.response.data);
    }
  };

  return (
    <div className="flex justify-center items-center container mx-auto md:py-[55px] py-[45px] px-10 md:px-24 md:h-[80vh]">
      <div className="bg-white p-8 rounded-lg shadow-md w-lg">
        <h2 className="text-2xl font-semibold mb-6">Hi, Welcome back!</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <input
              type="text"
              name="email"
              placeholder="Email or Email Address"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="mb-4">
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="flex items-center justify-between mb-6">
            <label className="flex items-center text-gray-600">
              <input
                type="checkbox"
                name="keepSignedIn"
                checked={formData.keepSignedIn}
                onChange={handleChange}
                className="mr-2"
              />
              Keep me signed in
            </label>
            <a href="#" className="text-blue-500 hover:underline">
              Forgot?
            </a>
          </div>
          <button
            type="submit"
            className="w-full bg-[#29AB87] text-white py-3 rounded-lg hover:bg-blue-700 transition"
          >
            Sign In
          </button>
        </form>
        <p className="mt-4 text-center text-gray-600">
          Don&apos;t have an account?{" "}
          <Link
            href="/auth/student-registeration"
            className="text-[#29AB87] hover:underline"
          >
            Register Now
          </Link>
        </p>
      </div>
    </div>
  );
}
