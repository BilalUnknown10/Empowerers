"use client";
import { useEffect, useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import axios from "axios";
import BlogCard from "@/components/Blog/EditableBlogForAdmin";
import { toast } from "react-toastify";



const BlogManager = () => {
  const router = useRouter();
  const [offers, setOffers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [deleteModalOpen, setDeleteModalOpen] = useState(false);
  const [deleteBlogId, setDeleteBlogId] = useState(null);
  const [authToken, setAuthToken] = useState("");

  useEffect(() => {

     const getToken = localStorage.getItem("token");
      if(getToken){
        setAuthToken(getToken);
      }

    const fetchBlogs = async () => {
      try {
        const res = await axios.get(`/api/offer/get_offers`);
        console.log(res.data);
        setOffers(res.data);
        setIsLoading(false);
      } catch (error) {
        console.error("Error fetching blogs:", error.response.data);
        setIsLoading(false);
      }
    };
    fetchBlogs();
  }, []);

  const handleEdit = (id) => {
    router.push(`/dashboard/admin/offer/editOffer/${id}`);
  };

  const openDeleteModal = (id) => {
    setDeleteBlogId(id);
    setDeleteModalOpen(true);

  };

  const closeDeleteModal = () => {
    setDeleteModalOpen(false);
    setDeleteBlogId(null);

  };

  const confirmDeleteBlog = async () => {
    try {
      await axios.delete(`/api/training/delete_training?id=${deleteBlogId}`,{
        headers : {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${authToken}`
        }
      });
      toast.success("Training deleted successfully");
      closeDeleteModal();
      const fetchBlogs = async () => {
        try {
          const res = await axios.post(`/api/offer/get_offers`);
          setOffers(res.data);
          setIsLoading(false);
        } catch (error) {
          console.error("Error fetching blogs:", error);
        }
      };
      fetchBlogs();
    } catch (error) {
      console.error("Error deleting blog:", error);
      toast.error(error.response.data);
    }
  };

  return (
    <div className="w-full mx-auto p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Manage Offers</h1>
        <button
          onClick={() => router.push("/dashboard/admin/offer/addOffer")}
          className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition"
        >
          + Add New Offer
        </button>
      </div>

      {isLoading ? (
        <div className="flex flex-col items-center">
          <div className="w-16 h-16 border-t-4 border-[#29ab87] border-solid rounded-full animate-spin"></div>
        </div>
      ) : (
        <div className="md:flex flex-wrap justify-center mt-7 gap-10 items-center lg:flex-row flex-col  ">
          {offers.map((data, index) => {
            return (
              <div
                key={index}
                // onClick={() => router.push(`/ebay-training/${data.id}`)}
                className="border my-5 lg:w-[350px] border-gray-300 hover:shadow-2xl transition-all ease-in-out duration-300 rounded-2xl bg-white overflow-hidden mt-5 sm:mt-0 flex flex-col min-h-[250px]"
              >
                <img
                  src={`${data.imageUrl}`}
                  alt="no Image"
                  className="hover:cursor-pointer rounded-t-md  h-[100px]"
                />
                <div className="mx-4 my-5 font-bold text-xl">
                  Offer Name : {data.offerName}
                </div>
                <div className=" m-4 flex gap-3">
                   <p className="font-bold"> Offer Details :</p> {data.offerDetails}
                </div>
                {deleteModalOpen && (
                <div className="fixed inset-0 flex items-center justify-center bg-transparent backdrop-blur-md bg-opacity-50">
                  <div className="bg-white p-6 rounded-lg shadow-lg">
                    <p className="mb-4">Are you sure you want to delete this offer?</p>
                    <div className="flex justify-end gap-4">
                      <button
                        onClick={closeDeleteModal}
                        className="px-4 py-2 bg-gray-300 rounded-lg hover:bg-gray-400 transition"
                      >
                        Cancel
                      </button>
                      <button
                        onClick={confirmDeleteBlog}
                        className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-700 transition"
                      >
                        Delete
                      </button>
                    </div>
                  </div>
                </div>
               )}
                <div className="flex justify-between px-5 pb-5 gap-2 mt-auto">
                  <button
                    onClick={() => handleEdit(data._id)}
                    className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-700 transition">
                    Edit
                  </button>
                  <button
                    onClick={() => openDeleteModal(data._id)}
                    className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-700 transition">
                    Delete
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default BlogManager;
