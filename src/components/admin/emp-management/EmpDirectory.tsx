import { useState } from "react";

type AttendanceStatus = "Present" | "Absent" | "On Leave";

// Sample Employee Data
const initialEmployees = [
  {
    id: 1,
    name: "John Doe",
    department: "Engineering",
    jobTitle: "Software Engineer",
    email: "john.doe@example.com",
    phone: "123-456-7890",
    location: "New York",
    profilePic: "https://via.placeholder.com/150",
    status: "Active",
    attendance: "Present", // Default attendance
    dateOfJoining: "2020-01-15",
    skills: ["JavaScript", "React", "Node.js"],
  },
  {
    id: 2,
    name: "Jane Smith",
    department: "HR",
    jobTitle: "HR Manager",
    email: "jane.smith@example.com",
    phone: "987-654-3210",
    location: "San Francisco",
    profilePic: "https://via.placeholder.com/150",
    status: "On Leave",
    attendance: "On Leave", // Default attendance
    dateOfJoining: "2018-05-20",
    skills: ["Recruitment", "Conflict Resolution"],
  },
];

const EmployeeDirectory = () => {
  const [employees, setEmployees] = useState(initialEmployees);
  const [searchQuery, setSearchQuery] = useState("");
  const [filter, setFilter] = useState("All");

  // Filter and Search Logic
  const filteredEmployees = employees.filter((employee) => {
    const matchesSearch =
      employee.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      employee.department.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesFilter =
      filter === "All" ||
      employee.status === filter ||
      employee.attendance === filter;

    return matchesSearch && matchesFilter;
  });

  // Mark Attendance
  const handleAttendanceChange = (id: number, newStatus: AttendanceStatus) => {
    setEmployees((prevEmployees) =>
      prevEmployees.map((employee) =>
        employee.id === id ? { ...employee, attendance: newStatus } : employee
      )
    );
  };

  return (
    <div className="p-6 bg-gray-900 dark:bg-gray-800 min-h-screen text-gray-200">
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
            key={employee.id}
            className="bg-gray-800 shadow-md rounded-md p-4 flex flex-col items-center text-gray-100"
          >
            <img
              src={employee.profilePic}
              alt={`${employee.name}'s profile`}
              className="w-24 h-24 rounded-full mb-4"
            />
            <h2 className="text-xl font-bold text-gray-100">{employee.name}</h2>
            <p className="text-gray-400">{employee.jobTitle}</p>
            <p className="text-gray-500">{employee.department}</p>
            <p className="text-sm text-gray-600">
              Joined: {employee.dateOfJoining}
            </p>
            <div className="mt-4">
              <p className="text-sm text-gray-400">Email: {employee.email}</p>
              <p className="text-sm text-gray-400">Phone: {employee.phone}</p>
            </div>
            <div className="mt-4">
              <h3 className="text-sm font-bold text-gray-300">Skills</h3>
              <ul className="text-sm text-gray-400">
                {employee.skills.map((skill, index) => (
                  <li key={index}>{skill}</li>
                ))}
              </ul>
            </div>
            <p
              className={`mt-4 px-3 py-1 rounded-full text-sm ${
                employee.attendance === "Present"
                  ? "bg-green-900 text-green-400"
                  : employee.attendance === "Absent"
                  ? "bg-red-900 text-red-400"
                  : "bg-yellow-900 text-yellow-400"
              }`}
            >
              {employee.attendance}
            </p>
            <div className="mt-4 flex space-x-2">
              <button
                className="px-3 py-1 bg-green-700 text-sm rounded-md text-gray-100"
                onClick={() => handleAttendanceChange(employee.id, "Present")}
              >
                Mark Present
              </button>
              <button
                className="px-3 py-1 bg-red-700 text-sm rounded-md text-gray-100"
                onClick={() => handleAttendanceChange(employee.id, "Absent")}
              >
                Mark Absent
              </button>
              <button
                className="px-3 py-1 bg-yellow-700 text-sm rounded-md text-gray-100"
                onClick={() => handleAttendanceChange(employee.id, "On Leave")}
              >
                Mark On Leave
              </button>
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
              {employees.length}
            </p>
          </div>
          <div className="bg-gray-800 shadow-md rounded-md p-4 text-gray-200">
            <h3 className="text-lg font-bold text-gray-100">Present</h3>
            <p className="text-2xl font-bold text-green-400">
              {employees.filter((e) => e.attendance === "Present").length}
            </p>
          </div>
          <div className="bg-gray-800 shadow-md rounded-md p-4 text-gray-200">
            <h3 className="text-lg font-bold text-gray-100">Absent</h3>
            <p className="text-2xl font-bold text-red-400">
              {employees.filter((e) => e.attendance === "Absent").length}
            </p>
          </div>
          <div className="bg-gray-800 shadow-md rounded-md p-4 text-gray-200">
            <h3 className="text-lg font-bold text-gray-100">On Leave</h3>
            <p className="text-2xl font-bold text-yellow-400">
              {employees.filter((e) => e.attendance === "On Leave").length}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmployeeDirectory;
