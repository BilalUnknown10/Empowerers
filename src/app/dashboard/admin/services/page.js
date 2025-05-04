"use client";
import { useState, useEffect } from "react";
import axios from "axios";
import { toast } from "react-toastify";

export default function ServicesTable() {
  const [services, setServices] = useState([]);
  const [openEdit, setOpenEdit] = useState(false);
  const [openDelete, setOpenDelete] = useState(false);
  const [openAdd, setOpenAdd] = useState(false);
  const [selectedService, setSelectedService] = useState(null);
  const [newService, setNewService] = useState("");

  useEffect(() => {
    fetchServices();
  }, []);

  const fetchServices = async () => {
    const response = await axios.get("/api/service/all_services");
    // console.log(response  );
    setServices(response.data);
  };

  const handleAddService = async () => {
    await axios.post("/api/service/create_service", { service: newService });
    setOpenAdd(false);
    toast.success("Service added successfully");
    fetchServices();
  };

  const handleEditService = async () => {
    await axios.patch(`/api/service/update_service?id=${selectedService._id}`, {
      service: selectedService.service,
    });
    toast.success("Service updated successfully");
    setOpenEdit(false);
    fetchServices();
  };

  const handleDeleteService = async () => {
    console.log(selectedService, "Selected Service"); // Ensure correct property is logged

    await axios.delete(`/api/service/delete_service?id=${selectedService._id}`);
    toast.success("Service deleted successfully");
    setOpenDelete(false);
    fetchServices();
  };

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-xl font-bold">Manage Services</h1>
        <button
          onClick={() => setOpenAdd(true)}
          className="bg-blue-500 text-white px-4 py-2 rounded-lg shadow hover:bg-blue-600"
        >
          Add Service
        </button>
      </div>
      <div className="bg-white shadow-lg rounded-lg overflow-hidden">
        <ul className="divide-y divide-gray-200">
          {services.map((service) => (
            <li key={service.id} className="p-4 flex justify-between items-center">
              <span>{service.service}</span>
              <div>
                <button
                  onClick={() => {
                    console.log(service);
                    setSelectedService(service);
                    setOpenEdit(true);
                  }}
                  className="bg-green-500 text-white px-3 py-1 rounded-lg shadow mr-2 hover:bg-green-600"
                >
                  Edit
                </button>
                <button
                  onClick={() => {
                    setSelectedService(service);
                    setOpenDelete(true);
                  }}
                  className="bg-red-500 text-white px-3 py-1 rounded-lg shadow hover:bg-red-600"
                >
                  Delete
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>

      {/* Edit Modal */}
      {openEdit && (
        <div className="fixed inset-0 flex items-center  justify-center bg-transparent backdrop-blur-md bg-opacity-50">
          <div className="bg-white p-6 rounded-lg w-[300px]  shadow-lg">
            <h2 className="text-lg font-bold">Edit Service</h2>
            <input
              type="text"
              value={selectedService.service}
              onChange={(e) =>
                setSelectedService({ ...selectedService, service: e.target.value })
              }
              className="border p-2 w-full mt-2"
            />
            <div className="flex justify-between">
              <button
                onClick={handleEditService}
                className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
              >
                Save
              </button>
              <button
                onClick={() => setOpenEdit(false)}
                className="mt-4 bg-gray-500 text-white px-4 py-2 rounded-lg hover:bg-gray-600"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Delete Modal */}
      {openDelete && (
        <div className="fixed inset-0 flex items-center  justify-center bg-transparent backdrop-blur-md bg-opacity-50">
          <div className="bg-white p-6 rounded-lg w-[300px]  shadow-lg">
            <h2 className="text-lg font-bold">Delete Service</h2>
            <p>Are you sure you want to delete {selectedService?.service}?</p>
            <div className="flex justify-between">

            <button
              onClick={handleDeleteService}
              className="mt-4 bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600"
            >
              Confirm
            </button>
            <button
              onClick={() => setOpenDelete(false)}
              className="mt-4 bg-gray-500 text-white px-4 py-2 rounded-lg hover:bg-gray-600"
            >
              Cancel
            </button>
          </div>
          </div>
        </div>
      )}

      {/* Add Service Modal */}
      {openAdd && (
        <div className="fixed inset-0 flex items-center  justify-center bg-transparent backdrop-blur-md bg-opacity-50">
          <div className="bg-white p-6 rounded-lg w-[300px]  shadow-lg">
            <h2 className="text-lg font-bold">Add New Service</h2>
            <input
              type="text"
              value={newService}
              onChange={(e) => setNewService(e.target.value)}
              className="border p-2 w-full mt-2"
            />
            <div className="flex justify-between">
              <button
                onClick={handleAddService}
                className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
              >
                Add
              </button>
              <button
                onClick={() => setOpenAdd(false)}
                className="mt-4 bg-gray-500 text-white px-4 py-2 rounded-lg hover:bg-gray-600"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
