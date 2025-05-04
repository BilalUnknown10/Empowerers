const userInfo = {
    "Registration Date": "February 29, 2024 5:08 AM",
    "First Name": "Castor",
    "Last Name": "Clarke",
    "Username": "empowerers",
    "Email": "shahzadadeem@gmail.com",
    "Phone Number": "-",
    "Skill/Occupation": "-",
    "Biography": "-",
  };
  
  export default function Profile() {
    return (
      
        <div className="w-auto h-auto bg-gray-50 lg:p-16 md:p-12 p-8">
          <h1 className="text-2xl font-semibold mb-6">My Profile</h1>
          <div className="space-y-4">
            {Object.entries(userInfo).map(([label, value], index) => (
              <div
                key={index}
                className="flex flex-col sm:flex-row sm:justify-between pb-3"
              >
                <span className="text-gray-500">{label}:</span>
                <span className="font-medium sm:text-right">{value}</span>
              </div>
            ))}
          </div>
        </div>
    );
  }
  