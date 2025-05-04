import axios from 'axios';
import React, { useState } from 'react'

const Contact = () => {
  const [message, setMessage] = useState({
    name : "",
    email : "",
    subject : "",
    description : ""
  });

  const handleInput = (e) => {

    const { name, value } = e.target;
  setMessage((prevMessage) => ({
    ...prevMessage,
    [name]: value,
  }));

  }


  const sendMessage = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('/api/contact/create_form', message);
      console.log(response);
    } catch (error) {
      console.log(error);
    }


    console.log(message);
  };

  return (
    <div className='container mx-auto'>
        <div className="flex justify-center lg:flex-row flex-col md:px-24 px-10 items-center my-20 ">
      {/* Left side - Contact Form */}
      <div className="lg:w-1/2 ">
      
        <form className="mt-6 space-y-4">
          <div>
            <label className="block text-gray-700 font-medium">
              Name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name='name'
              value={message.name}
              onChange={handleInput}
              className="w-full mt-1 p-3 border rounded-md focus:ring focus:ring-green-200 outline-none"
              placeholder="Enter your name"
            />
          </div>
          <div>
            <label className="block text-gray-700 font-medium">
              Email <span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              name='email'
              value={message.email}
              onChange={handleInput}
              className="w-full mt-1 p-3 border rounded-md focus:ring focus:ring-green-200 outline-none"
              placeholder="Enter your email"
            />
          </div>
          <div>
            <label className="block text-gray-700 font-medium">
              Subject <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name='subject'
              value={message.subject}
              onChange={handleInput}
              className="w-full mt-1 p-3 border rounded-md focus:ring focus:ring-green-200 outline-none"
              placeholder="Enter subject"
            />
          </div>
          <div>
            <label className="block text-gray-700 font-medium">Description</label>
            <textarea
              rows="4"
              className="w-full mt-1 p-3 border max-h-40 min-h-10 rounded-md focus:ring focus:ring-green-200 outline-none"
              placeholder="Write your message"
              name='description'
              value={message.description}
              onChange={handleInput}
            ></textarea>
          </div>
          <button onClick={sendMessage}
          
          className="tracking-wide cursor-pointer text-[12px] font-bold text-white bg-[#29ab87] hover:text-[#29ab87] hover:bg-transparent border border-[#29ab87]  px-5 py-2 rounded-full transition-all duration-300 ease-in-out">
            Send Message
          </button>
        </form>
      </div>

      {/* Right side - Contact Details */}
      <div className="lg:w-1/2 flex justify-center items-center p-6">
        <div className="space-y-6">
          <div className='flex flex-col gap-5'>
            <h3 className="text-2xl font-bold text-gray-900">Visit us</h3>
            <p className="text-gray-600 mt-[-10px]">166-B, Model Town, Multan, 60700.</p>
          </div>
          <div className='flex flex-col gap-5'>
            <h3 className="text-2xl font-bold text-gray-900">Call us</h3>
            <p className="text-gray-600 mt-[-10px]">+92 30 8090 1111</p>
          </div>
          <div className='flex flex-col gap-5'>
            <h3 className="text-2xl font-bold text-gray-900">Email us</h3>
            <p className="text-gray-600 mt-[-10px]">info@empowerers.co</p>
          </div>
          <div className='flex flex-col gap-5'>
            <h3 className="text-2xl font-bold text-gray-900">Customer Support</h3>
            <p className="text-gray-600 mt-[-10px]">support@empowerers.co</p>
          </div>
        </div>
      </div>
    </div>
    </div>
  )
}

export default Contact