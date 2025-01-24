import { useAllEmployeesQuery } from "@/redux/api/emp-API/EmpAPI";
import { useState } from "react";
import EmployeeDocuments from "./EmpDocuments";
import { Employee } from "@/types/types";

const EmployeeDirectory = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [filter, setFilter] = useState("All");

  const [switchDetailes, setSwitchDetailes] = useState<Employee>();
  const [toggle, setToggle] = useState(false);

  console.log(switchDetailes);

  const { data, isLoading, isError } = useAllEmployeesQuery();

  if (isLoading) {
    return <div className="text-gray-200">Loading employees...</div>;
  }

  if (isError || !data?.allRequests) {
    return (
      <div className="text-red-500">
        Failed to fetch employee data. Try again later.
      </div>
    );
  }

  // Filter and Search Logic
  const filteredEmployees = data.allRequests.filter((employee) => {
    const matchesSearch =
      employee.firstName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      employee.skill?.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesFilter = filter === "All";

    return matchesSearch && matchesFilter;
  });

  const handleClick = (employee: Employee) => {
    setSwitchDetailes(employee);
    setToggle(false);
  };

  return switchDetailes?._id && !toggle ? (
    <EmployeeDocuments switchDetailes={switchDetailes} setToggle={setToggle} />
  ) : (
    <div className="p-6 bg-gray-900 min-h-screen text-gray-200">
      <div className="mb-6">
        <h1 className="text-3xl font-bold text-gray-100">Employee Directory</h1>
        <p className="text-gray-400">
          Manage employee information and attendance
        </p>
      </div>

      {/* Search and Filters */}
      <div className="flex flex-wrap gap-4 mb-6">
        <input
          type="text"
          placeholder="Search by name or department..."
          className="flex-1 p-2 bg-gray-700 border border-gray-600 rounded-md text-gray-100 placeholder-gray-400"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <select
          className="p-2 bg-gray-700 border border-gray-600 rounded-md text-gray-100"
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
        >
          <option value="All">All</option>
          <option value="Present">Present</option>
          <option value="Absent">Absent</option>
          <option value="On Leave">On Leave</option>
        </select>
      </div>

      {/* Employee Cards */}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredEmployees.map((employee) => (
          <div
            key={employee._id}
            className="bg-gray-800 shadow-md rounded-lg overflow-hidden flex flex-col flex-wrap justify-center md:flex-row hover:scale-105 transform transition-transform duration-200 text-gray-100 cursor-pointer"
            onClick={() => handleClick(employee)}
          >
            {/* Profile Image */}
            <div className="w-full bg-gray-700 p-4 flex items-center justify-center">
              <img
                src={employee.profilePic || "https://via.placeholder.com/150"}
                alt={`${employee.firstName}'s profile`}
                className="h-24 rounded-full border-2 border-gray-600"
              />
            </div>

            {/* Employee Info */}
            <div className="flex-1 p-4 flex flex-col">
              <h2 className="text-xl font-bold">{`${employee.firstName} ${employee.lastName}`}</h2>
              <p className="text-sm text-gray-400">
                {employee.qualification || "N/A"}
              </p>
              <p className="text-xs text-gray-500 mt-1">
                Joined: {employee.resignationDate || "N/A"}
              </p>

              {/* Contact Info */}
              <div className="mt-3">
                <p className="text-sm">
                  <span className="font-semibold">Email:</span> {employee.email}
                </p>
                <p className="text-sm">
                  <span className="font-semibold">Phone:</span>{" "}
                  {employee.phoneNumber || "N/A"}
                </p>
              </div>

              {/* Skills */}
              <div className="mt-4">
                <h3 className="text-sm font-bold">Skills</h3>
                <ul className="flex flex-wrap gap-2 mt-1">
                  {employee.skill?.split(",").map((skill, index) => (
                    <li
                      key={index}
                      className="bg-gray-700 text-gray-300 text-xs px-2 py-1 rounded-full"
                    >
                      {skill.trim()}
                    </li>
                  )) || (
                    <li className="text-sm text-gray-400">No skills listed</li>
                  )}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Analytics */}
      <div className="mt-10">
        <h2 className="text-2xl font-bold text-gray-100 mb-4">
          Attendance Analytics
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-gray-800 shadow-md rounded-md p-4 text-gray-200">
            <h3 className="text-lg font-bold text-gray-100">Total Employees</h3>
            <p className="text-2xl font-bold text-gray-100">
              {filteredEmployees.length}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmployeeDirectory;
