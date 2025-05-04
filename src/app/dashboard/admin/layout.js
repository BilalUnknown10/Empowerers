import Sidebar from "@/components/Dashboard/Sidebar";
export default function DashboardLayout({ children }) {
  return (
    <div className="flex">
      <div className="w-64">
        <Sidebar />
      </div>

      <div className="flex flex-1 flex-col">
        <div>
          <p className="flex justify-end p-5 items-center font-bold text-2xl">
            Hi, Admin
          </p>
        </div>

        {children}
      </div>
    </div>
  );
}
