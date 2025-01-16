import { useAllEmployeesQuery } from "@/redux/api/emp-API/EmpAPI";
import { useState } from "react";

type AttendanceStatus = "Present" | "Absent" | "On Leave";

const EmployeeDirectory = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [filter, setFilter] = useState("All");

  const { data, isLoading, isError } = useAllEmployeesQuery();

  console.log(data);

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
    // employee.status === filter ||
    // employee.attendance === filter;s

    return matchesSearch && matchesFilter;
  });

  return (
    <div className="p-6 bg-gray-900 min-h-screen text-gray-200">
      {/* Header */}
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
            className="bg-gray-800 shadow-md rounded-md p-4 flex flex-col items-center text-gray-100"
          >
            <img
              src={employee.profilePic || "https://via.placeholder.com/150"}
              alt={`${employee.firstName}'s profile`}
              className="w-24 h-24 rounded-full mb-4"
            />
            <div className="">
              <h2 className="text-xl font-bold text-gray-100">
                {`${employee.firstName} ${employee.lastName}`}
              </h2>
            </div>
            <p className="text-gray-100">{employee.qualification || "N/A"}</p>
            <p className="text-sm text-gray-400">
              Joined: {employee.resignationDate || "N/A"}
            </p>
            <div className="mt-4">
              <p className="text-sm">Email: {employee.email}</p>
              <p className="text-sm ">Phone: {employee.phoneNumber || "N/A"}</p>
            </div>
            <div className="mt-4 flex flex-col items-center">
              <h3 className="text-sm font-bold text-gray-100">Skills</h3>
              <p className="text-sm text-gray-300">{employee.skill}</p>
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
