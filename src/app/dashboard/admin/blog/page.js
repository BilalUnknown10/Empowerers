"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import BlogCard from "@/components/Blog/EditableBlogForAdmin";
import { toast } from "react-toastify";

const BlogManager = () => {
  const router = useRouter();
  const [blogs, setBlogs] = useState([]);
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
        const res = await axios.get("/api/blog/all_blog");
        setBlogs(res.data);
        console.log(res.data.tags);
        setIsLoading(false);
      } catch (error) {
        console.error("Error fetching blogs:", error);
      }
    };
    fetchBlogs();
  }, []);

  const handleEdit = (id) => {
    router.push(`/dashboard/admin/blog/edit/${id}`);
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
      await axios.delete(`/api/blog/delete_blog?id=${deleteBlogId}`,{
        headers : {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${authToken}`
        }
      });
      toast.success("Blog deleted successfully");
      closeDeleteModal();
      const fetchBlogs = async () => {
        try {
          const res = await axios.get("/api/blog/all_blog");
          setBlogs(res.data);
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
        <h1 className="text-2xl font-bold">Manage Blogs</h1>
        <button
          onClick={() => router.push("/dashboard/admin/blog/new")}
          className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition"
        >
          + Add New Blog
        </button>
      </div>

      {isLoading ? (
        <div className="flex flex-col items-center">
          <div className="w-16 h-16 border-t-4 border-[#29ab87] border-solid rounded-full animate-spin"></div>
        </div>
      ) : (
        <div className="space-y-4 flex flex-wrap gap-10">
          {blogs.map((blog, index) => (
            <div key={index} className="w-[80%] lg:w-[30%]">
              <BlogCard
                imgSrc={blog.imageUrl}
                date={blog.date}
                link={blog._id}
                title={blog.title}
                description={blog.description}
                onEdit={() => handleEdit(blog.id)}
                onDelete={() => openDeleteModal(blog._id)}
              />
            </div>
          ))}
        </div>
      )}

      {deleteModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-transparent backdrop-blur-md bg-opacity-50">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <p className="mb-4">Are you sure you want to delete this blog?</p>
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
    </div>
  );
};

export default BlogManager;
