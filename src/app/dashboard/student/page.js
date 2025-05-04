import {mdiAccountGroup, mdiBookCheck, mdiBookCheckOutline, mdiBookOpenPageVariant, mdiCurrencyUsd, mdiLibraryOutline, mdiStar, mdiStarOutline} from "@mdi/js"
import Sidebar from '@/components/student-dashboard/Sidebar'
// import Navbar from "../components/navbar";

const dashboardMenu = [
  { icon: mdiBookOpenPageVariant, label: 'Enrolled Courses', path: '/', value: '0' },
  { icon: mdiBookCheckOutline, label: 'Active Courses', path: '/', value: '0'},
  { icon: mdiBookCheck, label: 'Completed Courses', path: '/', value: '1' },
  { icon: mdiAccountGroup , label: 'Total Students', path: '/', value: '534' },
  { icon: mdiLibraryOutline, label: 'Total Courses', path: '/', value: '4' },
  { icon: mdiCurrencyUsd, label: 'Total Earnings', path: '/', value: '$0.00' },
]

const courses = [
  { name: "eBay Crash Course", enrolled: 525, rating: 4 },
  { name: "TikTok Shop Training", enrolled: 2, rating: 1 },
  { name: "Etsy Training", enrolled: 3, rating: 2 },
  { name: "eBay Training", enrolled: 4, rating: 0 },
];

export default function Dashboard() {

  // Inline Icon Component
const Icon = ({ path, size = 20, className = "" }) => (
  <span className={`inline-flex justify-center items-center ${className}`}>
    <svg viewBox="0 0 24 24" width={size} height={size} className="inline-block">
      <path fill="currentColor" d={path} />
    </svg>
  </span>
);

  return (
    <div className="md:flex md:p-5">
    {/* <Navbar/> */}
    <Sidebar/>
    

  {/* Main Content (Takes the remaining space) */}
  <div className="p-6 bg-gray-100 w-[100%]">
    <h1 className="text-2xl font-bold">Dashboard</h1>

    {/* Dashboard Cards */}
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 p-6">
      {dashboardMenu.map((item, index) => (
        <div 
          key={index} 
          className="border rounded-lg shadow-sm p-4 flex flex-row lg:flex-col  items-center lg:min-h-32 sm:max-h-12">
          <Icon path={item.icon} className="text-4xl bg-gray-100 p-2 rounded-full text-[#239371]" /> 
          <h2 className="text-2xl font-bold mt-2 hidden lg:block">{item.value}</h2>       
          <a href={item.href} className="text-gray-600 text-md">{item.label}</a>
          <h2 className="text-2xl font-bold mt-2 block lg:hidden ml-auto">{item.value}</h2>       
        </div>
      ))}
    </div>

    {/* Courses Table */}
    <div className="p-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold">My Courses</h2>
        <a href="#" className="text-gray-500 hover:underline text-sm">View All</a>
      </div>

      <div className="overflow-x-auto mt-4 border border-gray-300 rounded-lg">
        <table className="min-w-full border-collapse">
          <thead className="bg-gray-100 text-gray-600 text-left border-b border-gray-300">
            <tr>
              <th className="p-4 border-gray-300">Course Name</th>
              <th className="p-4 border-gray-300">Enrolled</th>
              <th className="p-4">Rating</th>
            </tr>
          </thead>
          <tbody>
            {courses.map((course, index) => (
              <tr key={index} className="border-b border-gray-300">
                <td className="p-4 border-gray-300">{course.name}</td>
                <td className="p-4 border-gray-300">{course.enrolled}</td>
                <td className="p-4 flex">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Icon 
                      key={i} 
                      path={i < course.rating ? mdiStar : mdiStarOutline} 
                      size={1} 
                      className="text-yellow-500" 
                    />
                  ))}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>

</div>

 
    </div>
  );
    
}
